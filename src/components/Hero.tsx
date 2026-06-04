import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useLang } from '../lib/LanguageContext'
import { i18n, tr } from '../lib/i18n'
import { WA } from '../lib/siteConfig'
import heroContent from '../content/hero.json'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const display = useTransform(count, (v) => `${Math.round(v)}${suffix}`)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) animate(count, target, { duration: 2.5, ease: 'easeOut' })
  }, [inView, count, target])

  return <motion.span ref={ref}>{display}</motion.span>
}

export default function Hero() {
  const { lang } = useLang()
  const ease = [0.22, 1, 0.36, 1] as const

  const heroEyebrow  = lang === 'fr' ? heroContent.eyebrow  : tr(i18n.hero.eyebrow,  lang)
  const heroTitle1   = lang === 'fr' ? heroContent.title1   : tr(i18n.hero.title1,   lang)
  const heroTitle2   = lang === 'fr' ? heroContent.title2   : tr(i18n.hero.title2,   lang)
  const heroSubtitle = lang === 'fr' ? heroContent.subtitle : tr(i18n.hero.subtitle, lang)

  const stats = [
    { target: 500, suffix: '+', label: tr(i18n.hero.stat1, lang) },
    { target: 8,   suffix: '+', label: tr(i18n.hero.stat2, lang) },
    { target: 100, suffix: '%', label: tr(i18n.hero.stat3, lang) },
  ]

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Ken Burns background */}
      <motion.div
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 11, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.jpg.jpeg)' }}
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="absolute inset-0 bg-gradient-to-b from-mp-black/85 via-mp-black/65 to-mp-black/92"
      />

      {['left-10', 'right-10'].map((side, i) => (
        <motion.div
          key={side}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1.3 + i * 0.1, duration: 0.8, ease }}
          style={{ originY: 0 }}
          className={`absolute top-1/3 ${side} w-px h-20 bg-gold/30 hidden lg:block`}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full pb-44">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease }}
          className="font-raleway text-gold-light text-sm tracking-[0.35em] uppercase mb-6"
        >
          <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}>✦</motion.span>
          {' '}{heroEyebrow}{' '}
          <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 2.4 }}>✦</motion.span>
        </motion.p>

        <h1 className="font-playfair text-5xl md:text-7xl text-white leading-tight mb-6 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.95, ease }}
            className="inline-block"
          >
            {heroTitle1}{' '}
          </motion.span>
          <motion.em
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.15, duration: 0.95, ease }}
            className="text-gold not-italic inline-block"
            style={{ display: 'inline-block' }}
          >
            {heroTitle2}
          </motion.em>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.85, ease }}
          className="font-raleway text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
        >
          {/* Full subtitle — desktop only */}
          <span className="hidden md:inline">{heroSubtitle}</span>
          {/* Short subtitle — mobile only */}
          <span className="md:hidden">
            {tr({
              fr: 'Salon de beauté de luxe au cœur d\'Essaouira.',
              en: 'Luxury beauty salon in Essaouira.',
              ar: 'صالون تجميل فاخر في قلب الصويرة.',
              es: 'Salón de belleza de lujo en Essaouira.',
            }, lang)}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 0.8, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 bg-gold hover:bg-gold-dark text-mp-black px-8 py-4 rounded-full font-raleway text-sm font-bold tracking-wider uppercase transition-colors duration-300 shadow-lg w-full sm:w-auto justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            {tr(i18n.hero.cta1, lang)}
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="border-2 border-gold/50 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full font-raleway text-sm font-semibold tracking-wider uppercase transition-all duration-300 w-full sm:w-auto text-center"
          >
            {tr(i18n.hero.cta2, lang)}
          </motion.a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.85, ease }}
        className="absolute bottom-16 left-0 right-0 z-20 px-6"
      >
        <div className="max-w-lg mx-auto mb-6">
          <div className="flex items-center gap-4">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.4, duration: 1 }} style={{ originX: 0 }} className="flex-1 h-px bg-gold/25" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.4, duration: 1 }} style={{ originX: 1 }} className="flex-1 h-px bg-gold/25" />
          </div>
        </div>

        <div className="flex justify-center items-start gap-4 sm:gap-14 md:gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 + i * 0.15, duration: 0.7, ease }}
              className="flex flex-col items-center gap-2 w-20 sm:w-auto"
            >
              <span className="font-playfair text-2xl sm:text-3xl md:text-4xl text-gold font-bold leading-none">
                <Counter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="font-raleway text-[9px] sm:text-[10px] tracking-widest uppercase text-white/45 text-center leading-relaxed whitespace-pre-line w-full">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center gap-1">
          <div className="w-px h-7 bg-gradient-to-b from-gold/30 to-transparent" />
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
