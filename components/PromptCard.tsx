'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import { Files } from 'lucide-react'
import { Separator } from './ui/separator'

export default function PromptCard({
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}) {
  const { data: session } = useSession()
  const pathname = usePathname()
  const router = useRouter()

  const [copied, setCopied] = useState('')

  const handleProfileClick = () => {
    if (post.creator._id === session?.user.id) {
      return router.push('/profile')
    }

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt)

    setCopied(post.prompt)

    setTimeout(() => setCopied(''), 3000)
  }

  return (
    <Card>
      <CardHeader className="flex-row flex-wrap w-full justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          <Avatar>
            <AvatarImage src={post.creator.image} />
            <AvatarFallback>{post.creator.name}</AvatarFallback>
          </Avatar>
          <div className="relative">
            <CardTitle>{post.creator.username}</CardTitle>
            <CardDescription>{post.creator.email}</CardDescription>
          </div>
        </div>
        <div>
          <Button
            size="icon"
            variant={`${copied === post.prompt ? 'success' : 'outline'}`}
            className="w-6 h-6"
            onClick={handleCopy}
          >
            <Files size={13} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm">{post.prompt}</p>
        <p
          className="text-sm text-cyan-600 cursor-pointer"
          onClick={() => handleClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </p>
      </CardContent>

      {session?.user.id === post.creator._id && pathname === '/profile' && (
        <CardFooter className="select-none">
          <p
            className="text-sm text-cyan-500 cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="text-sm text-red-300 cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </CardFooter>
      )}
    </Card>
  )
}
