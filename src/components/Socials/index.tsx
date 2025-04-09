import { Social } from '@/payload-types'
import { SocialLink, SocialLinkSize, SocialLinkVariant } from '../ui/socialLink'
import { Fragment } from 'react'
import { cn } from '@/utilities/ui'

type SocialsProps = {
  socials: Social['socialLinks']
  variant: SocialLinkVariant
  size?: SocialLinkSize
  listClassName?: string
}

export const Socials = ({ socials, variant, size, listClassName }: SocialsProps) => {
  return (
    <ul className={cn('flex gap-4 h-fit', listClassName)}>
      {socials &&
        socials.length > 0 &&
        socials.map(({ id, socialLink }) => (
          <Fragment key={id}>
            {socialLink.type && (
              <SocialLink
                url={socialLink.url}
                type={socialLink.type}
                size={size}
                variant={variant}
                className=""
              />
            )}
          </Fragment>
        ))}
    </ul>
  )
}
