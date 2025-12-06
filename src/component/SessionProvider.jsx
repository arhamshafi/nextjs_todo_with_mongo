"use client"
import React from 'react'
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'

function SessionProvider({children , session}) {

  return (
  <NextAuthSessionProvider session={session} > {children} </NextAuthSessionProvider>
  )
}

export default SessionProvider
