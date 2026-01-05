'use client'

import Allorders from '../../../src/components/Allorders/Allorders'
import ProtectedRoutes from '../../../src/ProtectedRoutes/ProtectedRoutes'

export default function AllOrdersPage() {
  return (
    <ProtectedRoutes>
      <Allorders />
    </ProtectedRoutes>
  )
}
