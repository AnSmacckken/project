'use client'

import VerifyResetCode from '../../../../src/components/Auth/VerifyResetCode/VerifyResetCode'
import ProtectedAuth from '../../../../src/ProtectedAuth/ProtectedAuth'

export default function VerifyResetCodePage() {
  return (
    <ProtectedAuth>
      <VerifyResetCode />
    </ProtectedAuth>
  )
}
