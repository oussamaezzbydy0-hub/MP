import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fromLeft, fromRight, stagger, cardItem, lineGrow, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'
import { i18n, tr } from '../lib/i18n'
import { PHONE, PHONE_LINK, WA, ADDRESS } from '../lib/siteConfig'

function InstagramSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0H8zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
    </svg>
  )
}

function FacebookSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg>
  )
}

function GoogleSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function Contact() {
  const { lang } = useLang()

  const infos: {
    icon: React.ReactNode
    title: string
    lines: string[]
    link?: string
    accent?: string
  }[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: tr(i18n.contact.address, lang),
      lines: ADDRESS,
      link: 'https://www.google.com/maps/place/Salon+de+beaut%C3%A9+Miss+prestige/@31.5086601,-9.7602707,18z/data=!3m1!4b1!4m6!3m5!1s0xdad9b744cfbdacf:0x244203dd20635c55!8m2!3d31.5086601!4d-9.7589832!16s%2Fg%2F11qbh3mj12',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: tr(i18n.contact.hours, lang),
      lines: [tr(i18n.contact.hoursVal, lang), tr(i18n.contact.closed, lang)],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: tr(i18n.contact.phone, lang),
      lines: [PHONE],
      link: PHONE_LINK,
    },
    {
      icon: <InstagramSVG />,
      title: tr(i18n.contact.instagram, lang),
      lines: ['@imanetourit'],
      link: 'https://www.instagram.com/imanetourit',
    },
    {
      icon: <InstagramSVG />,
      title: 'Instagram — Tanguift',
      lines: ['@tanguif_imanetourit'],
      link: 'https://www.instagram.com/tanguif_imanetourit?igsh=azB6azAxcTFkbXg0',
      accent: '#C06878',
    },
    {
      icon: <FacebookSVG />,
      title: tr(i18n.contact.facebook, lang),
      lines: ['By Imane Tourit'],
      link: 'https://www.facebook.com/ByImaneTourit/',
    },
    {
      icon: <GoogleSVG />,
      title: tr(i18n.contact.google, lang),
      lines: ['Miss Prestige — Essaouira'],
      link: 'https://www.google.com/maps/place/Salon+de+beaut%C3%A9+Miss+prestige/@31.5086601,-9.7602707,18z/data=!3m1!4b1!4m6!3m5!1s0xdad9b744cfbdacf:0x244203dd20635c55!8m2!3d31.5086601!4d-9.7589832!16s%2Fg%2F11qbh3mj12',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: tr(i18n.contact.email, lang),
      lines: ['Salon.missprestige@gmail.com'],
      link: 'mailto:Salon.missprestige@gmail.com',
    },
  ]

  return (
    <section id="contact" className="bg-mp-dark py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <p className="font-raleway text-gold text-sm tracking-[0.3em] uppercase mb-4">
            {tr(i18n.contact.eyebrow, lang)}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            {tr(i18n.contact.title, lang)}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <motion.div className="w-16 h-px bg-gold/60" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={lineGrow} />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <motion.div className="w-16 h-px bg-gold/60" initial="hidden" whileInView="visible" viewport={VIEWPORT}
              variants={{ hidden: { scaleX: 0, originX: 1 }, visible: { scaleX: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 } } }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fromLeft} className="space-y-6">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={stagger}>
              {infos.map(({ icon, title, lines, link, accent }) => {
                const color = accent ?? '#C9A84C'
                const Wrapper = link ? motion.a : motion.div
                const wrapperProps = link
                  ? { href: link, target: link.startsWith('mailto') || link.startsWith('tel') ? undefined : '_blank', rel: link.startsWith('mailto') || link.startsWith('tel') ? undefined : 'noopener noreferrer' }
                  : {}
                return (
                  <Wrapper
                    key={title}
                    {...(wrapperProps as object)}
                    variants={cardItem}
                    whileHover={{ y: -3 }}
                    className="bg-mp-card rounded-2xl p-6 transition-colors duration-300 block"
                    style={{ border: `1px solid ${color}22` }}
                    onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.borderColor = `${color}55` }}
                    onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.borderColor = `${color}22` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${color}18`, color }}
                    >
                      {icon}
                    </div>
                    <p
                      className="font-raleway text-xs tracking-widest uppercase mb-2"
                      style={{ color }}
                    >
                      {title}
                    </p>
                    {lines.map((line, i) => (
                      <p key={i} className="font-raleway text-sm text-white/70 leading-relaxed">{line}</p>
                    ))}
                  </Wrapper>
                )
              })}
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 rounded-2xl font-raleway text-sm font-semibold tracking-wider transition-colors duration-300 shadow-lg w-full"
            >
              <span className="relative flex items-center justify-center">
                <motion.span
                  className="absolute w-8 h-8 rounded-full bg-white/25"
                  animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </span>
              <span>{tr(i18n.contact.reserve, lang)}</span>
              <span className="opacity-70 font-light">{PHONE}</span>
            </motion.a>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fromRight}
            className="relative rounded-2xl overflow-hidden border border-gold/15 shadow-2xl"
            style={{ height: 460 }}
          >
            <iframe
              title="Miss Prestige — Essaouira"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.7!2d-9.7589832!3d31.5086601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9b744cfbdacf%3A0x244203dd20635c55!2sSalon%20de%20beaut%C3%A9%20Miss%20prestige!5e0!3m2!1sfr!2sma!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(40%) contrast(1.1) brightness(0.85)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <motion.div
              className="absolute bottom-4 left-4 right-4 bg-mp-black/90 backdrop-blur-sm border border-gold/20 rounded-xl p-4 flex items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center text-gold flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-playfair text-white text-sm font-medium">Miss Prestige Beauty Salon</p>
                <p className="font-raleway text-white/50 text-xs mt-0.5">{tr(i18n.contact.location, lang)}</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Salon+de+beaut%C3%A9+Miss+prestige/@31.5086601,-9.7602707,18z/data=!3m1!4b1!4m6!3m5!1s0xdad9b744cfbdacf:0x244203dd20635c55!8m2!3d31.5086601!4d-9.7589832!16s%2Fg%2F11qbh3mj12"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto font-raleway text-xs font-semibold text-gold hover:text-gold-light transition-colors duration-200 whitespace-nowrap"
              >
                {tr(i18n.contact.itinerary, lang)}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
