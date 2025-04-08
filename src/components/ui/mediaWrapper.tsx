import { cn } from '@/utilities/ui'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const mediaWrapperVariants = cva('', {
  defaultVariants: {
    rounded: '20',
  },
  variants: {
    rounded: {
      none: '',
      '10': 'rounded-[10px]',
      '20': 'rounded-[20px]',
      '30': 'rounded-[30px]',
      '195': 'rounded-[195px]',
      full: 'rounded-full',
    },
  },
})

export type BorderRadius = 'none' | '10' | '20' | '30' | '195' | 'full' //TODO to common types

export interface MediaWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mediaWrapperVariants> {
  width: number
  height: number
  className?: string
  rounded?: BorderRadius
}

const MediaWrapper: React.FC<MediaWrapperProps> = ({
  className,
  rounded = '20',
  width,
  height,
  ...props
}) => {
  return (
    <div
      className={cn(
        mediaWrapperVariants({ rounded }),
        className,
        `w-[${width}rem] h-[${height}rem]`,
      )}
      {...props}
    />
  )
}

export { MediaWrapper, mediaWrapperVariants }
