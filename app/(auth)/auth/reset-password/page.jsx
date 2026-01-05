'use client'

import ResetPassword from '../../../../src/components/Auth/ResetPassword/ResetPassword'
import ProtectedAuth from '../../../../src/ProtectedAuth/ProtectedAuth'

export default function ResetPasswordPage() {
  return (
    <ProtectedAuth>
      <ResetPassword />
    </ProtectedAuth>
  )
}
