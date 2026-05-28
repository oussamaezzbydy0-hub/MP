import { motion } from 'framer-motion'
import { LogoSVG } from '../components/LogoSVG'
import Navbar from '../components/Navbar'
import CaftanCollection from '../components/CaftanCollection'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { useLang } from '../lib/LanguageContext'
import { tr } from '../lib/i18n'

type T4 = { fr: string; en: string; ar: string; es: string }

const TITLE: T4    = { fr: 'Notre Collection',        en: 'Our Collection',         ar: 'مجموعتنا',              es: 'Nuestra Colección'        }
const SUBTITLE: T4 = { fr: 'Caftan & Takchita Rental', en: 'Caftan & Takchita Rental', ar: 'تأجير قفطان وتكشيطة',  es: 'Alquiler Caftán & Takchita' }
const DESC: T4     = {
  fr: "20 modèles soigneusement sélectionnés — caftans brodés, takchitas de prestige et tenues de soirée pour sublimer chaque occasion.",
  en: "20 carefully selected models — embroidered caftans, prestige takchitas and evening outfits to enhance every occasion.",
  ar: "20 موديلاً مختاراً بعناية — قفاطين مطرزة وتكشيطة فاخرة وأزياء سهرة لإبراز كل مناسبة.",
  es: "20 modelos cuidadosamente seleccionados — caftanes bordados, takchitas de prestigio y trajes de noche para realzar cada ocasión.",
}

const ease = [0.22, 1, 0.36, 1] as const

export default function CaftanPage() {
  const { lang } = useLang()

  return (
    <div className="font-raleway" style={{ backgroundColor: '#0A0A0A' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden"
        style={{ backgroundColor: '#0A0A0A', minHeight: '52vh' }}
      >
        {/* Gold radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% 35%, rgba(201,168,76,0.09) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="mb-7 relative z-10"
        >
          <LogoSVG className="h-24 w-auto mx-auto" />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
          className="font-raleway text-gold text-[11px] tracking-[0.4em] uppercase mb-4 relative z-10"
        >
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }}>✦</motion.span>
          {' '}Miss Prestige — Essaouira{' '}
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}>✦</motion.span>
        </motion.p>

        {/* Title */}
        <div className="overflow-hidden relative z-10 mb-2">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease }}
            className="font-playfair text-5xl md:text-7xl text-white leading-none"
          >
            {tr(TITLE, lang)}
          </motion.h1>
        </div>

        {/* Sub-title */}
        <div className="overflow-hidden relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.85, ease }}
            className="font-raleway text-lg md:text-xl font-light tracking-[0.2em] uppercase text-gold/70"
          >
            {tr(SUBTITLE, lang)}
          </motion.p>
        </div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.95, duration: 1, ease }}
          style={{ originX: 0.5, backgroundColor: 'rgba(201,168,76,0.35)' }}
          className="w-24 h-px mx-auto my-7 relative z-10"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease }}
          className="font-raleway text-white/55 text-sm md:text-base leading-relaxed max-w-xl mx-auto relative z-10"
        >
          {tr(DESC, lang)}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-7 bg-gradient-to-b from-gold/30 to-transparent" />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Full Collection ── */}
      <CaftanCollection />

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
