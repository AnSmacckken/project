'use client'

import ProductDetailsPage from '../../../../../src/components/ProductDetailsPage/ProductDetailsPage'
import ProtectedRoutes from '../../../../../src/ProtectedRoutes/ProtectedRoutes'

export default function ProductDetailsPageRoute({ params }) {
  return (
    <ProtectedRoutes>
      <ProductDetailsPage />
    </ProtectedRoutes>
  )
}
