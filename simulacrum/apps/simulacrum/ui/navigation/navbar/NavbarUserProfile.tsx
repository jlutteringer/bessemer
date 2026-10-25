'use client'

import React, { useState } from 'react'
import { Avatar, Box, Button, Divider, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material'
import Logout from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Link from 'next/link'
import { useSessionUser } from '@simulacrum/ui/auth/use-session'

export const NavbarUserProfile = () => {
  const { user, isPending } = useSessionUser()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  if (isPending) {
    return null
  }

  if (!user) {
    return (
      <Button
        color="inherit"
        href="/api/auth/sign-in"
      >
        Sign in
      </Button>
    )
  }

  const displayName = user.name ?? user.email

  return (
    <>
      {/* Trigger for the Dropdown */}
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
        onClick={handleMenuOpen}
      >
        <Avatar sx={{ bgcolor: 'grey.600', width: 32, height: 32 }}>{displayName.charAt(0).toUpperCase()}</Avatar>
        <Typography
          variant="body2"
          sx={{
            color: 'inherit',
            // Narrow screens show just the avatar
            display: { xs: 'none', md: 'block' },
          }}
        >
          {displayName}
        </Typography>
      </Box>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            elevation: 3,
            sx: {
              bgcolor: 'grey.900',
              color: 'white',
              minWidth: '200px',
            },
          },
        }}
      >
        <MenuItem
          component={Link}
          href="/account"
        >
          <ListItemIcon
            sx={{
              color: 'inherit',
            }}
          >
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          Account
        </MenuItem>

        <Divider sx={{ borderColor: 'grey.700' }} />

        <MenuItem
          component={Link}
          href="/subscription"
        >
          Subscriptions
        </MenuItem>

        <MenuItem
          component={Link}
          href="/campaigns"
        >
          Campaigns
        </MenuItem>
        <MenuItem
          component={Link}
          href="/characters"
        >
          Characters
        </MenuItem>
        <MenuItem
          component={Link}
          href="/homebrew"
        >
          Homebrew
        </MenuItem>

        <Divider sx={{ borderColor: 'grey.700' }} />

        <MenuItem
          component="a"
          href="/api/auth/sign-out"
        >
          <ListItemIcon
            sx={{
              color: 'inherit',
            }}
          >
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign Out
        </MenuItem>
      </Menu>
    </>
  )
}
