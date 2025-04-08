import type { Field, GroupField } from 'payload'

import deepMerge from '@/utilities/deepMerge'

export type LinkAppearances = 'default' | 'outline'

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
  default: {
    label: 'Default',
    value: 'default',
  },
  outline: {
    label: 'Outline',
    value: 'outline',
  },
}

export const hero = () => {
  const heroResult: GroupField = {
    name: 'hero',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
            },
            defaultValue: 'secondary',
            options: [
              {
                label: 'Primary (Home page)',
                value: 'primary',
              },
              {
                label: 'Secondary (Other pages)',
                value: 'secondary',
              },
            ],
          },
        ],
      },
    ],
  }

  const heroFields: Field[] = [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'secondary',
      },
      label: 'Subtitle',
      required: true,
    },

    {
      name: 'description',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'primary',
      },
      label: 'Description',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'primary',
      },
      relationTo: 'media',
      label: 'Big Image',
      required: true,
    },
    {
      name: 'localArtistBlock',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'primary',
      },
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
          name: 'rating',
          type: 'text',
          required: true,
        },
        {
          name: 'ratingCaption',
          type: 'text',
          required: true,
        },
      ],
    },
  ]

  heroResult.fields = [...heroResult.fields, ...heroFields]

  return heroResult
}
