'use client'

import HomePage from '../../../src/components/HomePage/HomePage'
import ProtectedRoutes from '../../../src/ProtectedRoutes/ProtectedRoutes'

export default function HomePageRoute() {
  return (
    <ProtectedRoutes>
      <HomePage />
    </ProtectedRoutes>
  )
}
