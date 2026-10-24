'use client'

import { createContext } from 'react'
import { CharacterSheet } from '@simulacrum/engine/character/character'

// The character being viewed, if any, so ruleset entities can show its values (e.g. an ability's remaining uses)
export const CharacterSheetContext = createContext<CharacterSheet | null>(null)
