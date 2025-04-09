import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 text-[20px] font-marcellus px-4', //TODO
  {
    defaultVariants: {
      size: 'default',
      variant: 'accent',
    },
    variants: {
      size: {
        default: 'min-w-[10.94rem] h-[3.125rem]', // 175 x 50
        xs: 'min-w-[7.88rem] h-11', // 126 x 44
        sm: 'min-w-49 h-[3.125rem]', // 196 x 50
        md: 'min-w-[10.94rem] h-[3.125rem]', // 175 x 50
        lg: 'min-w-[13.44rem] h-[3.125rem]', // 215 x 50
      },
      variant: {
        accent: 'bg-accent text-white',
        dark: 'bg-accent-dark text-white',
        white: 'bg-white text-accent-dark',
        light: 'bg-mustard text-white',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'accent' | 'dark' | 'white' | 'light'
  children: React.ReactNode
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
  rounded?: boolean
  fullWidth?: boolean
  capitalize?: boolean
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size = 'default',
  variant = 'accent',
  ref,
  rounded,
  fullWidth,
  capitalize,
  children,
  ...props
}) => {
  const buttonClassName = cn(
    buttonVariants({ size, variant }),
    {
      'w-full': fullWidth,
      'rounded-full': rounded,
    },
    className,
  )

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={buttonClassName} ref={ref} {...props}>
      {capitalize && typeof children === 'string' ? children.toUpperCase() : children}
    </Comp>
  )
}

export { Button, buttonVariants }
