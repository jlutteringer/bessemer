import { AppBar, Container, Toolbar } from '@mui/material'
import { NavbarLogo } from '@simulacrum/ui/navigation/navbar/NavbarLogo'
import { NavbarSearch } from '@simulacrum/ui/navigation/navbar/NavbarSearch'
import { NavbarMainElements } from '@simulacrum/ui/navigation/navbar/NavbarMainElements'
import { NavbarMobileMenu } from '@simulacrum/ui/navigation/navbar/NavbarMobileMenu'
import React from 'react'

export const MainBanner = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: 'black' }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Narrow screens: the section bar, search, and some icons move into this menu */}
          <NavbarMobileMenu sx={{ display: { xs: 'inline-flex', md: 'none' }, mr: 1 }} />
          <NavbarLogo />
          <NavbarSearch sx={{ display: { xs: 'none', sm: 'flex' } }} />
          <NavbarMainElements sx={{ marginLeft: 'auto' }} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
