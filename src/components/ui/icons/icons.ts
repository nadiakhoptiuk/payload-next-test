import IconInstagram from 'public/icons/instagram.svg'
import IconTwitter from 'public/icons/twitter.svg'
import IconYoutube from 'public/icons/youtube.svg'
import IconFacebook from 'public/icons/facebook.svg'
import IconLinkedin from 'public/icons/linkedin.svg'

export const ICONS = {
  facebook: IconFacebook,
  instagram: IconInstagram,
  linkedin: IconLinkedin,
  twitter: IconTwitter,
  youtube: IconYoutube,
}

export type IconName = keyof typeof ICONS
