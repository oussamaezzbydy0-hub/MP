import info from '../content/info.json'

export const PHONE      = info.phone
export const PHONE_LINK = `tel:+${info.whatsapp}`
export const WA         = `https://wa.me/${info.whatsapp}`
export const EMAIL      = info.email
export const ADDRESS    = info.address as string[]
export const HOURS      = info.hours
export const SOCIAL     = info.social
