import { socialLink } from '@/fields/sociallink'
import { GlobalConfig } from 'payload'

export const Team: GlobalConfig = {
  slug: 'team',
  access: {
    read: () => true,
  },
  admin: {
    description: 'Manage the team members',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: true,
    },
    {
      name: 'members',
      type: 'array',
      label: 'Members',
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/common/Team/ItemLabel#ItemLabel',
        },
      },
      fields: [
        {
          name: 'photo',
          type: 'upload',
          label: 'Photo',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          label: 'Position',
          required: true,
        },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Links',
          fields: [socialLink({ teamCard: true })],
          admin: {
            initCollapsed: true,
          },
        },
      ],
    },
  ],
}
