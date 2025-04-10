import { ICONS } from '@/components/ui/icons/icons'
import { cn } from '@/utilities/ui'

type Props = {
  playing: boolean
  handleToggle: () => void
  className?: string
}

export const PlayButton = ({ playing, handleToggle, className }: Props) => {
  return (
    <button
      onClick={handleToggle}
      className={cn(
        'flex items-center justify-center bg-light rounded-full w-14 h-14 pl-5 pr-3',
        className,
      )}
    >
      {playing ? <ICONS.play width={24} height={24} /> : <ICONS.play width={24} height={24} />}
    </button>
  )
}
