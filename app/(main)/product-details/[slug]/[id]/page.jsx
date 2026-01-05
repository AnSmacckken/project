'use client'

import { Suspense } from 'react'
import ProductDetailsPage from '../../../../../src/components/ProductDetailsPage/ProductDetailsPage'
import ProtectedRoutes from '../../../../../src/ProtectedRoutes/ProtectedRoutes'
import Loading from '../../../../../src/components/Loading/Loading'

export default function ProductDetailsPageRoute({ params }) {
  return (
    <ProtectedRoutes>
      <Suspense fallback={<Loading />}>
        <ProductDetailsPage params={params} />
      </Suspense>
    </ProtectedRoutes>
  )
}
