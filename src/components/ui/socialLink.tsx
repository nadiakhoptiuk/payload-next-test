import { cn } from '@/utilities/ui'
import { HTMLAttributes } from 'react'
import { ICONS } from './icons/icons'
import { cva } from 'class-variance-authority'

export type SocialLinkType = 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin'

export type SocialLinkVariant = 'default' | 'light' | 'dark'
export type SocialLinkSize = 'default' | 'sm'

export type SocialLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  url: string
  type: SocialLinkType
  size?: SocialLinkSize
  variant: SocialLinkVariant
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
      default: 'bg-transparent text-accent',
      light:
        'rounded-full bg-white text-accent hover:text-accent-light focus-within:text-accent-light transition-colors',
      dark: 'rounded-full bg-black text-white hover:bg-accent focus-within:bg-accent transition-colors',
    },
  },
})

export const SocialLink = ({ url, type, size, variant, className }: SocialLinkProps) => {
  const Icon = ICONS[type]

  if (!Icon) return null

  return (
    <li className={cn(socialLinkVariants({ size, variant, className }))}>
      <a
        href={url}
        className={cn(
          'w-full h-full flex items-center justify-center',
          {
            'items-end': type === 'facebook' && variant !== 'default',
          },
          className,
        )}
        rel="nofollow noreferrer noopener"
        target="_blank"
        aria-label={`Go to ${type} profile`}
      >
        <Icon
          className={cn('w-[1.19rem] h-[1.19rem]', {
            'w-4 h-4': type === 'twitter' && variant !== 'default',
          })}
        />
      </a>
    </li>
  )
}
