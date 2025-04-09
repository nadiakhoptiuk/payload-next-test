import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Page, Post } from '@/payload-types'

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant'] | null
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  size?: ButtonProps['size']
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const { type, appearance = 'inline', className, label, newTab, reference, size, url } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''} / ${reference.value.slug === 'home' ? '' : reference.value.slug}`
      : url

  if (!href) return null

  const newTabProps = newTab ? { rel: 'noopener noreferrer nofollow', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={href || url || '/'} {...newTabProps}>
        {label && label}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance || 'accent'}>
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {label && label}
      </Link>
    </Button>
  )
}
