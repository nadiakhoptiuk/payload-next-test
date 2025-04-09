import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import configPromise from '@payload-config'

import type { Header, Page, Social } from '@/payload-types'
import { getPayload } from 'payload'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()
  const socialsData: Social = await getCachedGlobal('socials', 1)()

  const payload = await getPayload({ config: configPromise })

  const pagesData = await payload.find({
    collection: 'pages',
    draft: false,
    pagination: false,
    overrideAccess: false,
    // select: {
    //   id: true,
    //   title: true,
    //   slug: true,
    // },
  })

  // return result.docs?.[0] || null
  console.log('pagesData', pagesData.docs)
  const pages = pagesData.docs

  return <HeaderClient data={headerData} socials={socialsData} />
}
