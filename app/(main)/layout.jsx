'use client'

import React from 'react'
import Navbar from '../../src/components/Navbar/Navbar'
import Footer from '../../src/components/Footer/Footer'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
