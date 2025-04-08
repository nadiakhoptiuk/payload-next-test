import Image, { StaticImageData } from 'next/image'

import type { PrimaryHeroBlock as PrimaryHeroBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'

type Props = PrimaryHeroBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const PrimaryHeroBlock: React.FC<Props> = (props) => {
  const { title, description, image, localArtistBlock, imgClassName, staticImage } = props
  console.log(image)

  return (
    <section>
      <div className="container">
        <div className="">
          <h1 className="max-w-[48rem] flex items-center">{title}</h1>

          <div className="max-w-[48rem] flex items-center">
            <p>{description}</p>

            <ul>
              <li>
                <button>{localArtistBlock.blockRate}</button>
              </li>
              <li>
                <button>{localArtistBlock.blockRate}</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[74rem] h-[40.625rem]">
          {image && typeof image === 'object' && (
            <Image
              src={image.url!}
              alt={image.alt!}
              width={image.width! / 2}
              height={image.height! / 2}
              sizes="62vw"
            />
          )}
          {/* {image && (
            <Media
              imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
              resource={image}
              src={staticImage}
            />
          )} */}
        </div>
      </div>
    </section>
  )
}
