'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { Button } from './ui/button'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { ToggleTheme } from './ToggleTheme'

export default function Header() {
  const { data: session } = useSession()

  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }

    setUpProviders()
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
                <Button>Create post</Button>
              </Link>

              <Button onClick={signOut} variant="outline">
                Sign Out
              </Button>

              <ToggleTheme />

              <Link href="/profile">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={session?.user.image} />
                  <AvatarFallback>GR</AvatarFallback>
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
                    Sign in
                  </Button>
                ))}

              <ToggleTheme />
            </div>
          )}
        </div>

        <div className="md:hidden flex relative">
          {session?.user ? (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <Avatar>
                    <AvatarImage src={session?.user.image} />
                    <AvatarFallback>GR</AvatarFallback>
                  </Avatar>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Meu perfil</MenubarItem>
                  <MenubarItem>Criar prompt</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => signOut()}>Sign Out</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ) : (
            <div className="flex items-center gap-3 md:gap-5">
              {providers &&
                Object.values(providers).map((provider) => (
                  <Button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in
                  </Button>
                ))}
              <ToggleTheme />
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
