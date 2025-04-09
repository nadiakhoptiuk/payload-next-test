import type { GlobalConfig } from 'payload'
import { socialLink } from '@/fields/sociallink'

export const Socials: GlobalConfig = {
  slug: 'socials',
  access: {
    read: () => true,
  },
  admin: {
    description: 'Manage the website social links',
  },
  fields: [
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [socialLink],
      maxRows: 5,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/common/Socials/ItemLabel#ItemLabel',
        },
      },
    },
  ],
}
