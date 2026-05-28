import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Tangaft from '../components/Tangaft'
import PreparationMariee from '../components/PreparationMariee'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { useLang } from '../lib/LanguageContext'
import { fadeUp, VIEWPORT } from '../lib/motionVariants'

/* ─── helpers ─── */
type T4 = { fr: string; en: string; ar: string; es: string }
function tl(t: T4, lang: string) { return t[lang as keyof T4] ?? t.fr }

const ease = [0.22, 1, 0.36, 1] as const
const IG   = 'https://www.instagram.com/tanguif_imanetourit?igsh=azB6azAxcTFkbXg0'

/* ─── data ─── */
const GALLERY = [
  {
    src:     '/TT.jpeg',
    alt:     'Mariée Tangaft',
    caption: { fr: 'La Mariée', en: 'The Bride', ar: 'العروس', es: 'La Novia' },
  },
  {
    src:     '/WhatsApp%20Image%202026-05-15%20at%2022.37.05.jpeg',
    alt:     'Préparation Mariée',
    caption: { fr: 'Préparation', en: 'Preparation', ar: 'الإعداد', es: 'Preparación' },
  },
  {
    src:     '/WhatsApp%20Image%202026-05-17%20at%2022.57.33.jpeg',
    alt:     'Beauté Mariée',
    caption: { fr: 'Beauté Naturelle', en: 'Natural Beauty', ar: 'الجمال الطبيعي', es: 'Belleza Natural' },
  },
]

const STATS = [
  { num: '500+', label: { fr: 'Mariées\nSublimées',    en: 'Brides\nBeautified',       ar: 'عروس\nتألقت',   es: 'Novias\nEmbellecidas' } },
  { num: '10+',  label: { fr: "Années\nd'Expérience",  en: 'Years of\nExperience',      ar: 'سنوات\nخبرة',   es: 'Años de\nExperiencia'  } },
  { num: '100%', label: { fr: 'Satisfaction\nGarantie', en: 'Satisfaction\nGuaranteed', ar: 'رضا\nمضمون',    es: 'Satisfacción\nGarantizada' } },
]

/* ─── svg helpers ─── */
function IGIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0H8zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
    </svg>
  )
}

/* ════════════════════════════════════════════════════════ */
export default function TanguiftPage() {
  const { lang } = useLang()

  return (
    <div className="font-raleway" style={{ backgroundColor: '#0C070A' }}>
      <Navbar />

      {/* ══════════════════════ STATS BAND ══════════════════════ */}
      <section
        className="pt-28 pb-12 border-b"
        style={{ backgroundColor: '#130B10', borderColor: 'rgba(192,104,120,0.14)' }}
      >
        <div className="max-w-3xl mx-auto px-6 grid grid-cols-3 divide-x"
          style={{ divideColor: 'rgba(192,104,120,0.14)' } as React.CSSProperties}>
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
              className="text-center px-4"
            >
              <p
                className="font-playfair font-bold mb-1"
                style={{ fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', color: '#C06878' }}
              >
                {s.num}
              </p>
              <p className="font-raleway text-[11px] text-white/42 tracking-wider leading-relaxed whitespace-pre-line">
                {tl(s.label, lang)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════ GALLERY ══════════════════════ */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0C070A' }}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
            className="text-center mb-14"
          >
            <p className="font-raleway text-[11px] tracking-[0.42em] uppercase mb-4" style={{ color: '#C06878' }}>
              {tl({ fr: '✦ Nos Créations ✦', en: '✦ Our Creations ✦', ar: '✦ إبداعاتنا ✦', es: '✦ Nuestras Creaciones ✦' }, lang)}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-5">
              {tl({ fr: "L'Élégance en Images", en: 'Elegance in Images', ar: 'الأناقة في الصور', es: 'La Elegancia en Imágenes' }, lang)}
            </h2>
            <div className="w-16 h-px mx-auto" style={{ backgroundColor: 'rgba(192,104,120,0.4)' }} />
          </motion.div>

          {/* ── Asymmetric 3-photo grid ── */}
          {/* Desktop: tall left + 2 stacked right  |  Mobile: 1 big + 2 in row */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-3 md:h-[580px]">

            {/* Photo 1 – full height on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.85, ease }}
              className="group relative overflow-hidden rounded-2xl h-80 md:h-full"
              style={{ border: '1px solid rgba(192,104,120,0.16)' }}
            >
              <img
                src={GALLERY[0].src}
                alt={GALLERY[0].alt}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none' }}
              />
              {/* Hover caption */}
              <div
                className="absolute inset-0 flex items-end p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to top, rgba(12,7,10,0.75) 0%, transparent 55%)' }}
              >
                <span className="font-playfair text-white text-2xl tracking-wide">
                  {tl(GALLERY[0].caption, lang)}
                </span>
              </div>
              {/* Rose glow border on hover */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(192,104,120,0.45)' }} />
            </motion.div>

            {/* Photos 2 & 3 – stacked */}
            <div className="grid grid-rows-2 gap-3 h-[420px] md:h-full">
              {GALLERY.slice(1).map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT}
                  transition={{ delay: 0.12 + i * 0.16, duration: 0.85, ease }}
                  className="group relative overflow-hidden rounded-2xl"
                  style={{ border: '1px solid rgba(192,104,120,0.16)' }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none' }}
                  />
                  <div
                    className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(to top, rgba(12,7,10,0.72) 0%, transparent 55%)' }}
                  >
                    <span className="font-playfair text-white text-xl">{tl(photo.caption, lang)}</span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(192,104,120,0.45)' }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gallery CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-10"
          >
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-raleway text-xs tracking-widest uppercase transition-opacity duration-300 hover:opacity-100"
              style={{ color: 'rgba(192,104,120,0.55)' }}
            >
              <IGIcon />
              {tl({ fr: 'Voir plus sur Instagram', en: 'See more on Instagram', ar: 'شاهد المزيد على إنستغرام', es: 'Ver más en Instagram' }, lang)}
              {' '}→
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ SERVICES ══════════════════════ */}
      <PreparationMariee />

      {/* ══════════════════════ CAFTANS ══════════════════════ */}
      <Tangaft />

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
