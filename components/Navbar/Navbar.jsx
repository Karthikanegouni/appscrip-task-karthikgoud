'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Styles from './navbar.module.css'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <>
      <nav className={Styles.navbar}>
        <Link href="/" className={pathname === '/' ? Styles.active : ''}>
          HOME
        </Link>
        |
        <Link
          href="/shop"
          className={pathname === '/shop' ? Styles.active : ''}
        >
          SHOP
        </Link>
      </nav>
      <nav className={Styles.navbarlg}>
        <Link href="/shop">SHOP</Link>
        <Link href="#">SKILLS</Link>
        <Link href="#">STORIES</Link>
        <Link href="#">ABOUT</Link>
        <Link href="#">CONTACT US</Link>
      </nav>
    </>
  )
}

export default Navbar
