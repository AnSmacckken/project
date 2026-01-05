'use client'

import Brands from '../../../src/components/Brands/Brands'
import ProtectedRoutes from '../../../src/ProtectedRoutes/ProtectedRoutes'

export default function BrandsPage() {
  return (
    <ProtectedRoutes>
      <Brands />
    </ProtectedRoutes>
  )
}
