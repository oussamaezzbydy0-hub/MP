import { motion } from 'framer-motion'
import { fadeUp, lineGrow, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'
import { i18n, tr } from '../lib/i18n'

type Transformation =
  | { type: 'split'; service: string; category: string; avant: string; apres: string }
  | { type: 'full';  service: string; category: string; image: string }

const transformations: Transformation[] = [
  {
    type: 'split',
    service: 'Design Sourcils',
    category: 'Beauté',
    avant: '/AVANT.jpeg',
    apres: '/APRES.jpeg',
  },
  {
    type: 'full',
    service: 'Coloration',
    category: 'Coiffure',
    image: '/cloration avant apres.jpg.jpeg',
  },
  {
    type: 'full',
    service: 'Protéine',
    category: 'Soin Capillaire',
    image: '/PROTEINE AVANT ET APRES.jpg.jpeg',
  },
  {
    type: 'split',
    service: 'Ongles Gel',
    category: 'Onglerie',
    avant: '/befor12.jpg.jpeg',
    apres: '/after12.jpg.jpeg',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

function SplitCard({ t, index }: { t: Extract<Transformation, { type: 'split' }>; index: number }) {
  const { lang } = useLang()
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={VIEWPORT}
      transition={{ duration: 0.85, ease, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="group relative bg-mp-card rounded-3xl overflow-hidden border border-gold/15 hover:border-gold/50 transition-all duration-500 shadow-lg hover:shadow-[0_20px_60px_rgba(201,168,76,0.12)]"
    >
      {/* Number badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <span className="font-playfair text-[10px] tracking-[0.3em] text-gold/70 bg-mp-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-gold/20">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Images */}
      <div className="flex relative overflow-hidden">
        {/* AVANT */}
        <div className="relative w-1/2 overflow-hidden">
          <motion.img
            src={t.avant}
            alt={`Avant — ${t.service}`}
            className="w-full aspect-[3/4] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mp-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3">
            <span className="font-raleway text-[9px] tracking-[0.2em] uppercase bg-white/15 text-white backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              AVANT
            </span>
          </div>
        </div>

        {/* Gold center divider — animates in */}
        <motion.div
          className="w-px bg-gradient-to-b from-transparent via-gold to-transparent flex-shrink-0 z-10"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.2, ease, delay: index * 0.12 + 0.4 }}
        />

        {/* APRÈS */}
        <div className="relative w-1/2 overflow-hidden">
          <motion.img
            src={t.apres}
            alt={`Après — ${t.service}`}
            className="w-full aspect-[3/4] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mp-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3">
            <span className="font-raleway text-[9px] tracking-[0.2em] uppercase bg-gold text-mp-black font-bold px-2.5 py-1 rounded-full">
              APRÈS
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <p className="font-raleway text-[9px] tracking-[0.25em] uppercase text-gold/60 mb-0.5">{t.category}</p>
          <p className="font-playfair text-white text-base group-hover:text-gold transition-colors duration-300">{t.service}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-gold text-xs tracking-widest">★★★★★</span>
          <span className="font-raleway text-[9px] text-white/30 tracking-wider">{tr(i18n.gallery.excellence, lang)}</span>
        </div>
      </div>

      {/* Gold bottom border — grows on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.5, ease }}
      />
    </motion.div>
  )
}

function FullCard({ t, index }: { t: Extract<Transformation, { type: 'full' }>; index: number }) {
  const { lang } = useLang()
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={VIEWPORT}
      transition={{ duration: 0.85, ease, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="group relative bg-mp-card rounded-3xl overflow-hidden border border-gold/15 hover:border-gold/50 transition-all duration-500 shadow-lg hover:shadow-[0_20px_60px_rgba(201,168,76,0.12)]"
    >
      {/* Number badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <span className="font-playfair text-[10px] tracking-[0.3em] text-gold/70 bg-mp-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-gold/20">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={t.image}
          alt={`Avant / Après — ${t.service}`}
          className="w-full aspect-[16/9] object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mp-black/70 via-mp-black/10 to-transparent" />

        {/* AVANT → APRÈS label centered */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="font-raleway text-[9px] tracking-[0.2em] uppercase bg-white/15 text-white backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
            AVANT
          </span>
          <span className="text-gold/60 text-xs">→</span>
          <span className="font-raleway text-[9px] tracking-[0.2em] uppercase bg-gold text-mp-black font-bold px-2.5 py-1 rounded-full">
            APRÈS
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <p className="font-raleway text-[9px] tracking-[0.25em] uppercase text-gold/60 mb-0.5">{t.category}</p>
          <p className="font-playfair text-white text-base group-hover:text-gold transition-colors duration-300">{t.service}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-gold text-xs tracking-widest">★★★★★</span>
          <span className="font-raleway text-[9px] text-white/30 tracking-wider">{tr(i18n.gallery.excellence, lang)}</span>
        </div>
      </div>

      {/* Gold bottom border — grows on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.5, ease }}
      />
    </motion.div>
  )
}

export default function Gallery() {
  const { lang } = useLang()

  return (
    <section id="galerie" className="bg-mp-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <motion.p
            className="font-raleway text-gold text-sm tracking-[0.35em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease }}
          >
            {tr(i18n.gallery.eyebrow, lang)}
          </motion.p>

          <h2 className="font-playfair text-4xl md:text-6xl text-white mb-4 leading-tight">
            <em className="text-gold not-italic">{tr(i18n.gallery.title, lang)}</em>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div className="w-20 h-px bg-gold/60" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={lineGrow} />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <motion.div className="w-20 h-px bg-gold/60" initial="hidden" whileInView="visible" viewport={VIEWPORT}
              variants={{ hidden: { scaleX: 0, originX: 1 }, visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.25 } } }} />
          </div>

          <p className="font-raleway text-white/45 text-base max-w-lg mx-auto leading-relaxed">
            {tr(i18n.gallery.subtitle, lang)}
          </p>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transformations.map((t, i) =>
            t.type === 'split'
              ? <SplitCard key={t.service} t={t} index={i} />
              : <FullCard  key={t.service} t={t} index={i} />
          )}
        </div>

        {/* Instagram CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease }}
        >
          <p className="font-raleway text-white/35 text-sm mb-5 tracking-wide">
            {tr(i18n.gallery.subtitle, lang)}
          </p>
          <motion.a
            href="https://www.instagram.com/imanetourit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 border border-gold/40 hover:border-gold text-gold hover:bg-gold hover:text-mp-black px-8 py-3.5 rounded-full font-raleway text-sm font-semibold tracking-wider uppercase transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0H8zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
            {tr(i18n.gallery.instagram, lang)}
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
