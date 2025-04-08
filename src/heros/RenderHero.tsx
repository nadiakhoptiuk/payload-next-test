import React from 'react'

import type { Page } from '@/payload-types'

import { PrimaryHero } from '@/heros/PrimaryHero'

const heroes = {
  primary: PrimaryHero,
  secondary: PrimaryHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type) return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
