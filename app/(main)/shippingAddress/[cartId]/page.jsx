'use client'

import Address from '../../../../src/components/Address/Address'
import ProtectedRoutes from '../../../../src/ProtectedRoutes/ProtectedRoutes'

export default function AddressPage({ params }) {
  return (
    <ProtectedRoutes>
      <Address />
    </ProtectedRoutes>
  )
}
