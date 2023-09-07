import { Session } from 'next-auth'
import { SignOutResponse } from 'next-auth/react'

export interface ProviderProps {
  children: React.ReactNode
  session?: Session
}

export interface FormProps {
  type: string
  desc: string
  post: any
  setPost: any
  submitting: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export interface ProfileProps {
  desc: string
  post?: any
  name: string | null
  data: any
  handleEdit?: (post: any) => void
  handleDelete?: (post: any) => void
}

export interface PromptProps {
  post: any
  handleEdit?: () => void
  handleDelete?: () => void
  handleTagClick?: (post: void) => void
}

export interface MenuBarProps {
  session: Session
  signOut: SignOutResponse
}

export interface PromptListProps {
  data: any
  handleTagClick: (tagName: void) => void
}
