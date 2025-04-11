import { Block } from 'payload'

export const TeamBlock: Block = {
  slug: 'team',
  interfaceName: 'TeamBlock',
  fields: [
    {
      name: 'editTitle',
      type: 'checkbox',
      label: 'Edit Title',
      defaultValue: false,
      admin: {
        description: 'Enable title editing',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.editTitle,
      },
    },
    {
      name: 'editSubtitle',
      type: 'checkbox',
      label: 'Edit Subtitle',
      defaultValue: false,
      admin: {
        description: 'Enable subtitle editing',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.editSubtitle,
      },
    },
    {
      name: 'editDescription',
      type: 'checkbox',
      label: 'Edit Description',
      defaultValue: false,
      admin: {
        description: 'Enable description editing',
      },
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.editDescription,
      },
    },
  ],
}
