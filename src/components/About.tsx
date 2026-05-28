import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fromLeft, fromRight, stagger, cardItem, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'
import { i18n, tr } from '../lib/i18n'

export default function About() {
  const { lang } = useLang()
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  const values = i18n.about.values

  return (
    <section id="apropos" className="bg-mp-dark py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div className="relative" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fromLeft}>
            <div ref={imageRef} className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-gold/15">
              <motion.img
                src="/a%20propos.jpg.jpeg"
                alt="Notre Histoire — Miss Prestige"
                className="w-full object-cover"
                style={{ y: imageY, scale: 1.18, height: '118%', top: '-9%', position: 'absolute', left: 0, right: 0 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mp-black/40 to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-mp-card border border-gold/25 rounded-2xl p-6 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-playfair text-4xl text-gold font-bold leading-none">8+</p>
              <p className="font-raleway text-white/55 text-sm mt-1">{tr(i18n.about.stat, lang)}</p>
              <div className="w-8 h-0.5 bg-gold mt-3" />
            </motion.div>

            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/25 rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          {/* Text Side */}
          <motion.div className="lg:pl-4" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fromRight}>
            <p className="font-raleway text-gold text-sm tracking-[0.3em] uppercase mb-4">
              {tr(i18n.about.eyebrow, lang)}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-8 leading-tight">
              {tr(i18n.about.title1, lang)}{' '}
              <em className="text-gold not-italic">{tr(i18n.about.title2, lang)}</em>
            </h2>

            <p className="font-raleway text-white/55 leading-relaxed mb-5">{tr(i18n.about.p1, lang)}</p>
            <p className="font-raleway text-white/55 leading-relaxed mb-5">{tr(i18n.about.p2, lang)}</p>
            <p className="font-raleway text-white/55 leading-relaxed mb-5">{tr(i18n.about.p3, lang)}</p>
            <p className="font-raleway text-white/55 leading-relaxed mb-10">{tr(i18n.about.p4, lang)}</p>

            <motion.div className="space-y-5" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={stagger}>
              {values.map((v, idx) => (
                <motion.div key={idx} variants={cardItem} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                  </div>
                  <div>
                    <p className="font-raleway font-semibold text-white text-sm">{tr(v.title, lang)}</p>
                    <p className="font-raleway text-white/45 text-sm mt-0.5 leading-relaxed">{tr(v.desc, lang)}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="https://wa.me/212662519668"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-10 bg-gold hover:bg-gold-dark text-mp-black px-7 py-3.5 rounded-full font-raleway text-sm font-bold tracking-wider uppercase transition-colors duration-300 shadow-lg"
            >
              {tr(i18n.about.contact, lang)}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
