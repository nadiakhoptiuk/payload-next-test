import { cn } from '@/utilities/ui'
import { Slider, SliderTrack, SliderRange, SliderThumb } from '@radix-ui/react-slider'

type RangeInputProps = {
  min: number
  max: number
  step: number
  value: number
  onChange: (value: number) => void
  ariaLabel: string
  onMouseDown?: () => void
  onMouseUp?: (value: number) => void
  className?: string
}

export const RangeInput = (props: RangeInputProps) => {
  const { min, max, step, value, onChange, onMouseDown, onMouseUp, ariaLabel, className } = props

  return (
    <div className={cn('w-full', className)}>
      <Slider
        className="relative flex items-center h-10 touch-none select-none"
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(values) => onChange(values[0] || 0)}
        onPointerDown={onMouseDown}
        onPointerUp={() => onMouseUp?.(value)}
        orientation="horizontal"
      >
        <SliderTrack className="relative h-[2px] w-full grow overflow-hidden bg-white">
          <SliderRange className="absolute h-full bg-yellow" />
        </SliderTrack>

        <SliderThumb
          className="block h-3 w-3 rounded-full bg-yellow focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={ariaLabel}
        />
      </Slider>
    </div>
  )
}
