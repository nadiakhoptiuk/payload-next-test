import { Block } from 'payload'

export const PrimaryHero: Block = {
  slug: 'primaryHero',
  interfaceName: 'PrimaryHeroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'localArtistBlock',
      type: 'group',
      fields: [
        {
          name: 'blockTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'blockDescription',
          type: 'text',
          required: true,
        },
        {
          name: 'blockRate',
          type: 'number',
          required: true,
        },
      ],
    },
    // linkGroup({
    //   appearances: ['default', 'outline'],
    //   overrides: {
    //     maxRows: 2,
    //   },
    // }),
  ],
  labels: {
    plural: 'Primary Hero',
    singular: 'Primary Hero',
  },
}
