'use client'

import Products from '../../../src/components/Products/Products'
import ProtectedRoutes from '../../../src/ProtectedRoutes/ProtectedRoutes'

export default function ProductsPage() {
  return (
    <ProtectedRoutes>
      <Products />
    </ProtectedRoutes>
  )
}
