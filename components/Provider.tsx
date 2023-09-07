'use client'

import { SessionProvider } from 'next-auth/react'

import { ProviderProps } from '@/types'

export default function Provider({ children, session }: ProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
