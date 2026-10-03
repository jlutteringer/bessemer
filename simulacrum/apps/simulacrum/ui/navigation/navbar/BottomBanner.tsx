'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Fade, Popper, Stack, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { NavigationSections } from '@simulacrum/ui/navigation/navbar/navigation-sections'
import { usePathname } from 'next/navigation'

// TODO there's probably some kind of abstract component that can be pulled out of this
export const BottomBanner = () => {
  const pathname = usePathname()
  const container = useRef<HTMLDivElement>(null)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null)
    } else {
      setActiveMenu(menu)
    }
  }

  const closeMenu = () => {
    setActiveMenu(null)
  }

  useEffect(() => {
    closeMenu()
  }, [pathname])

  const content = NavigationSections

  return (
    <Box
      // Narrow screens use the mobile menu instead
      sx={{ bgcolor: 'grey.900', color: 'grey.300', display: { xs: 'none', md: 'block' } }}
      ref={container}
    >
      <Container maxWidth="lg">
        <Stack direction="row">
          {content.map((item) => (
            <Box
              key={item.label}
              onMouseEnter={() => toggleMenu(item.label)}
              onMouseLeave={closeMenu}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  py: 2,
                  px: 2,
                  transition: 'background-color 0.3s, color 0.3s',
                  '&:hover': {
                    bgcolor: 'grey.800',
                    color: 'white',
                  },
                }}
                onMouseDownCapture={() => toggleMenu(item.label)}
              >
                <Typography variant="body2">{item.label}</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </Box>

              <Popper
                open={activeMenu === item.label}
                anchorEl={container.current}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade
                    {...TransitionProps}
                    timeout={300}
                  >
                    <Box
                      sx={{
                        bgcolor: 'grey.800',
                        p: 1,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                        width: '100vw', // Span the full viewport width
                      }}
                    >
                      <Container maxWidth="lg">{item.content}</Container>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
