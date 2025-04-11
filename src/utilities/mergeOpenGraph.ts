import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'
import { defaultMeta } from './defaultMeta'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: defaultMeta.description,
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: defaultMeta.title,
  title: defaultMeta.title,
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
