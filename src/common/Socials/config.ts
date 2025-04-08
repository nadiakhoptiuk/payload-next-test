import type { GlobalConfig } from 'payload'
import { socialLink } from '@/fields/sociallink'

export const Socials: GlobalConfig = {
  slug: 'socials',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [socialLink],
      maxRows: 4,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/common/Socials/ItemLabel#ItemLabel',
        },
      },
    },
  ],
}
