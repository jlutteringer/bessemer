'use client'

import { IconButton } from '@mui/material'
import DiscordIcon from '@mui/icons-material/Chat'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TikTokIcon from '@mui/icons-material/MusicNote'
import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutlined'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'
import { NavbarUserProfile } from '@simulacrum/ui/navigation/navbar/NavbarUserProfile'
import Link from 'next/link'

// The social media icons only fit on wide screens, and the site icons on medium ones; on narrower screens they're in the mobile menu
const SocialMediaDisplay = { xs: 'none', lg: 'flex' }
const SiteDisplay = { xs: 'none', md: 'flex' }

export const NavbarMainElements = ({ sx }: { sx?: SxProps<Theme> }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={sx}
    >
      <SocialMediaIcons sx={{ display: SocialMediaDisplay }} />
      <NavbarDivider sx={{ display: SocialMediaDisplay }} />
      <SiteIcons sx={{ display: SiteDisplay }} />
      <NavbarDivider sx={{ display: SiteDisplay }} />
      <NavbarUserProfile />
    </Stack>
  )
}

const NavbarDivider = ({ sx }: { sx?: SxProps<Theme> }) => {
  return (
    <Divider
      orientation="vertical"
      sx={[{ bgcolor: 'grey.700', height: 35, alignSelf: 'center' }, ...(Array.isArray(sx) ? sx : [sx])]}
    />
  )
}

export const SocialMediaIcons = ({ sx }: { sx?: SxProps<Theme> }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={sx}
    >
      <IconButton
        color="inherit"
        component={Link}
        href="https://discord.com/"
        target="_blank"
      >
        <DiscordIcon />
      </IconButton>
      <IconButton
        color="inherit"
        component={Link}
        href="https://www.instagram.com/"
        target="_blank"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        color="inherit"
        component={Link}
        href="https://www.facebook.com/"
        target="_blank"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        color="inherit"
        component={Link}
        href="https://www.youtube.com/"
        target="_blank"
      >
        <YouTubeIcon />
      </IconButton>
      <IconButton
        color="inherit"
        component={Link}
        href="https://www.tiktok.com/"
        target="_blank"
      >
        <TikTokIcon />
      </IconButton>
    </Stack>
  )
}

export const SiteIcons = ({ sx }: { sx?: SxProps<Theme> }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={sx}
    >
      <IconButton color="inherit">
        <RefreshIcon />
      </IconButton>
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton>
      <IconButton color="inherit">
        <ChatBubbleOutlineIcon />
      </IconButton>
    </Stack>
  )
}
