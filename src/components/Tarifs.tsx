import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, lineGrow, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'
import { i18n, tr } from '../lib/i18n'
import { WA } from '../lib/siteConfig'
import coiffureData  from '../content/prices/coiffure.json'
import visageData    from '../content/prices/visage.json'
import cilsData      from '../content/prices/cils.json'
import epilationData from '../content/prices/epilation.json'
import onglerieData  from '../content/prices/onglerie.json'
import massagesData  from '../content/prices/massages.json'
import makeupData    from '../content/prices/makeup.json'

type PriceItem = { label: string; price: string; from?: boolean }
type Section   = { heading?: string; items: PriceItem[] }
type T4        = { fr: string; en: string; ar: string; es: string }
type Tab       = { id: string; label: T4; sections: Section[] }

const tabs: Tab[] = [
  {
    id: 'coiffure',
    label: { fr: 'Coiffure', en: 'Hair', ar: 'الشعر', es: 'Cabello' },
    sections: coiffureData.sections as Section[],
  },
  {
    id: 'visage',
    label: { fr: 'Visage', en: 'Facial', ar: 'الوجه', es: 'Facial' },
    sections: visageData.sections as Section[],
  },
  {
    id: 'cils',
    label: { fr: 'Cils', en: 'Lashes', ar: 'الرموش', es: 'Pestañas' },
    sections: cilsData.sections as Section[],
  },
  {
    id: 'epilation',
    label: { fr: 'Épilation', en: 'Waxing', ar: 'إزالة الشعر', es: 'Depilación' },
    sections: epilationData.sections as Section[],
  },
  {
    id: 'onglerie',
    label: { fr: 'Onglerie', en: 'Nails', ar: 'الأظافر', es: 'Uñas' },
    sections: onglerieData.sections as Section[],
  },
  {
    id: 'massages',
    label: { fr: 'Massages', en: 'Massages', ar: 'المساج', es: 'Masajes' },
    sections: massagesData.sections as Section[],
  },
  {
    id: 'makeup',
    label: { fr: 'Makeup', en: 'Makeup', ar: 'المكياج', es: 'Maquillaje' },
    sections: makeupData.sections as Section[],
  },
]

function PriceRow({ item, index }: { item: PriceItem; index: number }) {
  const { lang } = useLang()
  const aPartirDe = tr(i18n.tarifs.aPartirDe, lang)
  return (
    <motion.div
      className="flex items-center justify-between gap-4 py-3 border-b border-gold/8 group"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.035, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0 group-hover:bg-gold transition-colors duration-200" />
        <span className="font-raleway text-sm text-white/70 group-hover:text-white/90 transition-colors duration-200 leading-snug">
          {item.label}
        </span>
      </div>
      <div className="flex-shrink-0 text-right">
        {item.price === 'À partir de' ? (
          <span className="font-raleway text-xs text-white/40 uppercase tracking-wider italic">
            {aPartirDe}
          </span>
        ) : (
          <>
            {item.from && (
              <span className="font-raleway text-[10px] text-white/35 uppercase tracking-wider mr-1">
                {aPartirDe}
              </span>
            )}
            <span className="font-playfair font-semibold text-gold text-base tabular-nums">
              {item.price}
            </span>
          </>
        )}
      </div>
    </motion.div>
  )
}

export default function Tarifs() {
  const [activeTab, setActiveTab] = useState('coiffure')
  const { lang } = useLang()
  const current = tabs.find((t) => t.id === activeTab)!

  let itemIndex = 0

  return (
    <section id="tarifs" className="bg-mp-black py-24">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <p className="font-raleway text-gold text-sm tracking-[0.3em] uppercase mb-4">
            {tr(i18n.tarifs.eyebrow, lang)}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            {tr(i18n.tarifs.title, lang)}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div className="w-16 h-px bg-gold/60" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={lineGrow} />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <motion.div className="w-16 h-px bg-gold/60" initial="hidden" whileInView="visible" viewport={VIEWPORT}
              variants={{ hidden: { scaleX: 0, originX: 1 }, visible: { scaleX: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 } } }} />
          </div>
          <p className="font-raleway text-white/50 text-base max-w-lg mx-auto leading-relaxed">
            {tr(i18n.tarifs.subtitle, lang)}
          </p>
        </motion.div>

        <motion.div className="overflow-x-auto pb-1 mb-8 -mx-2 px-2" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className="flex gap-2 min-w-max mx-auto justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative font-raleway text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
                style={{ color: activeTab === tab.id ? '#0A0A0A' : 'rgba(255,255,255,0.65)' }}
              >
                {activeTab === tab.id && (
                  <motion.span layoutId="tab-pill" className="absolute inset-0 bg-gold rounded-full" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                )}
                <span className="relative z-10">{tr(tab.label, lang)}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content panel */}
        <motion.div
          className="bg-mp-card border border-gold/15 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-10"
            >
              {current.sections.map((section, si) => {
                const sectionStart = itemIndex
                itemIndex += section.items.length
                return (
                  <div key={si} className={si > 0 ? 'mt-8 pt-8 border-t border-gold/10' : ''}>
                    {section.heading && (
                      <p className="font-raleway text-[11px] tracking-[0.25em] uppercase text-gold mb-5 font-semibold">
                        {section.heading}
                      </p>
                    )}
                    <div className={`grid gap-x-12 ${section.items.length > 6 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                      {section.items.map((item, ii) => (
                        <PriceRow key={item.label + ii} item={item} index={sectionStart + ii} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Footer note */}
          <div className="px-8 md:px-10 py-5 border-t border-gold/10 bg-mp-black/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-raleway text-xs text-white/30 leading-relaxed">
              {tr(i18n.tarifs.note, lang)}
            </p>
            <motion.a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 font-raleway text-xs font-semibold tracking-wider uppercase text-mp-black bg-gold hover:bg-gold-dark px-5 py-2.5 rounded-full transition-colors duration-300"
            >
              {tr(i18n.tarifs.rdv, lang)}
            </motion.a>
          </div>
        </motion.div>

        {/* Post-tarifs CTA banner */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 border border-gold/15 rounded-2xl px-8 py-6 bg-mp-card"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div>
            <p className="font-playfair text-xl text-white">{tr(i18n.tarifs.ready, lang)}</p>
            <p className="font-raleway text-white/40 text-sm mt-1">{tr(i18n.tarifs.reply, lang)}</p>
          </div>
          <motion.a
            href="https://wa.me/212662519668"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-mp-black px-7 py-3 rounded-full font-raleway text-sm font-bold tracking-wider transition-colors duration-300"
          >
            {tr(i18n.tarifs.whatsapp, lang)}
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
