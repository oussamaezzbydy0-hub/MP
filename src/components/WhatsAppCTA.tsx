import { motion } from 'framer-motion'
import { fadeUp, scaleIn, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'
import { i18n, tr } from '../lib/i18n'

export default function WhatsAppCTA() {
  const { lang } = useLang()

  return (
    <section className="relative pt-80 pb-[8.25rem] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/RESER.jpg.jpeg)' }}
      />
      <div className="absolute inset-0 bg-mp-black/65" />

      {[
        'top-8 left-8 border-l-2 border-t-2',
        'top-8 right-8 border-r-2 border-t-2',
        'bottom-8 left-8 border-l-2 border-b-2',
        'bottom-8 right-8 border-r-2 border-b-2',
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-12 h-12 border-gold/50 ${cls}`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p className="font-raleway text-gold-light text-sm tracking-[0.35em] uppercase mb-6" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          {tr(i18n.whatsappCTA.eyebrow, lang)}
        </motion.p>

        <motion.h2 className="font-playfair text-4xl md:text-5xl text-white mb-6 leading-tight" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          {tr(i18n.whatsappCTA.title1, lang)}{' '}
          <em className="text-gold not-italic">{tr(i18n.whatsappCTA.title2, lang)}</em>
        </motion.h2>

        <motion.p className="font-raleway text-white/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          {tr(i18n.whatsappCTA.subtitle, lang)}
        </motion.p>

        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={scaleIn}>
          <motion.a
            href="https://wa.me/212662519668"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-10 py-5 rounded-full font-raleway text-base font-semibold tracking-wider transition-colors duration-300 shadow-2xl"
          >
            <span className="relative flex items-center justify-center">
              <motion.span
                className="absolute w-8 h-8 rounded-full bg-white/30"
                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </span>
            <span>{tr(i18n.whatsappCTA.btn, lang)}</span>
            <span className="text-sm font-light opacity-75">+212 662-519668</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
