'use client'

import ProductsByBrand from '../../../../../../src/components/ProductsByBrand/ProductsByBrand'
import ProtectedRoutes from '../../../../../../src/ProtectedRoutes/ProtectedRoutes'

export default function ProductsByBrandPage({ params }) {
  return (
    <ProtectedRoutes>
      <ProductsByBrand />
    </ProtectedRoutes>
  )
}
