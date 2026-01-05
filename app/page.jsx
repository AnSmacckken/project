'use client'

import { useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { tokenContext } from '../src/Context/TokenContext'
import HomePage from '../src/components/HomePage/HomePage'
import ProtectedRoutes from '../src/ProtectedRoutes/ProtectedRoutes'

export default function Home() {
  const { setToken } = useContext(tokenContext)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, [setToken])

  return (
    <ProtectedRoutes>
      <HomePage />
    </ProtectedRoutes>
  )
}
