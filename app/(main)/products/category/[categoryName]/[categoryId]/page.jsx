'use client'

import { Suspense } from 'react'
import ProductsByCategory from '../../../../../../src/components/ProductsByCategory/ProductsByCategory'
import ProtectedRoutes from '../../../../../../src/ProtectedRoutes/ProtectedRoutes'
import Loading from '../../../../../../src/components/Loading/Loading'

export default function ProductsByCategoryPage({ params }) {
  return (
    <ProtectedRoutes>
      <Suspense fallback={<Loading />}>
        <ProductsByCategory params={params} />
      </Suspense>
    </ProtectedRoutes>
  )
}
