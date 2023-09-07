import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { MenuBarProps } from '@/types'

export default function MenuBar({ session, signOut }: MenuBarProps) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar>
            <AvatarImage src={session?.user.image || ''} />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          <Link href="/profile">
            <MenubarItem>Perfil</MenubarItem>
          </Link>
          <Link href="/create-prompt">
            <MenubarItem>Criar prompt</MenubarItem>
          </Link>
          <MenubarSeparator />
          <MenubarItem onClick={signOut as any}>Sair</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
