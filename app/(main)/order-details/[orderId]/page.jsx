'use client'

import OrderDetails from '../../../../src/components/OrderDetails/OrderDetails'
import ProtectedRoutes from '../../../../src/ProtectedRoutes/ProtectedRoutes'

export default function OrderDetailsPage({ params }) {
  return (
    <ProtectedRoutes>
      <OrderDetails />
    </ProtectedRoutes>
  )
}
