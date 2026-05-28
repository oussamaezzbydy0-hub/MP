import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../lib/LanguageContext'
import { tr } from '../lib/i18n'
import { fadeUp, lineGrow, VIEWPORT } from '../lib/motionVariants'

type T4 = { fr: string; en: string; ar: string; es: string }
type CafCat = 'tous' | 'fassi' | 'moderne' | 'mariage' | 'soiree' | 'takchita'

type Caftan = {
  id: number
  name: string
  category: Exclude<CafCat, 'tous'>
  price: number
  image: string
}

const EYEBROW: T4    = { fr: '✦ Notre Collection ✦',    en: '✦ Our Collection ✦',      ar: '✦ مجموعتنا ✦',       es: '✦ Nuestra Colección ✦' }
const TITLE: T4      = { fr: 'Location de Caftans',      en: 'Caftan Rental',            ar: 'تأجير القفاطن',       es: 'Alquiler de Caftanes' }
const SUBTITLE: T4   = {
  fr: "Louez un caftan d'exception pour votre mariage, soirée ou événement — une collection soigneusement sélectionnée pour vous faire rayonner.",
  en: "Rent an exceptional caftan for your wedding, evening or event — a carefully curated collection to make you shine.",
  ar: "استأجري قفطاناً استثنائياً لزفافك أو سهرتك أو مناسبتك — مجموعة مختارة بعناية لتتألقي.",
  es: "Alquila un caftán excepcional para tu boda, noche o evento — una colección cuidadosamente seleccionada para que brilles.",
}
const RESERVE: T4    = { fr: 'Réserver sur WhatsApp',    en: 'Book on WhatsApp',         ar: 'احجزي عبر واتساب',   es: 'Reservar por WhatsApp' }
const AVAILABLE: T4  = { fr: 'Disponible',               en: 'Available',                ar: 'متاح',                es: 'Disponible' }
const DEVIS: T4      = { fr: 'Sur devis',                en: 'On request',               ar: 'حسب الطلب',           es: 'Bajo presupuesto' }

const CATS: { id: CafCat; label: T4 }[] = [
  { id: 'tous',     label: { fr: 'Tous',      en: 'All',       ar: 'الكل',      es: 'Todos'    } },
  { id: 'fassi',    label: { fr: 'Fassi',     en: 'Fassi',     ar: 'فاسي',      es: 'Fassi'    } },
  { id: 'takchita', label: { fr: 'Takchita',  en: 'Takchita',  ar: 'تكشيطة',    es: 'Takchita' } },
  { id: 'moderne',  label: { fr: 'Moderne',   en: 'Modern',    ar: 'عصري',      es: 'Moderno'  } },
  { id: 'mariage',  label: { fr: 'Mariage',   en: 'Wedding',   ar: 'زفاف',      es: 'Boda'     } },
  { id: 'soiree',   label: { fr: 'Soirée',    en: 'Evening',   ar: 'سهرة',      es: 'Noche'    } },
]

const CAT_COLORS: Record<Exclude<CafCat, 'tous'>, string> = {
  fassi:    '#C06878',
  takchita: '#D4849A',
  moderne:  '#A8A9AD',
  mariage:  '#E8A0B0',
  soiree:   '#B07898',
}

