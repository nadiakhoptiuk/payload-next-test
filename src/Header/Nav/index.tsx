'use client'

import React from 'react'

import type { Header as HeaderType, Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{
  data: HeaderType
  pages: Pick<Page, 'id' | 'title' | 'slug'>[]
}> = ({ data, pages }) => {
  const navItems = data?.navItems || []

  if (navItems.length === 0) return null

  return (
    <nav>
      <ul className="flex gap-16 items-center">
        {navItems.map(({ link, id }) => {
          return (
            <li key={id}>
              <CMSLink
                {...link}
                className="text-black hover:text-white focus:text-white transition-colors"
              />
            </li>
          )
        })}
      </ul>

      {/* <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link> */}
    </nav>
  )
}
