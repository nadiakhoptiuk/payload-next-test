import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import heroImage from '../../../public/media/homehero-1-1920x1054.jpg'

export const PrimaryHero: React.FC<Page['hero']> = (props) => {
  const { title, description, image, localArtistBlock } = props

  return (
    <section>
      <div className="container">
        <div className="">
          <h1 className="max-w-[48rem] flex items-center">{title}</h1>

          <div className="max-w-[48rem] flex items-center">
            <p>{description}</p>

            {/* <ul>
              <li>
                <button>{localArtistBlock.blockRate}</button>
              </li>
              <li>
                <button>{localArtistBlock.blockRate}</button>
              </li>
            </ul> */}
          </div>
        </div>

        {image && typeof image === 'object' && (
          <Media boxWidth={74} boxHeight={40.625} resource={image} priority />
        )}

        {image && typeof image === 'object' && (
          <Media
            boxWidth={74}
            boxHeight={40.625}
            staticMediaSrc={heroImage}
            staticMediaAlt={image.alt}
            boxClassName="border-10 border-white"
            priority
          />
        )}

        {localArtistBlock && (
          <div className="w-[74rem] h-[40.625rem]">
            <h2>{localArtistBlock.title}</h2>
            <p>{localArtistBlock.description}</p>
            <p>{localArtistBlock.rating}</p>
          </div>
        )}
      </div>
    </section>
  )
}
