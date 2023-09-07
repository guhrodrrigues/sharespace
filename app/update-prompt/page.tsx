'use client'

import { useEffect, useState } from 'react'
import type { Metadata } from 'next'
import { useRouter, useSearchParams } from 'next/navigation'

import Form from '@/components/Form'

export const metadata: Metadata = {
  title: 'Atualizar post · ShareSpace',
  description:
    'Onde a inspiração se torna colaboração e as ideias se transformam em obras-primas.',
}

export default function EditPrompt() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const promptId = searchParams.get('id')

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  })

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`)

      const data = await response.json()

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      })
    }

    if (promptId) {
      getPromptDetails()
    }
  }, [promptId])

  const updatePrompt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    if (!promptId) {
      return alert('Prompt ID not found')
    }

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form
      type="Editar"
      desc="Desperte o poder da personalização"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  )
}
