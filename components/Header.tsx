'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { Button } from './ui/button'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

import { ToggleTheme } from './ToggleTheme'
import MenuBar from './MenuBar'

export default function Header() {
  const { data: session } = useSession()

  const [providers, setProviders] = useState(null)

  useEffect(() => {
    ;(async () => {
      const res = await getProviders()
      setProviders(res)
    })()
  }, [])

  return (
    <header className="mb-16 w-full h-20">
      <nav className="flex justify-between items-center h-full">
        <Link href="/" className="flex justify-center items-center gap-2">
          <h1 className="font-semibold text-lg tracking-wide">ShareSpace</h1>
        </Link>

        <div className="hidden md:flex">
          {session?.user ? (
            <div className="flex items-center gap-3 md:gap-5">
              <Link href="/create-prompt">
                <Button>Criar post</Button>
              </Link>

              <Button onClick={signOut} variant="outline">
                Sair
              </Button>

              <ToggleTheme />

              <Link href="/profile">
                <Avatar className="w-9 h-9">
                  <AvatarImage src={session?.user.image} />
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 md:gap-5">
              {providers &&
                Object.values(providers).map((provider) => (
                  <Button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Entrar
                  </Button>
                ))}
            </div>
          )}
        </div>

        <div className="md:hidden flex gap-3 relative">
          <ToggleTheme />

          {session?.user ? (
            <MenuBar session={session} signOut={signOut} />
          ) : (
            <div className="flex items-center gap-3 md:gap-5">
              {providers &&
                Object.values(providers).map((provider) => (
                  <Button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Entrar
                  </Button>
                ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
