import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Initialise Lenis smooth-scroll une seule fois au montage.
 * Durée 1.35 s, easing exponentiel inverse → sensation cinématique.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration:    1.35,
      easing:      (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
    })

    let raf: number
    function loop(time: number) {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // Sync avec les ancres hash natives
    function onHashChange() {
      const id = window.location.hash.slice(1)
      if (!id) return
      const el = document.getElementById(id)
      if (el) lenis.scrollTo(el, { offset: -80, duration: 1.6 })
    }
    window.addEventListener('hashchange', onHashChange)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])
}
