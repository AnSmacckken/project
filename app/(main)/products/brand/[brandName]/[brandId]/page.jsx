'use client'

import { Suspense } from 'react'
import ProductsByBrand from '../../../../../../src/components/ProductsByBrand/ProductsByBrand'
import ProtectedRoutes from '../../../../../../src/ProtectedRoutes/ProtectedRoutes'
import Loading from '../../../../../../src/components/Loading/Loading'

export default function ProductsByBrandPage({ params }) {
  return (
    <ProtectedRoutes>
      <Suspense fallback={<Loading />}>
        <ProductsByBrand params={params} />
      </Suspense>
    </ProtectedRoutes>
  )
}
