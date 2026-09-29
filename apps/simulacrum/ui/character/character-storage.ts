'use client'

import { useSyncExternalStore } from 'react'
import { Ulids } from '@bessemer/cornerstone'
import { CharacterRecord } from '@simulacrum/common/character/character'

// FUTURE characters are persisted to local storage until there is a real backend

export type StoredCharacter = {
  id: string
  createdAt: string
  updatedAt: string
  character: CharacterRecord
}

const StorageKey = 'simulacrum.characters'
const ChangeEvent = 'simulacrum.characters.change'
const EmptyCharacters: Array<StoredCharacter> = []

// useSyncExternalStore requires a stable snapshot, so the parsed value is cached against the raw string it came from
let cachedRaw: string | null = null
let cachedCharacters: Array<StoredCharacter> = EmptyCharacters

const readCharacters = (): Array<StoredCharacter> => {
  const raw = window.localStorage.getItem(StorageKey)
  if (raw !== cachedRaw) {
    cachedRaw = raw
    cachedCharacters = raw === null ? EmptyCharacters : (JSON.parse(raw) as Array<StoredCharacter>)
  }

  return cachedCharacters
}

const writeCharacters = (characters: Array<StoredCharacter>): void => {
  window.localStorage.setItem(StorageKey, JSON.stringify(characters))
  // The native storage event only fires in other tabs, so notify this tab's subscribers directly
  window.dispatchEvent(new Event(ChangeEvent))
}

const subscribe = (onChange: () => void): (() => void) => {
  window.addEventListener('storage', onChange)
  window.addEventListener(ChangeEvent, onChange)
  return () => {
    window.removeEventListener('storage', onChange)
    window.removeEventListener(ChangeEvent, onChange)
  }
}

/**
 * Returns the stored characters, or `null` while rendering on the server (where local storage is unavailable).
 */
export const useStoredCharacters = (): Array<StoredCharacter> | null => {
  return useSyncExternalStore<Array<StoredCharacter> | null>(subscribe, readCharacters, () => null)
}

/**
 * Returns the stored character with the given id, `undefined` if it doesn't exist, or `null` while rendering on the server.
 */
export const useStoredCharacter = (id: string | null): StoredCharacter | undefined | null => {
  const characters = useStoredCharacters()
  if (characters === null) {
    return null
  }

  return characters.find((it) => it.id === id)
}

/**
 * Creates or updates a character. Pass `null` as the id to create a new character; the saved entry is returned.
 */
export const saveCharacter = (id: string | null, character: CharacterRecord): StoredCharacter => {
  const characters = readCharacters()
  const now = new Date().toISOString()
  const existing = characters.find((it) => it.id === id)

  if (existing === undefined) {
    const created: StoredCharacter = { id: Ulids.generate(), createdAt: now, updatedAt: now, character }
    writeCharacters([...characters, created])
    return created
  }

  const updated: StoredCharacter = { ...existing, updatedAt: now, character }
  writeCharacters(characters.map((it) => (it.id === id ? updated : it)))
  return updated
}

export const copyCharacter = (id: string): void => {
  const existing = readCharacters().find((it) => it.id === id)
  if (existing !== undefined) {
    saveCharacter(null, { ...existing.character, name: `${existing.character.name} (Copy)` })
  }
}

export const deleteCharacter = (id: string): void => {
  writeCharacters(readCharacters().filter((it) => it.id !== id))
}
