import { redirect } from 'next/navigation'
import { Objects } from '@bessemer/cornerstone'
import { Stack, Typography } from '@mui/material'
import { getSession } from '@simulacrum/application/auth/session'
import { getApiContext } from '@simulacrum/application/api'
import { UserApi } from '@simulacrum/common'

const AccountPage = async () => {
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }

  const user = await UserApi.fetchCurrentUser(await getApiContext())

  return (
    <Stack spacing={1}>
      <Typography variant="h4">Account</Typography>
      {Objects.isPresent(user.profile) && (
        <>
          <Typography variant="h6">
            {user.profile.firstName} {user.profile.lastName}
          </Typography>
          <Typography variant="body1">{user.profile.email}</Typography>
        </>
      )}
      <Typography
        variant="body2"
        color="text.secondary"
      >
        Member since {new Date(user.createdAt).toLocaleDateString()}
      </Typography>
    </Stack>
  )
}

export default AccountPage
