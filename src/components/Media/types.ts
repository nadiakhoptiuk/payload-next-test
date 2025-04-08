import type { StaticImageData } from 'next/image'

import type { Media as MediaType } from '@/payload-types'
import { BorderRadius } from '../ui/mediaWrapper'

export interface Props {
  boxWidth: number // in rem
  boxHeight: number // in rem
  rounded?: BorderRadius
  boxClassName?: string

  staticMediaAlt?: string // for static media
  staticMediaSrc?: StaticImageData // for static media

  imgClassName?: string
  priority?: boolean // for NextImage only
  resource?: MediaType | string | number | null // for Payload media
  size?: string // for NextImage only

  videoClassName?: string
  onClick?: () => void
  onLoad?: () => void
}
