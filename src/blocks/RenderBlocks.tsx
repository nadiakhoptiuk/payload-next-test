import React, { Fragment } from 'react'

import type {
  ArchiveBlock,
  CallToActionBlock,
  ContentBlock,
  MediaBlock,
  Page,
  TeamBlock,
} from '@/payload-types'

import { ArchiveBlock as ArchiveBlockComponent } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock as CallToActionBlockComponent } from '@/blocks/CallToAction/Component'
import { ContentBlock as ContentBlockComponent } from '@/blocks/Content/Component'
import { FormBlock as FormBlockComponent, FormBlockType } from '@/blocks/Form/Component'
import { MediaBlock as MediaBlockComponent } from '@/blocks/MediaBlock/Component'
import { TeamBlock as TeamBlockComponent } from '@/blocks/Team/Component'

type RequiredId<T> = Omit<T, 'id'> & { id?: string }

interface BlockPropsMap {
  archive: RequiredId<ArchiveBlock>
  content: RequiredId<ContentBlock>
  cta: RequiredId<CallToActionBlock>
  formBlock: RequiredId<FormBlockType>
  mediaBlock: RequiredId<MediaBlock>
  team: TeamBlock
}

const blockComponents: {
  [K in keyof BlockPropsMap]: React.FC<BlockPropsMap[K]>
} = {
  archive: ArchiveBlockComponent,
  content: ContentBlockComponent,
  cta: CallToActionBlockComponent,
  formBlock: FormBlockComponent,
  mediaBlock: MediaBlockComponent,
  team: TeamBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType] as React.FC

            if (Block) {
              return <Block key={index} {...block} />
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
