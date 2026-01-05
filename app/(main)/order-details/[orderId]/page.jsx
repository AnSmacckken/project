'use client'

import { Suspense } from 'react'
import OrderDetails from '../../../../src/components/OrderDetails/OrderDetails'
import ProtectedRoutes from '../../../../src/ProtectedRoutes/ProtectedRoutes'
import Loading from '../../../../src/components/Loading/Loading'

export default function OrderDetailsPage({ params }) {
  return (
    <ProtectedRoutes>
      <Suspense fallback={<Loading />}>
        <OrderDetails params={params} />
      </Suspense>
    </ProtectedRoutes>
  )
}
