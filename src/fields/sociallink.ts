import { Field, GroupField, Option } from 'payload'

type SocialLinkType = (options?: { teamCard?: boolean }) => Field

export const socialLink: SocialLinkType = ({ teamCard = false } = {}) => {
  const options: Option[] = [
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
    {
      label: 'LinkedIn',
      value: 'linkedin',
    },
  ]

  const socialLinkCommonResult: GroupField = {
    name: 'socialLink',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        name: 'type',
        type: 'select',
        required: true,
        label: 'Type',
        defaultValue: 'facebook',
        options: teamCard
          ? options
          : options.filter((option) => typeof option === 'string' || option?.value !== 'linkedin'),
      },
      {
        name: 'url',
        type: 'text',
        label: 'URL',
        required: true,
      },
    ],
  }

  return socialLinkCommonResult
}
