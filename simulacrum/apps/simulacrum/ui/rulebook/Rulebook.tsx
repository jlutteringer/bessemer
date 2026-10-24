'use client'

import * as React from 'react'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Box, Card, CardActionArea, CardContent, Drawer, Fab, Grid, Link, List, ListItem, Theme, Typography, useMediaQuery } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { Arrays, ErrorEvents, Objects } from '@bessemer/cornerstone'
import { ContentSection } from '@simulacrum/ruleset/content'
import { RulesetEntityReference } from '@simulacrum/ruleset/ruleset-entity'
import { Ruleset, RulesetReference } from '@simulacrum/engine/ruleset'
import { ApplicationContext } from '@simulacrum/application'
import { useClientContext } from '@simulacrum/ui/application/use-client-context'
import { StandardPageHeader } from '@simulacrum/ui/layout/StandardPageHeader'
import { RulesetEntityContent } from '@simulacrum/ui/components/RulesetEntityContent'
import { RulesetContext, useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { RulebookSearch } from '@simulacrum/ui/rulebook/RulebookSearch'
import { Rulesets } from '@simulacrum/engine'

const useRulesets = (): { rulesets: Array<Ruleset> } => {
  const { rulesets } = (useClientContext() as unknown as ApplicationContext).client
  return { rulesets }
}

type ContentNode = {
  section: ContentSection
  children: Array<ContentNode>
}

// Nests each section under its parent, keeping the order sections appear in the ruleset's content
const buildContentTree = (content: Array<ContentSection>): Array<ContentNode> => {
  const buildChildren = (parent: RulesetEntityReference | null): Array<ContentNode> => {
    return content.filter((it) => it.parent === parent).map((section) => ({ section, children: buildChildren(section.id) }))
  }

  return buildChildren(null)
}

const flattenContentTree = (nodes: Array<ContentNode>): Array<RulesetEntityReference> => {
  return nodes.flatMap((node) => [node.section.id, ...flattenContentTree(node.children)])
}

const ScrollingDownThreshold = 1 / 3
const ScrollingUpThreshold = 2 / 3

type ActiveSection = {
  activeId: RulesetEntityReference | null
  select: (id: RulesetEntityReference) => void
}

const useActiveSection = (sectionIds: Array<RulesetEntityReference>): ActiveSection => {
  const [activeId, setActiveId] = useState<RulesetEntityReference | null>(null)
  const activeIdRef = useRef<RulesetEntityReference | null>(null)
  const selectedScrollY = useRef<number | null>(null)

  const activate = useCallback((id: RulesetEntityReference | null) => {
    activeIdRef.current = id
    setActiveId(id)
  }, [])

  const select = useCallback(
    (id: RulesetEntityReference) => {
      document.getElementById(id)?.scrollIntoView()
      window.history.replaceState(null, '', `#${id}`)
      selectedScrollY.current = window.scrollY
      activate(id)
    },
    [activate]
  )

  useEffect(() => {
    let frame: number | null = null
    let lastScrollY = window.scrollY
    let scrollingDown = true

    const update = () => {
      frame = null
      const scrollY = window.scrollY
      if (scrollY !== lastScrollY) {
        scrollingDown = scrollY > lastScrollY
        lastScrollY = scrollY
      }

      if (Objects.isPresent(selectedScrollY.current)) {
        if (scrollY === selectedScrollY.current) {
          return
        }

        selectedScrollY.current = null
      }

      if (scrollY <= 2) {
        activate(sectionIds[0] ?? null)
        return
      }

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {
        activate(sectionIds.at(-1) ?? null)
        return
      }

      const threshold = window.innerHeight * (scrollingDown ? ScrollingDownThreshold : ScrollingUpThreshold)
      const passed = sectionIds.filter((id) => {
        const element = document.getElementById(id)
        return Objects.isPresent(element) && element.getBoundingClientRect().top <= threshold
      })

      const candidate = passed.at(-1) ?? sectionIds[0] ?? null
      const current = activeIdRef.current
      const movement = sectionIds.indexOf(candidate!) - sectionIds.indexOf(current!)
      if (Objects.isNil(current) || (scrollingDown ? movement > 0 : movement < 0)) {
        activate(candidate)
      }
    }

    const onScroll = () => {
      if (Objects.isNil(frame)) {
        frame = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (Objects.isPresent(frame)) {
        cancelAnimationFrame(frame)
      }
    }
  }, [sectionIds, activate])

  return { activeId, select }
}

export const RulebookIndex = () => {
  const { rulesets } = useRulesets()

  return (
    <>
      <StandardPageHeader title="Rulebook" />
      <Grid
        container
        spacing={2}
      >
        {rulesets.map((ruleset) => (
          <Grid
            key={ruleset.id}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardActionArea
                href={`/rulebook/${ruleset.id}`}
                disabled={Arrays.isEmpty(ruleset.content)}
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Typography variant="h6">{ruleset.name}</Typography>
                  {Arrays.isEmpty(ruleset.content) && <Typography variant="caption">No rules content yet</Typography>}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export const RulebookReader = ({ rulesetId }: { rulesetId: RulesetReference }) => {
  const { rulesets } = useRulesets()

  const ruleset = rulesets.find((it) => it.id === rulesetId)
  ErrorEvents.assertPresent(ruleset)

  const tree = useMemo(() => buildContentTree(ruleset?.content ?? []), [ruleset])

  return (
    <RulesetContext.Provider value={ruleset}>
      <StandardPageHeader title={ruleset.name} />
      <Box sx={{ display: 'flex', gap: 4 }}>
        <RulebookNavigation
          sections={ruleset.content}
          tree={tree}
        />
        {/* Leaves room at the bottom on small screens for the floating Contents button */}
        <Box sx={{ flex: 1, minWidth: 0, pb: { xs: 10, md: 0 } }}>
          {tree.map((node) => (
            <ContentSectionView
              key={node.section.id}
              node={node}
              depth={0}
            />
          ))}
        </Box>
      </Box>
    </RulesetContext.Provider>
  )
}

// A sticky sidebar on larger screens; on small screens, a floating Contents button that opens the same navigation in a drawer
const RulebookNavigation = ({ sections, tree }: { sections: Array<ContentSection>; tree: Array<ContentNode> }) => {
  const sectionIds = useMemo(() => flattenContentTree(tree), [tree])
  const { activeId, select } = useActiveSection(sectionIds)
  const tableOfContentsRef = useRef<HTMLDivElement>(null)
  // Matches on the server, which renders the sidebar; small screens hide it with CSS until this updates
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'), { defaultMatches: true })
  const [open, setOpen] = useState(false)

  const navigate = useCallback(
    (id: RulesetEntityReference) => {
      select(id)
      setOpen(false)
    },
    [select]
  )

  useLayoutEffect(() => {
    const container = tableOfContentsRef.current
    const link = Objects.isPresent(activeId) ? container?.querySelector<HTMLElement>(`[data-section-id="${activeId}"]`) : null
    if (Objects.isNil(container) || Objects.isNil(link)) {
      return
    }

    const containerRect = container.getBoundingClientRect()
    const linkRect = link.getBoundingClientRect()
    const offset = linkRect.top + linkRect.height / 2 - (containerRect.top + containerRect.height / 2)
    container.scrollTop += offset
  }, [activeId])

  const navigation = (
    <>
      <RulebookSearch
        sections={sections}
        onSelect={navigate}
      />
      <Box
        ref={tableOfContentsRef}
        sx={{ minHeight: 0, overflowY: 'auto' }}
      >
        <TableOfContents
          nodes={tree}
          activeId={activeId}
          onSelect={navigate}
        />
      </Box>
    </>
  )

  return (
    <>
      <Box
        component="nav"
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: 2,
          width: '25%',
          flexShrink: 0,
          alignSelf: 'flex-start',
          position: 'sticky',
          top: 24,
          maxHeight: 'calc(100vh - 48px)',
        }}
      >
        {isDesktop && navigation}
      </Box>
      {!isDesktop && (
        <>
          <Fab
            color="primary"
            aria-label="Contents"
            onClick={() => setOpen(true)}
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
          >
            <MenuBookIcon />
          </Fab>
          <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            keepMounted
            disableScrollLock
            slotProps={{ paper: { sx: { width: 'min(320px, 85vw)', p: 2, display: 'flex', flexDirection: 'column', gap: 2 } } }}
          >
            {navigation}
          </Drawer>
        </>
      )}
    </>
  )
}

const TableOfContents = ({
  nodes,
  activeId,
  onSelect,
  depth = 0,
}: {
  nodes: Array<ContentNode>
  activeId: RulesetEntityReference | null
  onSelect: (id: RulesetEntityReference) => void
  depth?: number
}) => {
  const ruleset = useRuleset()

  return (
    <List
      dense
      disablePadding
      sx={{ pl: depth === 0 ? 0 : 2 }}
    >
      {nodes.map((node) => (
        <React.Fragment key={node.section.id}>
          <ListItem disablePadding>
            <Link
              href={`#${node.section.id}`}
              data-section-id={node.section.id}
              onClick={(event) => {
                event.preventDefault()
                onSelect(node.section.id)
              }}
              underline="hover"
              color={node.section.id === activeId ? 'primary.main' : depth === 0 ? 'text.primary' : 'text.secondary'}
              variant={depth === 0 || node.section.id === activeId ? 'subtitle2' : 'body2'}
              sx={{
                py: 0.25,
                pl: 1,
                width: '100%',
                borderLeft: 2,
                borderColor: node.section.id === activeId ? 'primary.main' : 'transparent',
              }}
            >
              {Rulesets.getEntityById(node.section.id, ruleset).name}
            </Link>
          </ListItem>
          {!Arrays.isEmpty(node.children) && (
            <TableOfContents
              nodes={node.children}
              activeId={activeId}
              onSelect={onSelect}
              depth={depth + 1}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  )
}

const HeadingVariants = ['h4', 'h5', 'h6', 'subtitle2'] as const

const ContentSectionView = ({ node, depth }: { node: ContentNode; depth: number }) => {
  const ruleset = useRuleset()
  const entity = Rulesets.getEntityById(node.section.id, ruleset)
  const { name } = entity
  const variant = HeadingVariants[Math.min(depth, HeadingVariants.length - 1)]

  if (depth >= HeadingVariants.length - 1) {
    return (
      <>
        <Typography
          id={node.section.id}
          variant={variant}
          sx={{ scrollMarginTop: 24, mt: 1.5, mb: 0.5 }}
        >
          {name}
        </Typography>
        <RulesetEntityContent entity={entity} />
        {node.children.map((child) => (
          <ContentSectionView
            key={child.section.id}
            node={child}
            depth={depth + 1}
          />
        ))}
      </>
    )
  }

  return (
    <Box
      component="section"
      id={node.section.id}
      sx={{ scrollMarginTop: 24, mb: 3 }}
    >
      <Typography
        variant={variant}
        sx={{ mb: 1 }}
      >
        {name}
      </Typography>

      <RulesetEntityContent entity={entity} />

      {node.children.map((child) => (
        <ContentSectionView
          key={child.section.id}
          node={child}
          depth={depth + 1}
        />
      ))}
    </Box>
  )
}
