'use client'

import { Suspense } from 'react'
import Address from '../../../../src/components/Address/Address'
import ProtectedRoutes from '../../../../src/ProtectedRoutes/ProtectedRoutes'
import Loading from '../../../../src/components/Loading/Loading'

export default function AddressPage({ params }) {
  return (
    <ProtectedRoutes>
      <Suspense fallback={<Loading />}>
        <Address params={params} />
      </Suspense>
    </ProtectedRoutes>
  )
}
