import { GroupField } from 'payload'

export const socialLink: GroupField = {
  name: 'socialLink',
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
          type: 'select',
          label: 'Type',
          defaultValue: 'facebook',
          options: [
            {
              label: 'Facebook',
              value: 'facebook',
            },
            {
              label: 'Instagram',
              value: 'instagram',
            },
            {
              label: 'Twitter',
              value: 'twitter',
            },
            {
              label: 'Youtube',
              value: 'youtube',
            },
          ],
        },
      ],
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
      required: true,
    },
  ],
}
