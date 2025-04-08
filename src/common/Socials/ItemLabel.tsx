'use client'
import { Social } from '@/payload-types'
import { useRowLabel, RowLabelProps } from '@payloadcms/ui'

export const ItemLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Social['socialLinks']>[number]>()

  const label = data?.data?.socialLink?.type
    ? `Social item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.socialLink?.type}`
    : 'Row'

  return <div>{label}</div>
}
