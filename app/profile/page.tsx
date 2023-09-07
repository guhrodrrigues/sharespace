'use client'

import { useState, useEffect } from 'react'
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'

import { useSession } from 'next-auth/react'

import Profile from '@/components/Profile'

export const metadata: Metadata = {
  title: 'Perfil · ShareSpace',
  description:
    'Onde a inspiração se torna colaboração e as ideias se transformam em obras-primas.',
}

export default function MyProfile() {
  const router = useRouter()
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json()

      setPosts(data)
    }

    if (session?.user.id) fetchPosts()
  }, [session?.user.id])

  const handleEdit = (post: any) => {
    router.push(`/update-prompt?id=${post._id}`)
  }

  const handleDelete = async (post: any) => {
    const hasConfirmed = confirm('Are you sure you want to delete this prompt?')

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE',
        })

        const filteredPosts = posts.filter((p) => p !== post._id)

        setPosts(filteredPosts)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Profile
      name="Meu"
      desc="Mostre sua singularidade e brilhe! Personalize seus prompts no ShareSpace e deixe sua criatividade falar por si."
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}
