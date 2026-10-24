'use client'

import { createContext } from 'react'
import { CharacterSheet } from '@simulacrum/engine/character/character'
import { ExpressionContext } from '@bessemer/cornerstone/expression'

export type CharacterSheetContextValue = {
  character: CharacterSheet
  expressionContext: ExpressionContext
}

export const CharacterSheetContext = createContext<CharacterSheetContextValue | null>(null)
