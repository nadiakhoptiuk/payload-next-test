import type { Metadata } from 'next'

import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = (args: { doc: Partial<Page> | Partial<Post> | null }): Metadata => {
  const { doc } = args

  console.log('doc', doc)

  const ogImage = getImageURL(doc?.meta?.image)

  const title = doc?.meta?.title ? doc?.meta?.title : 'Payload Website Template'
  const description = doc?.meta?.description || ''

  return {
    description,
    openGraph: mergeOpenGraph({
      description,
      images: ogImage
        ? [
            {
              url: ogImage,
              alt: typeof doc?.meta?.image === 'object' ? doc?.meta?.image?.alt : description,
              width:
                typeof doc?.meta?.image === 'object' && doc?.meta?.image?.sizes?.og?.width
                  ? doc?.meta?.image?.sizes?.og?.width
                  : 1200,
              height:
                typeof doc?.meta?.image === 'object' && doc?.meta?.image?.sizes?.og?.height
                  ? doc?.meta?.image?.sizes?.og?.height
                  : 630,
            },
          ]
        : undefined,
      title,
      siteName: title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
      locale: 'en_US',
    }),
    title,
  }
}
