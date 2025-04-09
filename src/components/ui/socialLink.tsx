import { cn } from '@/utilities/ui'
import { HTMLAttributes } from 'react'
import { ICONS } from './icons/icons'
import { cva } from 'class-variance-authority'

export type SocialLinkType = 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin'

export type SocialLinkVariant = 'default' | 'light' | 'dark'

export type SocialLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  url: string
  type: SocialLinkType
  variant: SocialLinkVariant
  className?: string
}

const socialLinkVariants = cva('', {
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: 'text-brown-800',
      light: 'text-black',
      dark: 'text-white',
    },
  },
})

export const SocialLink = ({ url, type, variant, className }: SocialLinkProps) => {
  const Icon = ICONS[type]

  if (!Icon) return null

  return (
    <a
      href={url}
      className={cn(
        'w-full h-full flex items-center justify-center',
        {
          'items-end': type === 'facebook',
        },
        className,
        socialLinkVariants({ variant }),
      )}
      rel="nofollow noreferrer noopener"
      target="_blank"
      aria-label={`Go to ${type} profile`}
    >
      <Icon className={cn('w-[1.19rem] h-[1.19rem]', { 'w-4 h-4': type === 'twitter' })} />
    </a>
  )
}
