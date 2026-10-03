'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Box, Collapse, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { NavigationSections } from '@simulacrum/ui/navigation/navbar/navigation-sections'
import { NavbarSearch } from '@simulacrum/ui/navigation/navbar/NavbarSearch'
import { SiteIcons, SocialMediaIcons } from '@simulacrum/ui/navigation/navbar/NavbarMainElements'

/**
 * The navigation for narrow screens: a menu button that opens a drawer with search, the site's sections, and the icons that don't fit in
 * the header.
 */
export const NavbarMobileMenu = ({ sx }: { sx?: SxProps<Theme> }) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // Close the menu once a link has been followed
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        sx={sx}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 300, maxWidth: '85vw', bgcolor: 'grey.900', color: 'grey.300' } } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1 }}>
          <Typography variant="subtitle1">Menu</Typography>
          <IconButton
            color="inherit"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ px: 2, pb: 2, color: 'white' }}>
          <NavbarSearch sx={{ ml: 0, maxWidth: 'none' }} />
        </Box>

        <Divider sx={{ borderColor: 'grey.800' }} />

        <List disablePadding>
          {NavigationSections.map((section) => {
            const isExpanded = expandedSection === section.label
            return (
              <Box key={section.label}>
                <ListItemButton onClick={() => setExpandedSection(isExpanded ? null : section.label)}>
                  <ListItemText primary={section.label} />
                  {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={isExpanded}>
                  <List disablePadding>
                    {section.links.length === 0 ? (
                      <ListItemText
                        secondary="Coming soon"
                        sx={{ pl: 4, py: 1 }}
                        slotProps={{ secondary: { sx: { color: 'grey.500' } } }}
                      />
                    ) : (
                      section.links.map((link) => (
                        <ListItemButton
                          key={link.href}
                          component={Link}
                          href={link.href}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={link.label} />
                        </ListItemButton>
                      ))
                    )}
                  </List>
                </Collapse>
              </Box>
            )
          })}
        </List>

        <Divider sx={{ borderColor: 'grey.800' }} />

        <Box sx={{ px: 1, py: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <SiteIcons />
          <SocialMediaIcons />
        </Box>
      </Drawer>
    </>
  )
}
