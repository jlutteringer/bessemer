'use client'

import * as React from 'react'
import { createContext, ReactNode, useCallback, useContext, useEffect, useId, useRef, useState } from 'react'
import { AppBar, ClickAwayListener, Dialog, DialogContent, IconButton, Paper, Popper, Theme, Toolbar, Typography, useMediaQuery } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloseIcon from '@mui/icons-material/Close'
import { Objects } from '@bessemer/cornerstone'

type PopoverLevel = {
  openKey: string | null
  setOpenKey: React.Dispatch<React.SetStateAction<string | null>>
  closeAll: () => void
}

const PopoverLevelContext = createContext<PopoverLevel | null>(null)

const PopoverLevelProvider = ({ closeAll, children }: { closeAll: () => void; children: ReactNode }) => {
  const [openKey, setOpenKey] = useState<string | null>(null)
  return <PopoverLevelContext.Provider value={{ openKey, setOpenKey, closeAll }}>{children}</PopoverLevelContext.Provider>
}

export const StackedPopover = ({ trigger, title, children }: { trigger: ReactNode; title: ReactNode; children: ReactNode }) => {
  const parent = useContext(PopoverLevelContext)
  const [rootOpenKey, setRootOpenKey] = useState<string | null>(null)
  const { openKey, setOpenKey } = parent ?? { openKey: rootOpenKey, setOpenKey: setRootOpenKey }
  const key = useId()
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)

  const close = useCallback(() => setOpenKey((current) => (current === key ? null : current)), [setOpenKey, key])
  const closeRoot = useCallback(() => setRootOpenKey(null), [])
  const closeAll = parent?.closeAll ?? closeRoot
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const open = openKey === key

  const popover = (
    <>
      <span
        ref={setAnchor}
        data-stacked-popover
        onClick={() => setOpenKey((current) => (current === key ? null : key))}
      >
        {trigger}
      </span>

      {isMobile ? (
        <PopoverDialog
          open={open}
          title={title}
          nested={Objects.isPresent(parent)}
          onBack={close}
          onClose={closeAll}
        >
          <PopoverLevelProvider closeAll={closeAll}>{children}</PopoverLevelProvider>
        </PopoverDialog>
      ) : (
        <Popper
          open={open && Objects.isPresent(anchor)}
          anchorEl={anchor}
          placement="bottom-start"
          modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
          sx={{ zIndex: (theme) => theme.zIndex.modal }}
        >
          <PopoverLevelProvider closeAll={closeAll}>
            <PopoverPanel onClose={close}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 1 }}
              >
                {title}
              </Typography>
              {children}
            </PopoverPanel>
          </PopoverLevelProvider>
        </Popper>
      )}
    </>
  )

  if (Objects.isPresent(parent)) {
    return popover
  }

  return (
    <span
      onClick={(event) => {
        event.stopPropagation()
        // Following a link anywhere in the stack (e.g. View in rulebook) closes it
        if (Objects.isPresent((event.target as HTMLElement).closest('a[href]'))) {
          closeAll()
        }
      }}
    >
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={close}
      >
        <span>{popover}</span>
      </ClickAwayListener>
    </span>
  )
}

// On small screens each level is a dialog, opened on top of the one it was opened from; Back closes just this level, and Close the whole stack
const PopoverDialog = ({
  open,
  title,
  nested,
  onBack,
  onClose,
  children,
}: {
  open: boolean
  title: ReactNode
  nested: boolean
  onBack: () => void
  onClose: () => void
  children: ReactNode
}) => {
  return (
    <Dialog
      open={open}
      onClose={onBack}
      fullScreen
      hideBackdrop={nested}
    >
      <AppBar position="sticky">
        <Toolbar>
          {nested && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Back"
              onClick={onBack}
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Close"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

const PopoverPanel = ({ onClose, children }: { onClose: () => void; children: ReactNode }) => {
  const { openKey, setOpenKey } = useContext(PopoverLevelContext)!
  const paperRef = useRef<HTMLDivElement>(null)
  const hasOpenChild = Objects.isPresent(openKey)

  useEffect(() => {
    if (hasOpenChild) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [hasOpenChild, onClose])

  return (
    <Paper
      ref={paperRef}
      elevation={8}
      onClick={(event) => {
        const target = event.target as HTMLElement
        if (paperRef.current?.contains(target) && Objects.isNil(target.closest('[data-stacked-popover]'))) {
          setOpenKey(null)
        }
      }}
      sx={{ p: 2, maxWidth: 480, maxHeight: 400, overflowY: 'auto' }}
    >
      {children}
    </Paper>
  )
}
