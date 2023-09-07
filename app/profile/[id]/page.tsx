'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Profile from '@/components/Profile'

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams()
  const userName = searchParams.get('name')

  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`)
      const data = await response.json()

      setUserPosts(data)
    }

    if (params?.id) {
      fetchPosts()
    }
  }, [params.id])

  return (
    <Profile
      name={userName}
      desc={`Bem-vindo ${userName} à sua página de personalização do seu perfil. Explore as sugestões excepcionais de ${userName} e deixe-se inspirar pelo poder da sua imaginação`}
      data={userPosts}
    />
  )
}

export default UserProfile
