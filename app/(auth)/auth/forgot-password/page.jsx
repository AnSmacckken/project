'use client'

import ForgotPassword from '../../../../src/components/Auth/ForgotPassword/ForgotPassword'
import ProtectedAuth from '../../../../src/ProtectedAuth/ProtectedAuth'

export default function ForgotPasswordPage() {
  return (
    <ProtectedAuth>
      <ForgotPassword />
    </ProtectedAuth>
  )
}
