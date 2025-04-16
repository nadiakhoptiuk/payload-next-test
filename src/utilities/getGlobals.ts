import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload, GlobalSlug } from 'payload'
import { unstable_cache } from 'next/cache'

type Globals = Config['globals']

async function getGlobal<TSlug extends GlobalSlug>(slug: TSlug, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
  })

  return global as Globals[TSlug]
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = <TSlug extends GlobalSlug>(slug: TSlug, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  })
