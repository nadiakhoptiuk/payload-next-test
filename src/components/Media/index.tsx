import React from 'react'

import type { Props } from './types'

import { ImageMedia } from './ImageMedia'
import { VideoMedia } from './VideoMedia'
import { MediaWrapper } from '../ui/mediaWrapper'

export const Media: React.FC<Props> = (props) => {
  const { boxWidth, boxHeight, boxClassName, rounded, ...rest } = props

  const isVideo = typeof props.resource === 'object' && props.resource?.mimeType?.includes('video')

  return (
    <MediaWrapper className={boxClassName} rounded={rounded} width={boxWidth} height={boxHeight}>
      {isVideo ? <VideoMedia {...rest} /> : <ImageMedia {...rest} />}
    </MediaWrapper>
  )
}
