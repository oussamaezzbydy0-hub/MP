import { motion } from 'framer-motion'
import { fadeUp, lineGrow, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'
import { i18n, tr } from '../lib/i18n'
import CaftanCollection from './CaftanCollection'

const WA = 'https://wa.me/212662519668'
const ease = [0.22, 1, 0.36, 1] as const

export default function Tangaft() {
  const { lang } = useLang()

  return (
    <section id="tangaft" style={{ backgroundColor: '#0C070A' }} className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <motion.p
            className="font-raleway text-sm tracking-[0.35em] uppercase mb-4"
            style={{ color: '#C06878' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease }}
          >
            {tr(i18n.tangaft.eyebrow, lang)}
          </motion.p>

          <h2 className="font-playfair text-5xl md:text-7xl mb-2">
            <span style={{ color: '#C06878' }}>{tr(i18n.tangaft.title1, lang)}</span>
          </h2>
          <h3 className="font-playfair text-2xl md:text-3xl text-white/80 mb-6">
            {tr(i18n.tangaft.title2, lang)}
          </h3>

          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              className="w-16 h-px"
              style={{ backgroundColor: 'rgba(192,104,120,0.6)' }}
              initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={lineGrow}
            />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C06878' }} />
            <motion.div
              className="w-16 h-px"
              style={{ backgroundColor: 'rgba(192,104,120,0.6)' }}
              initial="hidden" whileInView="visible" viewport={VIEWPORT}
              variants={{ hidden: { scaleX: 0, originX: 1 }, visible: { scaleX: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 } } }}
            />
          </div>

          <p className="font-raleway text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            {tr(i18n.tangaft.subtitle, lang)}
          </p>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 text-white px-10 py-4 rounded-full font-raleway text-sm font-bold tracking-wider uppercase transition-colors duration-300"
            style={{ backgroundColor: '#C06878', boxShadow: '0 8px 32px rgba(192,104,120,0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            {tr(i18n.tangaft.cta, lang)}
          </motion.a>
          <p className="font-raleway text-xs mt-4 tracking-wide" style={{ color: 'rgba(255,255,255,0.28)' }}>
            {tr(i18n.tangaft.ctaNote, lang)}
          </p>
        </motion.div>

      </div>

      {/* ── Caftan Collection ── */}
      <CaftanCollection />

    </section>
  )
}
