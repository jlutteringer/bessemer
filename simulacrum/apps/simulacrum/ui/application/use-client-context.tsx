'use client'

import { PropsWithChildren } from 'react'
import { ApplicationClientModule } from '@simulacrum/application/client'
import { ApplicationRuntimeModule } from '@simulacrum/application/common'
import { BessemerClientProps } from '@bessemer/framework/bessemer'
import { ApplicationContext, ApplicationOptions, ClientContext } from '@simulacrum/application'
import { BessemerClientProvider, useBessemerClientContext } from '@bessemer/framework-next/hooks/use-client-context'

export const ClientApplicationProvider = ({
  props,
  children,
}: PropsWithChildren<{ props: BessemerClientProps<ApplicationContext, ApplicationOptions> }>) => {
  return (
    <BessemerClientProvider
      client={ApplicationClientModule}
      runtime={ApplicationRuntimeModule}
      props={props}
    >
      {children}
    </BessemerClientProvider>
  )
}

export const useClientContext = (): ClientContext => {
  return useBessemerClientContext()
}
