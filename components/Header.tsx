'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

import { Github } from 'lucide-react'

import { Button } from './ui/button'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import MenuBar from './MenuBar'

import { ToggleTheme } from './ToggleTheme'

export default function Header() {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    ;(async () => {
      const res: any = await getProviders()
      setProviders(res)
    })()
  }, [])

  return (
    <header className="mb-16 w-full h-20">
      <nav className="flex justify-between items-center h-full">
        <Link href="/" className="flex justify-center items-center gap-2">
          <h1 className="font-bold text-lg tracking-wide">
            <span className="hidden md:inline">Share</span>
            <span className="hidden md:inline text-blue-600">Space</span>
            <span className="md:hidden">S</span>
            <span className="md:hidden 	text-blue-600">S</span>
          </h1>
        </Link>

        <div className="hidden md:flex">
          {session?.user ? (
            <div className="flex items-center gap-3">
              <Link href="/create-prompt">
                <Button>Criar post</Button>
              </Link>

              <Button onClick={signOut as any} variant="outline">
                Sair
              </Button>

              <Link href="/profile">
                <Avatar className="w-9 h-9">
                  <AvatarImage
                    src={session?.user.image || ''}
                    alt="User image"
                  />
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
              </Link>

              <div className="h-6 w-px bg-input" />

              <div className="space-x-1.5">
                <a
                  href="https://github.com/guhrodriguess/sharespace"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="icon" variant="ghost">
                    <Github className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                </a>

                <ToggleTheme />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 md:gap-5">
              {providers &&
                Object.values(providers).map((provider: any) => (
                  <Button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Entrar
                  </Button>
                ))}

              <div className="h-6 w-px bg-input" />

              <div className="space-x-1.5">
                <a
                  href="https://github.com/guhrodriguess/sharespace"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="icon" variant="ghost">
                    <Github className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                </a>

                <ToggleTheme />
              </div>
            </div>
          )}
        </div>

        <div className="md:hidden flex gap-3 items-center">
          <div className="space-x-1.5">
            <a
              href="https://github.com/guhrodriguess/sharespace"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="icon" variant="ghost">
                <Github className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </a>

            <ToggleTheme />
          </div>

          <div className="h-6 w-px bg-input" />

          {session?.user ? (
            <MenuBar session={session} signOut={signOut as any} />
          ) : (
            <div className="flex items-center gap-3 md:gap-5">
              {providers &&
                Object.values(providers).map((provider: any) => (
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
