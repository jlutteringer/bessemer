'use client'

import * as React from 'react'
import { createContext, ReactNode, useCallback, useContext, useEffect, useId, useRef, useState } from 'react'
import { ClickAwayListener, Paper, Popper } from '@mui/material'
import { Objects } from '@bessemer/cornerstone'

type TooltipLevel = {
  openKey: string | null
  setOpenKey: React.Dispatch<React.SetStateAction<string | null>>
}

const TooltipLevelContext = createContext<TooltipLevel | null>(null)

const TooltipLevelProvider = ({ children }: { children: ReactNode }) => {
  const [openKey, setOpenKey] = useState<string | null>(null)
  return <TooltipLevelContext.Provider value={{ openKey, setOpenKey }}>{children}</TooltipLevelContext.Provider>
}

export const StackedTooltip = ({ trigger, children }: { trigger: ReactNode; children: ReactNode }) => {
  const parent = useContext(TooltipLevelContext)
  const [rootOpenKey, setRootOpenKey] = useState<string | null>(null)
  const { openKey, setOpenKey } = parent ?? { openKey: rootOpenKey, setOpenKey: setRootOpenKey }
  const key = useId()
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)

  const close = useCallback(() => setOpenKey((current) => (current === key ? null : current)), [setOpenKey, key])

  const tooltip = (
    <>
      <span
        ref={setAnchor}
        data-stacked-tooltip
        onClick={() => setOpenKey((current) => (current === key ? null : key))}
      >
        {trigger}
      </span>

      <Popper
        open={openKey === key && Objects.isPresent(anchor)}
        anchorEl={anchor}
        placement="bottom-start"
        modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
        sx={{ zIndex: (theme) => theme.zIndex.modal }}
      >
        <TooltipLevelProvider>
          <TooltipPanel onClose={close}>{children}</TooltipPanel>
        </TooltipLevelProvider>
      </Popper>
    </>
  )

  if (Objects.isPresent(parent)) {
    return tooltip
  }

  return (
    <span onClick={(event) => event.stopPropagation()}>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={close}
      >
        <span>{tooltip}</span>
      </ClickAwayListener>
    </span>
  )
}

const TooltipPanel = ({ onClose, children }: { onClose: () => void; children: ReactNode }) => {
  const { openKey, setOpenKey } = useContext(TooltipLevelContext)!
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
        if (paperRef.current?.contains(target) && Objects.isNil(target.closest('[data-stacked-tooltip]'))) {
          setOpenKey(null)
        }
      }}
      sx={{ p: 2, maxWidth: 480, maxHeight: 400, overflowY: 'auto' }}
    >
      {children}
    </Paper>
  )
}
