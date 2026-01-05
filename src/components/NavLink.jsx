'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, children, className = '', onClick, ...props }) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname?.startsWith(href + '/')
  
  return (
    <Link 
      href={href} 
      className={`${className} ${isActive ? 'active' : ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  )
}
