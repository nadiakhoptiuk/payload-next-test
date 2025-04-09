import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'
// import heroImage from 'public/media/homehero-1-1920x1054.jpg'
import { CMSLink } from '@/components/Link'

export const PrimaryHero: React.FC<Page['hero']> = (props) => {
  const { title, description, image, localArtistBlock, buttons } = props

  return (
    <section>
      <div className="container">
        <ul className="flex items-center gap-4">
          {/* STATIC BUTTONS */}
          {/* <Button variant="accent" size="xs" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Button>Contact Us</Button> */}

          {/* DYNAMIC BUTTONS */}
          {buttons?.map((button) => (
            <li key={button.id}>
              <CMSLink {...button.link} />
            </li>
          ))}
        </ul>

        <div className="">
          <h1 className="max-w-[48rem] flex items-center">{title}</h1>

          <div className="max-w-[48rem] flex items-center">
            <p>{description}</p>
          </div>
        </div>

        {image && typeof image === 'object' && (
          <Media boxWidth={74} boxHeight={40.625} resource={image} priority />
        )}

        {/* STATIC IMAGE */}
        {/* {image && typeof image === 'object' && (
          <Media
            boxWidth={74}
            boxHeight={40.625}
            staticMediaSrc={heroImage}
            staticMediaAlt={image.alt}
            boxClassName="border-10 border-white"
            priority
          />
        )} */}

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
