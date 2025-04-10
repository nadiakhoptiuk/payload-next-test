import IconInstagram from 'public/icons/instagram.svg'
import IconFacebook from 'public/icons/facebook.svg'
import IconLinkedin from 'public/icons/linkedin.svg'
import IconPlay from 'public/icons/player_btn_play.svg'
import IconTwitter from 'public/icons/twitter.svg'
import IconVolume from 'public/icons/volume.svg'
import IconYoutube from 'public/icons/youtube.svg'
import IconPause from 'public/icons/player_btn_pause.svg'

export const ICONS = {
  facebook: IconFacebook,
  instagram: IconInstagram,
  linkedin: IconLinkedin,
  pause: IconPause,
  play: IconPlay,
  twitter: IconTwitter,
  volume: IconVolume,
  youtube: IconYoutube,
}

export type IconName = keyof typeof ICONS
