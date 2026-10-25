import NextLink from 'next/link'
import { createTheme } from '@mui/material/styles'
import { Objects, Results, Strings, Urls } from '@bessemer/cornerstone'

export type MuiTheme = Parameters<typeof createTheme>[0]

// API routes (e.g. auth redirects) and other sites need a full page load, which client-side navigation can't do
const requiresDocumentNavigation = (href: unknown): boolean => {
  if (!Strings.isString(href)) {
    return false
  }

  const url = Urls.parseString(href)
  if (Results.isFailure(url)) {
    return false
  }

  if (Objects.isPresent(url.scheme) || Objects.isPresent(url.host)) {
    return true
  }

  return url.location.pathSegments[0] === 'api'
}

const LinkBehaviour = ({ ref, ...props }: any) => {
  if (requiresDocumentNavigation(props.href)) {
    return (
      <a
        ref={ref}
        {...props}
      />
    )
  }

  return (
    <NextLink
      ref={ref}
      href={props.href ?? '#'}
      prefetch={false}
      {...props}
    />
  )
}

export const DefaultTheme: MuiTheme = {
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour,
      },
    },
  },
}
