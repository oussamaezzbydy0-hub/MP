import { motion } from 'framer-motion'
import { fadeUp, staggerSlow, tiltCard, lineGrow, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'
import { i18n, tr } from '../lib/i18n'

const GOOGLE_URL = 'https://www.google.com/maps/place/Salon+de+beaut%C3%A9+Miss+prestige/@31.5086601,-9.7602707,18z/data=!3m1!4b1!4m6!3m5!1s0xdad9b744cfbdacf:0x244203dd20635c55!8m2!3d31.5086601!4d-9.7589832!16s%2Fg%2F11qbh3mj12'

type Testimonial = { name: string; rating: number; text: string }

const testimonials: Testimonial[] = [
  {
    name: 'Roxane Di Barbazza',
    rating: 5,
    text: 'Nous avons été très bien reçues dès notre arrivée. Nous étions en avance sur l\'horaire prévu et avons été prises tout de suite. Le travail a été réalisé avec beaucoup de soin et de professionnalisme. Les prix sont à la hauteur de la qualité du travail. Je recommande fortement ! Merci à Imane et Fatima.',
  },
  {
    name: 'Sarah',
    rating: 5,
    text: 'J\'ai été super bien reçu, j\'ai fait deux prestations : extension de cils volume intense et shampooing + coupe + brushing. Prix très intéressant. Les filles sont très compétentes, elles se sont toutes les deux occupées de moi en prenant le temps. Je recommande ce lieu !',
  },
  {
    name: 'Wafae Amzil',
    rating: 5,
    text: 'Très beau salon, équipe professionnelle et ambiance agréable. Je recommande fortement 💇‍♀️✨ Merci beaucoup Imane et Fatima vous êtes les meilleurs ❤️❤️',
  },
  {
    name: 'Hajar',
    rating: 5,
    text: 'I had an amazing experience! Milky white with a french tip for the summer. Imane is truly good at her job! Thanks so much.',
  },
  {
    name: 'Elsi Carroll',
    rating: 5,
    text: 'The wonderful lady Imane who did my nails is so incredibly professional, kind and attentive, making sure every detail was perfect. I got milky French nails and they turned out absolutely flawless — so clean, elegant, and exactly what I wanted. I\'ll definitely be coming back next time I\'m in Essaouira! 🫶🏽',
  },
  {
    name: 'Chaima',
    rating: 5,
    text: 'Best one in Essaouira, very professional and good quality service.',
  },
  {
    name: 'Kawthar M',
    rating: 5,
    text: 'Clean, professional, and great vibes.',
  },
]

const GoogleLogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`w-3.5 h-3.5 ${i < count ? 'text-gold' : 'text-white/15'}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { lang } = useLang()

  return (
    <section id="temoignages" className="bg-mp-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <p className="font-raleway text-gold text-sm tracking-[0.3em] uppercase mb-4">
            {tr(i18n.testimonials.eyebrow, lang)}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            {tr(i18n.testimonials.title, lang)}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div className="w-16 h-px bg-gold/60" initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={lineGrow} />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <motion.div className="w-16 h-px bg-gold/60" initial="hidden" whileInView="visible" viewport={VIEWPORT}
              variants={{ hidden: { scaleX: 0, originX: 1 }, visible: { scaleX: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 } } }} />
          </div>

          {/* Google rating summary */}
          <motion.a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-mp-card border border-gold/15 hover:border-gold/40 px-5 py-3 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.03, y: -2 }}
          >
            <GoogleLogoSVG />
            <span className="font-playfair text-white font-semibold text-lg">5.0</span>
            <StarRating count={5} />
            <span className="font-raleway text-white/40 text-xs">· Google Business</span>
          </motion.a>
        </motion.div>

        {/* 3-column grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerSlow}
        >
          {testimonials.map((t) => (
            <motion.a
              key={t.name}
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={tiltCard}
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="bg-mp-card rounded-2xl p-6 border border-gold/15 hover:border-gold/40 transition-colors duration-300 flex flex-col cursor-pointer"
            >
              {/* Google badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <GoogleLogoSVG />
                  <span className="font-raleway text-[10px] tracking-widest uppercase text-white/30">Google</span>
                </div>
                <StarRating count={t.rating} />
              </div>

              <div className="font-playfair text-6xl text-gold/10 leading-none select-none -mb-3">"</div>
              <p className="font-raleway text-white/60 text-sm leading-relaxed flex-1">{t.text}</p>

              <div className="border-t border-gold/10 mt-5 pt-4">
                <p className="font-playfair text-white text-sm font-medium">{t.name}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Google */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 border border-gold/30 hover:border-gold text-white hover:text-gold px-8 py-3.5 rounded-full font-raleway text-sm font-semibold tracking-wider transition-all duration-300"
          >
            <GoogleLogoSVG />
            Voir tous les avis sur Google
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
