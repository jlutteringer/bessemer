'use client'

import * as React from 'react'
import { useMemo, useState } from 'react'
import MiniSearch from 'minisearch'
import { Autocomplete, Box, ListItemText, TextField, Typography } from '@mui/material'
import { Objects, Strings } from '@bessemer/cornerstone'
import { RichTextJson } from '@bessemer/cornerstone/rich-text'
import { ContentSection } from '@simulacrum/ruleset/content'
import { RulesetEntityReference } from '@simulacrum/ruleset/ruleset-entity'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { Rulesets } from '@simulacrum/common/engine/engine'
import { getEntityTexts } from '@simulacrum/ui/components/ruleset-entity-model'

type SearchDocument = {
  id: RulesetEntityReference
  title: string
  path: string
  text: string
}

type SearchResult = SearchDocument & { excerpt: string | null }

const ExcerptRadius = 60

const toPlainText = (node: RichTextJson): string => {
  if (Objects.isPresent(node.text)) {
    return node.text
  }

  return (node.content ?? []).map((it) => (it.type === 'text' ? toPlainText(it) : ` ${toPlainText(it)} `)).join('')
}

const getExcerpt = (text: string, terms: Array<string>): string | null => {
  const lower = text.toLowerCase()
  const index = Math.min(...terms.map((it) => lower.indexOf(it)).filter((it) => it >= 0))
  if (!Number.isFinite(index)) {
    return null
  }

  const start = Math.max(0, index - ExcerptRadius)
  const end = Math.min(text.length, index + ExcerptRadius)
  return `${start > 0 ? '…' : ''}${text.slice(start, end).trim()}${end < text.length ? '…' : ''}`
}

export const RulebookSearch = ({ sections, onSelect }: { sections: Array<ContentSection>; onSelect: (id: RulesetEntityReference) => void }) => {
  const ruleset = useRuleset()
  const [query, setQuery] = useState('')

  const { search, documents } = useMemo(() => {
    const sectionsById = new Map(sections.map((it) => [it.id, it]))
    const getPath = (section: ContentSection): Array<string> => {
      const parent = Objects.isPresent(section.parent) ? sectionsById.get(section.parent) : undefined
      return Objects.isPresent(parent) ? [...getPath(parent), Rulesets.getEntityById(parent.id, ruleset).name] : []
    }

    const documents = new Map<RulesetEntityReference, SearchDocument>(
      sections.map((it) => {
        const entity = Rulesets.getEntityById(it.id, ruleset)
        const id = it.id
        return [
          id,
          {
            id,
            title: entity.name,
            path: getPath(it).join(' › '),
            text: getEntityTexts(entity).map(toPlainText).join(' ').replace(/\s+/g, ' ').trim(),
          },
        ]
      })
    )

    const search = new MiniSearch<SearchDocument>({
      fields: ['title', 'text'],
      searchOptions: { boost: { title: 3 }, prefix: true, fuzzy: 0.2 },
    })
    search.addAll([...documents.values()])

    return { search, documents }
  }, [sections, ruleset])

  const results = useMemo((): Array<SearchResult> => {
    if (query.trim().length < 2) {
      return []
    }

    return search
      .search(query)
      .slice(0, 20)
      .map((result) => {
        const document = documents.get(result.id)!
        return { ...document, excerpt: getExcerpt(document.text, result.terms) }
      })
  }, [search, documents, query])

  return (
    <Autocomplete<SearchResult, false, false, true>
      freeSolo
      options={results}
      filterOptions={(it) => it}
      getOptionLabel={(it) => (Strings.isString(it) ? it : it.title)}
      getOptionKey={(it) => (Strings.isString(it) ? it : it.id)}
      value={null}
      inputValue={query}
      onInputChange={(_, value, reason) => reason !== 'reset' && setQuery(value)}
      onChange={(_, value) => {
        if (Objects.isPresent(value) && !Strings.isString(value)) {
          onSelect(value.id)
          setQuery('')
        }
      }}
      blurOnSelect
      renderOption={({ key, ...props }, option) => (
        <Box
          component="li"
          key={key}
          {...props}
        >
          <Box>
            <ListItemText
              primary={option.title}
              secondary={option.path}
              slotProps={{ primary: { variant: 'body2' }, secondary: { variant: 'caption' } }}
            />
            {Objects.isPresent(option.excerpt) && (
              <Typography
                variant="caption"
                component="p"
              >
                {option.excerpt}
              </Typography>
            )}
          </Box>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search the rules"
          size="small"
        />
      )}
    />
  )
}
