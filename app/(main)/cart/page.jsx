'use client'

import Cart from '../../../src/components/Cart/Cart'
import ProtectedRoutes from '../../../src/ProtectedRoutes/ProtectedRoutes'

export default function CartPage() {
  return (
    <ProtectedRoutes>
      <Cart />
    </ProtectedRoutes>
  )
}
