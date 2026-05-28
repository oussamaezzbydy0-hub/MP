import { motion } from 'framer-motion'
import { useLang } from '../lib/LanguageContext'
import { i18n, tr as trI18n } from '../lib/i18n'
import { fadeUp, VIEWPORT } from '../lib/motionVariants'

const HIGHLIGHTS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l1.5 1.5M19 3l-1.5 1.5M3 9h18M5 9v9a2 2 0 002 2h10a2 2 0 002-2V9M9 9V6a3 3 0 016 0v3" />
      </svg>
    ),
    label: { fr: 'Location Caftans & Takchitas', en: 'Caftan & Takchita Rental', ar: 'تأجير القفاطن', es: 'Alquiler Caftanes' },
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    label: { fr: 'Maquillage & Coiffure Mariée', en: 'Bridal Makeup & Hair', ar: 'مكياج وتسريحة العروس', es: 'Maquillaje & Peinado Novia' },
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    label: { fr: 'Amariya & Neggafa', en: 'Amariya & Neggafa', ar: 'أمارية ونقافة', es: 'Amariya & Neggafa' },
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: { fr: 'Photo, Vidéo & Décoration', en: 'Photo, Video & Decoration', ar: 'تصوير وفيديو وديكور', es: 'Foto, Vídeo & Decoración' },
  },
]

const DISCOVER = {
  fr: 'Découvrir tous les services',
  en: 'Discover all services',
  ar: 'اكتشفي جميع الخدمات',
  es: 'Descubrir todos los servicios',
}

type T4 = { fr: string; en: string; ar: string; es: string }

function tr(t: T4, lang: string) {
  return t[lang as keyof T4] ?? t.fr
}

export default function TanguiftPreview() {
  const { lang } = useLang()

  return (
    <section style={{ backgroundColor: '#0C070A' }} className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
          >
            <p
              className="font-raleway text-[11px] tracking-[0.4em] uppercase mb-4"
              style={{ color: '#C06878' }}
            >
              {trI18n(i18n.tangaft.eyebrow, lang)}
            </p>
            <h2 className="font-playfair text-5xl md:text-6xl mb-3">
              <span style={{ color: '#C06878' }}>{trI18n(i18n.tangaft.title1, lang)}</span>
            </h2>
            <h3 className="font-playfair text-2xl text-white/75 mb-6">
              {trI18n(i18n.tangaft.title2, lang)}
            </h3>
            <div className="w-16 h-px mb-6" style={{ backgroundColor: 'rgba(192,104,120,0.4)' }} />
            <p className="font-raleway text-white/55 text-sm leading-relaxed mb-8 max-w-md">
              {trI18n(i18n.tangaft.desc, lang)}
            </p>

            <motion.a
              href="/tanguift"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-raleway text-sm font-semibold tracking-wider uppercase shadow-lg"
              style={{ backgroundColor: '#C06878', boxShadow: '0 8px 28px rgba(192,104,120,0.3)' }}
            >
              {tr(DISCOVER, lang)}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* ── Right: Service highlights ── */}
          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map((h, i) => (
              <motion.a
                key={i}
                href="/tanguift"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl p-5 flex flex-col gap-3 transition-colors duration-300 cursor-pointer"
                style={{
                  backgroundColor: '#1C1215',
                  border: '1px solid rgba(192,104,120,0.15)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(192,104,120,0.4)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(192,104,120,0.15)')}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(192,104,120,0.1)', color: '#C06878' }}
                >
                  {h.icon}
                </div>
                <p className="font-raleway text-white/80 text-xs font-medium leading-snug tracking-wide">
                  {tr(h.label, lang)}
                </p>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
