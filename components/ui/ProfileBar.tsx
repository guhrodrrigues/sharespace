import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from './avatar'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { ProfileBarProps } from '@/types'

export default function ProfileBar({ session, signOut }: ProfileBarProps) {
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
