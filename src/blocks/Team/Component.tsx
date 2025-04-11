import { getCachedGlobal } from '@/utilities/getGlobals'

export type TeamBlockProps = {
  editTitle: boolean
  editSubtitle: boolean
  editDescription: boolean
  title?: string
  subtitle?: string
  description?: string
}

export const TeamBlock: React.FC<TeamBlockProps> = async () => {
  const members = await getCachedGlobal('team', 1)()

  console.log('members', members)

  return (
    <div className="container">
      <div className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center"></div>
    </div>
  )
}
