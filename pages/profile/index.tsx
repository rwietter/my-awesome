import { useSession } from 'next-auth/react'
import React from 'react'

const Profile: React.FC = () => {
  const { data: session } = useSession()
  return (
    <h1>Hello, World { session?.user?.name }</h1>
  )
}

export default Profile
