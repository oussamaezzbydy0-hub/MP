import type { Variants } from 'framer-motion'

/** Viewport trigger — une seule fois, légèrement avant le bord */
export const VIEWPORT = { once: true, margin: '-80px' }

/** Easing cinématique — courbe exponentielle inverse */
const EASE = [0.16, 1, 0.3, 1] as const

// ─────────────────────────────────────────────────────────────
// Entrées de base
// ─────────────────────────────────────────────────────────────

/** Fade-up cinématique — headers, paragraphes */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 1.05, ease: EASE },
  },
}

/** Pure fade — overlays, fonds */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: EASE } },
}

/** Depuis la gauche */
export const fromLeft: Variants = {
  hidden:  { opacity: 0, x: -80, filter: 'blur(6px)' },
  visible: { opacity: 1, x: 0,  filter: 'blur(0px)', transition: { duration: 1.1, ease: EASE } },
}

/** Depuis la droite */
export const fromRight: Variants = {
  hidden:  { opacity: 0, x: 80,  filter: 'blur(6px)' },
  visible: { opacity: 1, x: 0,   filter: 'blur(0px)', transition: { duration: 1.1, ease: EASE } },
}

/** Apparition depuis le bas avec grand débattement */
export const riseUp: Variants = {
  hidden:  { opacity: 0, y: 100, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0,   filter: 'blur(0px)', transition: { duration: 1.2, ease: EASE } },
}

// ─────────────────────────────────────────────────────────────
// Wrappers stagger
// ─────────────────────────────────────────────────────────────

/** Stagger rapide — grilles de cartes */
export const stagger: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.10, delayChildren: 0.08 },
  },
}

/** Stagger lent — sections */
export const staggerSlow: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
}

// ─────────────────────────────────────────────────────────────
// Cartes
// ─────────────────────────────────────────────────────────────

/** Carte standard — fade + montée + scale + blur */
export const cardItem: Variants = {
  hidden:  { opacity: 0, y: 48, scale: 0.94, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { duration: 0.85, ease: EASE },
  },
}

/** Carte témoignage — légère inclinaison */
export const tiltCard: Variants = {
  hidden:  { opacity: 0, y: 64, rotate: 2, filter: 'blur(5px)' },
  visible: {
    opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)',
    transition: { duration: 0.9, ease: EASE },
  },
}

/** Scale-in — sections CTA, hero elements */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.82, filter: 'blur(8px)' },
  visible: {
    opacity: 1, scale: 1, filter: 'blur(0px)',
    transition: { duration: 1.0, ease: EASE },
  },
}

// ─────────────────────────────────────────────────────────────
// Lignes décoratives
// ─────────────────────────────────────────────────────────────

/** Ligne or — croît depuis la gauche */
export const lineGrow: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.4, ease: EASE, delay: 0.2 },
  },
}

/** Ligne depuis la droite */
export const lineGrowRight: Variants = {
  hidden:  { scaleX: 0, originX: 1 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.4, ease: EASE, delay: 0.35 },
  },
}
