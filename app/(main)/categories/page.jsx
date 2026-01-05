'use client'

import Categories from '../../../src/components/Categories/Categories'
import ProtectedRoutes from '../../../src/ProtectedRoutes/ProtectedRoutes'

export default function CategoriesPage() {
  return (
    <ProtectedRoutes>
      <Categories />
    </ProtectedRoutes>
  )
}
