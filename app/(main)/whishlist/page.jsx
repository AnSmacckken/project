'use client'

import WishList from '../../../src/components/WishList/WishList'
import ProtectedRoutes from '../../../src/ProtectedRoutes/ProtectedRoutes'

export default function WishListPage() {
  return (
    <ProtectedRoutes>
      <WishList />
    </ProtectedRoutes>
  )
}
