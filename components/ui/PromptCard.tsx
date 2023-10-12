'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { Files } from 'lucide-react'

import { PromptProps } from '@/types'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

import { Button } from '@/components/ui/button'
import { setTimeout } from 'timers'

export function PromptCard({
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}: PromptProps) {
  const { data: session } = useSession()
  const pathname = usePathname()
  const router = useRouter()

  const [copied, setCopied] = useState('')

  const handleProfileClick = () => {
    if (post.creator?._id === session?.user.id && pathname === '/') {
      return router.push('/profile')
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt)

    setCopied(post.prompt)

    setTimeout(() => setCopied(''), 3000)
  }

  return (
    <div>
      <Card
        onClick={handleProfileClick}
        className={`${
          post.creator?._id === session?.user.id &&
          pathname === '/' &&
          'cursor-pointer'
        }`}
      >
        <CardHeader className="flex-row flex-wrap w-full justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <Avatar>
              <AvatarImage src={post.creator?.image} />
              <AvatarFallback>{post.creator?.name}</AvatarFallback>
            </Avatar>
            <div className="relative">
              <CardTitle>{post.creator?.username}</CardTitle>
              <CardDescription>{post.creator?.email}</CardDescription>
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
            onClick={() => handleTagClick && handleTagClick(post.tag)}
          >
            {post.tag}
          </p>
        </CardContent>

        {session?.user.id === post.creator?._id && pathname === '/profile' && (
          <CardFooter className="justify-start gap-3">
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={handleDelete} variant="destructive">
              Delete
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
