import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { LogoSVG } from './LogoSVG'
import { useLang, type Lang } from '../lib/LanguageContext'
import { i18n, tr } from '../lib/i18n'


const LANGS: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
  { code: 'es', label: 'ES' },
]

function LangDropdown({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  const others = LANGS.filter(l => l.code !== lang)

  return (
    <div ref={ref} className="relative">
      {/* Active language button */}
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 border border-gold/25 rounded-full px-3 py-1.5 font-raleway text-[11px] font-semibold tracking-wider text-gold hover:border-gold/50 transition-colors duration-200"
      >
        {lang.toUpperCase()}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 rounded-xl overflow-hidden border border-gold/20 shadow-xl"
            style={{ backgroundColor: '#111111', minWidth: '56px' }}
          >
            {others.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => { setLang(code); setOpen(false) }}
                className="block w-full font-raleway text-[11px] font-semibold tracking-wider text-white/50 hover:text-gold hover:bg-gold/5 px-4 py-2 transition-colors duration-150 text-center"
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLang()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const s = (hash: string) => isHome ? hash : `/${hash}`

  const navLinks = [
    { href: s('#accueil'),     label: tr(i18n.nav.accueil, lang) },
    { href: s('#services'),    label: tr(i18n.nav.services, lang) },
    { href: s('#tarifs'),      label: tr(i18n.nav.tarifs, lang) },
    { href: s('#galerie'),     label: tr(i18n.nav.galerie, lang) },
    { href: s('#apropos'),     label: tr(i18n.nav.apropos, lang) },
    { href: s('#temoignages'), label: tr(i18n.nav.temoignages, lang) },
    { href: s('#contact'),     label: tr(i18n.nav.contact, lang) },
  ]

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gold/10"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <a href={s('#accueil')} className="flex-shrink-0" aria-label="Miss Prestige — Accueil">
          <LogoSVG className="h-14 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ href, label }, i) => (
            <motion.a
              key={href}
              href={href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.5 }}
              className="font-raleway text-sm tracking-wider uppercase text-white/55 hover:text-gold transition-colors duration-300"
            >
              {label}
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LangDropdown lang={lang} setLang={setLang} />
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gold" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden overflow-hidden"
        style={{ height: 0 }}
      >
        <div className="px-6 py-5 flex flex-col gap-4 border-t border-gold/10" style={{ backgroundColor: '#111111' }}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              className="font-raleway text-sm tracking-wider uppercase text-white/55 hover:text-gold transition-colors">
              {label}
            </a>
          ))}

          {/* Mobile language switcher — pills */}
          <div className="flex items-center gap-2 pt-1">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`font-raleway text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  lang === code
                    ? 'bg-gold text-mp-black border-gold'
                    : 'border-gold/25 text-white/40 hover:text-white/70'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

        </div>
      </motion.div>
    </motion.nav>
  )
}
