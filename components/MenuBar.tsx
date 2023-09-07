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

export default function MenuBar({ session, signOut }) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar>
            <AvatarImage src={session?.user.image} />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          <Link href="/create-prompt">
            <MenubarItem>Criar prompt</MenubarItem>
          </Link>
          <Link href="/profile">
            <MenubarItem>Perfil</MenubarItem>
          </Link>
          <MenubarSeparator />
          <MenubarItem onClick={signOut}>Sair</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
