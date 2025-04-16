import { getCachedGlobal } from '@/utilities/getGlobals'
import type { TeamBlock as TeamBlockProps } from '@/payload-types'
import { DataFromGlobalSlug } from 'payload'

export const TeamBlock: React.FC<TeamBlockProps> = async (props) => {
  const data = await getCachedGlobal('team', 1)()
  const members = data as DataFromGlobalSlug<'team'>

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <p>Title: </p>
          <p>{props.title && props.editTitle ? props.title : members.title}</p>
        </div>

        <div>
          <p>Subtitle: </p>
          <p>{props.subtitle && props.editSubtitle ? props.subtitle : members.subtitle}</p>
        </div>

        <div>
          <p>Description: </p>
          <p>
            {props.description && props.editDescription ? props.description : members.description}
          </p>
        </div>
      </div>
    </div>
  )
}
