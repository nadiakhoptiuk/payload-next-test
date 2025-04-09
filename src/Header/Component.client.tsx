'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header, Social } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Socials } from '@/components/Socials'

interface HeaderClientProps {
  data: Header
  socials: Omit<Social, 'createdAt' | 'updatedAt'>
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, socials }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  const socialLinks = socials.socialLinks

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="container relative z-20 bg-yellow-500"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="py-8 flex justify-between">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        <HeaderNav data={data} />

        {socialLinks && socialLinks.length > 0 && <Socials socials={socialLinks} variant="light" />}
      </div>
    </header>
  )
}
