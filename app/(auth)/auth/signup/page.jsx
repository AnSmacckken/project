'use client'

import SignUp from '../../../../src/components/Auth/SignUp/SignUp'
import ProtectedAuth from '../../../../src/ProtectedAuth/ProtectedAuth'

export default function SignUpPage() {
  return (
    <ProtectedAuth>
      <SignUp />
    </ProtectedAuth>
  )
}
