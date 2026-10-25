import * as React from 'react'
import Button from '@mui/material/Button'
import MuiCard from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}))

// Sign-in, sign-up and password recovery all happen on Cognito's managed login pages
export const LoginCard = () => {
  return (
    <Card variant="outlined">
      <Image
        src="/simulacrum-logo-large.png"
        alt=""
        width={3000}
        height={1500}
        style={{ width: '100%', height: 'auto' }}
      />

      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Sign in
      </Typography>
      <Button
        fullWidth
        variant="contained"
        href="/api/auth/sign-in"
      >
        Sign in
      </Button>
      <Divider>or</Divider>
      <Button
        fullWidth
        variant="outlined"
        href="/api/auth/sign-up"
      >
        Create an account
      </Button>
    </Card>
  )
}
