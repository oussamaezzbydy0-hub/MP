import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, cardItem, lineGrow, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'
import { i18n, tr } from '../lib/i18n'

const icons: ReactNode[] = [
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
]

export default function Services() {
  const { lang } = useLang()
  const services = i18n.services.items

  return (
    <section id="services" className="bg-mp-dark py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <p className="font-raleway text-gold text-sm tracking-[0.3em] uppercase mb-4">
            {tr(i18n.services.eyebrow, lang)}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            {tr(i18n.services.title, lang)}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div className="w-16 h-px bg-gold/60" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={lineGrow} />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <motion.div className="w-16 h-px bg-gold/60" initial="hidden" whileInView="visible" viewport={VIEWPORT}
              variants={{ hidden: { scaleX: 0, originX: 1 }, visible: { scaleX: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 } } }} />
          </div>
          <p className="font-raleway text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            {tr(i18n.services.subtitle, lang)}
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={stagger}>
          {services.map((svc, idx) => {
            const title = tr(svc.title, lang)
            const description = tr(svc.desc, lang)
            const tags = svc.tags[lang]
            return (
              <motion.div
                key={idx}
                variants={cardItem}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group bg-mp-card rounded-2xl p-8 border border-gold/15 hover:border-gold/40 transition-colors duration-300 cursor-default"
              >
                <motion.div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-mp-black transition-all duration-300">
                  {icons[idx]}
                </motion.div>
                <h3 className="font-playfair text-xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {title}
                </h3>
                <p className="font-raleway text-white/50 text-sm leading-relaxed mb-5">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="font-raleway text-[10px] tracking-wider uppercase text-gold/60 border border-gold/20 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div className="mt-5 h-0.5 bg-gold/60" initial={{ width: 32 }} whileHover={{ width: 64 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} />
                <a href="#tarifs" className="mt-4 inline-block font-raleway text-xs text-gold/55 hover:text-gold cursor-pointer transition-colors duration-300 tracking-wide">
                  {tr(i18n.services.voir, lang)}
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-14 border border-gold/20 rounded-2xl px-8 py-10 text-center"
          style={{ backgroundColor: 'rgba(10,10,10,0.5)' }}
          initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}
        >
          <p className="font-playfair text-2xl md:text-3xl text-white mb-2">
            {tr(i18n.services.question, lang)}
          </p>
          <p className="font-raleway text-white/40 text-sm mb-7">
            {tr(i18n.services.answer, lang)}
          </p>
          <motion.a
            href="https://wa.me/212662519668"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-gold/50 text-gold hover:bg-gold hover:text-mp-black px-7 py-3 rounded-full font-raleway text-sm font-semibold tracking-wider transition-all duration-300"
          >
            {tr(i18n.services.ctaWa, lang)}
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
