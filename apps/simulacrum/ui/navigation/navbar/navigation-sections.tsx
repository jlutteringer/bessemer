'use client'

import React, { ReactNode } from 'react'
import { Box, Stack } from '@mui/material'
import { NavbarTileSquareImage } from '@simulacrum/ui/navigation/navbar/NavbarTiles'

export type NavigationLink = {
  label: string
  href: string
}

/**
 * A top-level section of the site navigation. On wide screens its `content` shows in a dropdown under the section bar; on narrow screens
 * the mobile menu lists its `links` instead.
 */
export type NavigationSection = {
  label: string
  content: ReactNode
  links: Array<NavigationLink>
}

export const NavigationSections: Array<NavigationSection> = [
  {
    label: 'Collections',
    content: <Box>Placeholder Content</Box>,
    links: [],
  },
  {
    label: 'Tools',
    content: <ToolsDropdown />,
    links: [{ label: 'Character Builder', href: '/characters/builder' }],
  },
  {
    label: 'Game Rules',
    content: <Box>Placeholder Content</Box>,
    links: [],
  },
  {
    label: 'Sources',
    content: <Box>Placeholder Content</Box>,
    links: [],
  },
  {
    label: 'Subscribe',
    content: <Box>Placeholder Content</Box>,
    links: [],
  },
  {
    label: 'Shop',
    content: <Box>Placeholder Content</Box>,
    links: [],
  },
]

function ToolsDropdown() {
  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <NavbarTileSquareImage
        label="Character Builder"
        href="/characters/builder"
        image="/assets/character-builder.webp"
      />
      <NavbarTileSquareImage
        label="Character Builder"
        href="/characters/builder"
        image="/assets/character-builder.webp"
      />
      <NavbarTileSquareImage
        label="Character Builder"
        href="/characters/builder"
        image="/assets/character-builder.webp"
      />
      <NavbarTileSquareImage
        label="Character Builder"
        href="/characters/builder"
        image="/assets/character-builder.webp"
      />
    </Stack>
  )
}
