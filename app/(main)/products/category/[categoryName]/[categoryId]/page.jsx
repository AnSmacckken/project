'use client'

import ProductsByCategory from '../../../../../../src/components/ProductsByCategory/ProductsByCategory'
import ProtectedRoutes from '../../../../../../src/ProtectedRoutes/ProtectedRoutes'

export default function ProductsByCategoryPage({ params }) {
  return (
    <ProtectedRoutes>
      <ProductsByCategory />
    </ProtectedRoutes>
  )
}
