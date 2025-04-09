import { Social } from '@/payload-types'
import { SocialLink, SocialLinkVariant } from '../ui/socialLink'
import { cva } from 'class-variance-authority'
import { cn } from '@/utilities/ui'

type SocialsProps = {
  socials: Social['socialLinks']
  variant: SocialLinkVariant
  size?: 'default' | 'sm'
  className?: string
}

const socialLinkVariants = cva('', {
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
  variants: {
    size: {
      default: 'h-[1.31rem] w-[1.31rem]',
      sm: 'h-5 w-5',
    },
    variant: {
      default: 'bg-transparent',
      light: 'rounded-full bg-white',
      dark: 'rounded-full bg-black',
    },
  },
})

export const Socials = ({ socials, variant, size, className }: SocialsProps) => {
  return (
    <ul className="flex gap-4">
      {socials &&
        socials.length > 0 &&
        socials.map(({ id, socialLink }) => (
          <li key={id} className={cn(socialLinkVariants({ size, variant, className }))}>
            {socialLink.type && (
              <SocialLink
                url={socialLink.url}
                type={socialLink.type}
                variant={variant}
                className=""
              />
            )}
          </li>
        ))}
    </ul>
  )
}
