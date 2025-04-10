import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
}) => {
  return {
    id: 1,
    title: 'Home',
    hero: {
      type: 'primary',
      title: 'Empowering Local Artistry, One Creation at a Time',
      subtitle: null,
      description:
        'Discover, support, and celebrate the vibrant creativity of local artists in your community through exhibitions, workshops, and collaborations.',
      image: heroImage.id,
      localArtistBlock: {
        title: "Embracing Faith's Promise Sharing Love's Light",
        description:
          'Discover, support, and celebrate the vibrant creativity of in your community and beyond. Explore unique artwork, connect with creators, attend inspiring events, and be part of a thriving artistic movement.',
        rating: '4.8/5',
        ratingCaption: 'Building Bonds Blessings',
      },
    },
    layout: [
      {
        id: '67f7c6e2d9844e0266837df3',
        richText: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Test',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        blockName: null,
        links: [],
        blockType: 'cta',
      },
    ],
    meta: { title: null, image: null, description: null },
    slug: 'home',
    _status: 'published',
  }
}
