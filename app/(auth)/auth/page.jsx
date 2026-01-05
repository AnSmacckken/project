'use client'

import SignIn from '../../../src/components/Auth/SignIn/SignIn'
import ProtectedAuth from '../../../src/ProtectedAuth/ProtectedAuth'

export default function AuthPage() {
  return (
    <ProtectedAuth>
      <SignIn />
    </ProtectedAuth>
  )
}