const CAFTANS: Caftan[] = [
  { id:  1, name: 'Fassi Brodé Royal',          category: 'fassi',    price: 450, image: '/TT.jpeg' },
  { id:  2, name: 'Caftan Soie Moderne',         category: 'moderne',  price: 350, image: '/HOU.jpg.jpeg' },
  { id:  3, name: 'Mariage Blanc Perles',        category: 'mariage',  price: 850, image: '/after2.jpg.jpeg' },
  { id:  4, name: 'Velours Fassi Or',            category: 'fassi',    price: 520, image: '/after3.jpg.jpeg' },
  { id:  5, name: 'Soirée Élégante',             category: 'soiree',   price: 300, image: '/RESER.jpg.jpeg' },
  { id:  6, name: 'Fassi Bleu Nuit',             category: 'fassi',    price: 400, image: '/a%20propos.jpg.jpeg' },
  { id: 11, name: 'Moderne Léger Pastel',        category: 'moderne',  price: 260, image: '/after12.jpg.jpeg' },
  { id: 12, name: 'Mariage Royal Bordeaux',      category: 'mariage',  price: 950, image: '/hero.jpg.jpeg' },
  { id: 14, name: 'Takchita Mariage Blanc',      category: 'takchita', price: 750, image: '/before22.jpg' },
  { id: 15, name: 'Takchita Moderne Élégante',   category: 'takchita', price: 420, image: '/befor12.jpg.jpeg' },
  { id: 16, name: 'Fassi Doré Tradition',        category: 'fassi',    price: 550, image: '/befor3.jpg.jpeg' },
]

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  )
}

export default function CaftanCollection() {
  const { lang } = useLang()
  const [activeCat, setActiveCat] = useState<CafCat>('tous')

  const filtered = activeCat === 'tous'
    ? CAFTANS.slice(0, 4)
    : CAFTANS.filter(c => c.category === activeCat)

  const waMessage = (name: string) =>
    `https://wa.me/212662519668?text=${encodeURIComponent(`Bonjour, je voudrais avoir un devis pour le caftan "${name}". Merci !`)}`

  return (
    <section id="caftans" className="py-24 px-6" style={{ backgroundColor: '#0C070A' }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
        >
          <p className="font-raleway text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: '#C06878' }}>
            {tr(EYEBROW, lang)}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-2">
            {tr(TITLE, lang)}
          </h2>
          <motion.div
            variants={lineGrow}
            className="w-20 h-px mx-auto my-5"
            style={{ backgroundColor: 'rgba(192,104,120,0.4)' }}
          />
          <p className="font-raleway text-white/55 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {tr(SUBTITLE, lang)}
          </p>
        </motion.div>

        {/* ── Category filters ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATS.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className="relative font-raleway text-xs font-semibold tracking-wider px-5 py-2 rounded-full transition-colors duration-200"
              style={{
                color: activeCat === cat.id ? '#0A0A0A' : 'rgba(255,255,255,0.45)',
              }}
            >
              {activeCat === cat.id && (
                <motion.span
                  layoutId="caftan-filter-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: '#C06878' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{tr(cat.label, lang)}</span>
            </button>
          ))}
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((caftan, i) => (
              <motion.div
                key={caftan.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl overflow-hidden flex flex-col"
                style={{ backgroundColor: '#1C1215', border: '1px solid rgba(192,104,120,0.15)' }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ paddingTop: '130%' }}>
                  <img
                    src={caftan.image}
                    alt={caftan.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.opacity = '0'
                    }}
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="font-raleway text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${CAT_COLORS[caftan.category]}22`,
                        color: CAT_COLORS[caftan.category],
                        border: `1px solid ${CAT_COLORS[caftan.category]}55`,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {tr(CATS.find(c => c.id === caftan.category)!.label, lang)}
                    </span>
                  </div>
                  {/* Available dot */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-raleway text-[9px] text-white/70 tracking-wide">{tr(AVAILABLE, lang)}</span>
                  </div>
                  {/* Dark gradient bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1C1215] to-transparent" />
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-playfair text-white text-base leading-snug mb-3 flex-1">
                    {caftan.name}
                  </h3>

                  {/* Sur devis */}
                  <div className="mb-4">
                    <span className="font-raleway text-xs font-semibold tracking-wider uppercase" style={{ color: 'rgba(192,104,120,0.7)' }}>
                      {tr(DEVIS, lang)}
                    </span>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={waMessage(caftan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-raleway text-xs font-semibold tracking-wider text-white transition-colors duration-300"
                    style={{ backgroundColor: '#C06878' }}
                  >
                    <WhatsAppIcon />
                    {tr(RESERVE, lang)}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  )
}
