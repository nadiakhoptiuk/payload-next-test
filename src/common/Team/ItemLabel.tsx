'use client'
import { Team } from '@/payload-types'
import { useRowLabel, RowLabelProps } from '@payloadcms/ui'

export const ItemLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Team['members']>[number]>()

  const label = data?.data?.name
    ? `Member ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.name}`
    : 'Row'

  return <div>{label}</div>
}
