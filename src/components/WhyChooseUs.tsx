import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, cardItem, lineGrow, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'
import { WA } from '../lib/siteConfig'

type T4 = { fr: string; en: string; ar: string; es: string }

function tr(t: T4, lang: string): string {
  return t[lang as keyof T4] ?? t.fr
}

const EYEBROW: T4 = {
  fr: '✦ Pourquoi Nous Choisir ✦',
  en: '✦ Why Choose Us ✦',
  ar: '✦ لماذا تختاريننا ✦',
  es: '✦ Por Qué Elegirnos ✦',
}
const TITLE: T4 = {
  fr: "L'Excellence à Votre Service",
  en: 'Excellence at Your Service',
  ar: 'التميز في خدمتك',
  es: 'La Excelencia a Tu Servicio',
}
const SUBTITLE: T4 = {
  fr: "Chaque détail compte. Chez Miss Prestige, nous mettons tout en œuvre pour que votre expérience soit unique, mémorable et à la hauteur de vos attentes.",
  en: "Every detail matters. At Miss Prestige, we do everything possible to make your experience unique, memorable and beyond your expectations.",
  ar: "كل تفصيل مهم. في ميس بريستيج، نبذل كل جهد لجعل تجربتك فريدة ولا تُنسى وتفوق توقعاتك.",
  es: "Cada detalle importa. En Miss Prestige, hacemos todo lo posible para que tu experiencia sea única, memorable y más allá de tus expectativas.",
}

type Reason = {
  number: string
  title: T4
  desc: T4
  icon: ReactNode
}

const REASONS: Reason[] = [
  {
    number: '01',
    title: { fr: 'Expertise Certifiée', en: 'Certified Expertise', ar: 'خبرة معتمدة', es: 'Experiencia Certificada' },
    desc: {
      fr: "8+ années d'excellence au service de la beauté féminine. Chaque geste, chaque prestation est maîtrisé avec passion et précision.",
      en: '8+ years of excellence in feminine beauty. Every gesture, every service is mastered with passion and precision.',
      ar: 'أكثر من 8 سنوات من التميز في خدمة الجمال الأنثوي. كل حركة وكل خدمة تُتقن بشغف ودقة.',
      es: 'Más de 8 años de excelencia en belleza femenina. Cada gesto, cada servicio se domina con pasión y precisión.',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: { fr: 'Produits Haut de Gamme', en: 'Premium Products', ar: 'منتجات فاخرة', es: 'Productos Premium' },
    desc: {
      fr: "Nous utilisons exclusivement les meilleures marques professionnelles pour des résultats visibles, durables et respectueux de votre santé.",
      en: 'We exclusively use the best professional brands for visible, lasting results that respect your health.',
      ar: 'نستخدم حصرياً أفضل الماركات المهنية لنتائج واضحة ودائمة وصحية.',
      es: 'Usamos exclusivamente las mejores marcas profesionales para resultados visibles, duraderos y respetuosos con tu salud.',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: { fr: 'Service Personnalisé', en: 'Personalized Service', ar: 'خدمة مخصصة', es: 'Servicio Personalizado' },
    desc: {
      fr: "Chaque cliente est unique. Nous prenons le temps d'écouter et d'adapter chaque prestation à votre personnalité et votre style de vie.",
      en: 'Every client is unique. We take time to listen and adapt every service to your personality and lifestyle.',
      ar: 'كل عميلة فريدة. نأخذ الوقت للاستماع وتكييف كل خدمة مع شخصيتك وأسلوب حياتك.',
      es: 'Cada clienta es única. Nos tomamos el tiempo de escuchar y adaptar cada servicio a tu personalidad y estilo de vida.',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: { fr: 'Ambiance Luxueuse', en: 'Luxurious Ambiance', ar: 'أجواء فاخرة', es: 'Ambiente Lujoso' },
    desc: {
      fr: "Un cadre chaleureux, élégant et raffiné pour que chaque visite soit un moment de détente et de bien-être absolu — loin du stress quotidien.",
      en: 'A warm, elegant and refined setting so every visit is a moment of relaxation and absolute well-being — away from daily stress.',
      ar: 'إطار دافئ وأنيق لجعل كل زيارة لحظة استرخاء ورفاهية بعيداً عن ضغوط الحياة.',
      es: 'Un entorno cálido, elegante y refinado para que cada visita sea un momento de relajación y bienestar absoluto.',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    number: '05',
    title: { fr: 'Hygiène Irréprochable', en: 'Impeccable Hygiene', ar: 'نظافة لا تشوبها شائبة', es: 'Higiene Impecable' },
    desc: {
      fr: "Matériel stérilisé et produits de qualité professionnelle — votre sécurité, votre confort et votre santé sont notre priorité absolue.",
      en: 'Sterilized equipment and professional-grade products — your safety, comfort and health are our absolute priority.',
      ar: 'معدات معقمة ومنتجات احترافية — سلامتك وراحتك وصحتك هي أولويتنا المطلقة.',
      es: 'Equipos esterilizados y productos de calidad profesional — tu seguridad, comodidad y salud son nuestra prioridad.',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: { fr: 'Réservation Instantanée', en: 'Instant Booking', ar: 'حجز فوري', es: 'Reserva Instantánea' },
    desc: {
      fr: "Réservez en 30 secondes sur WhatsApp. Réponse garantie sous 15 minutes — parce que votre temps est précieux.",
      en: 'Book in 30 seconds on WhatsApp. Response guaranteed within 15 minutes — because your time is precious.',
      ar: 'احجزي في 30 ثانية عبر واتساب. ردّ مضمون خلال 15 دقيقة — لأن وقتك ثمين.',
      es: 'Reserva en 30 segundos por WhatsApp. Respuesta garantizada en 15 minutos — porque tu tiempo es valioso.',
    },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  const { lang } = useLang()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="py-24" style={{ backgroundColor: '#0F0B0D' }}>
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease }}
          >
            {tr(EYEBROW, lang)}
          </motion.p>

          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4 leading-tight">
            {tr(TITLE, lang)}
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="w-20 h-px bg-gold/60"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={lineGrow}
            />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <motion.div
              className="w-20 h-px bg-gold/60"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={{
                hidden: { scaleX: 0, originX: 1 },
                visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.25 } },
              }}
            />
          </div>

          <p className="font-raleway text-white/45 text-base max-w-2xl mx-auto leading-relaxed">
            {tr(SUBTITLE, lang)}
          </p>
        </motion.div>

        {/* 6-card grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger}
        >
          {REASONS.map((reason) => (
            <motion.div
              key={reason.number}
              variants={cardItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative bg-mp-card rounded-2xl p-8 border border-gold/15 hover:border-gold/45 transition-all duration-400 overflow-hidden cursor-default"
              style={{ transition: 'border-color 0.4s, box-shadow 0.4s' }}
            >
              {/* Large watermark number */}
              <div
                className="absolute -top-3 -right-2 font-playfair font-bold select-none pointer-events-none leading-none"
                style={{ fontSize: '7rem', color: 'rgba(201,168,76,0.04)' }}
              >
                {reason.number}
              </div>

              <div className="relative">
                {/* Icon container */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-mp-black transition-all duration-300"
                  style={{ backgroundColor: 'rgba(201,168,76,0.1)' }}>
                  {reason.icon}
                </div>

                {/* Step number */}
                <span className="font-raleway text-[10px] tracking-[0.3em] uppercase mb-2 block"
                  style={{ color: 'rgba(201,168,76,0.45)' }}>
                  {reason.number}
                </span>

                {/* Title */}
                <h3 className="font-playfair text-xl text-white mb-3 leading-snug">
                  {tr(reason.title, lang)}
                </h3>

                {/* Description */}
                <p className="font-raleway text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>
                  {tr(reason.desc, lang)}
                </p>

                {/* Animated bottom accent */}
                <motion.div
                  className="mt-6 h-px bg-gold/60"
                  initial={{ width: 28 }}
                  whileHover={{ width: 60 }}
                  transition={{ duration: 0.4, ease }}
                />
              </div>

              {/* Corner glow on hover */}
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at bottom right, rgba(201,168,76,0.08), transparent 70%)' }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border rounded-2xl px-8 py-7"
          style={{ borderColor: 'rgba(201,168,76,0.2)', backgroundColor: 'rgba(201,168,76,0.04)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <p className="font-playfair text-xl text-white">
              {tr(
                { fr: 'Prête à vous faire chouchouter ?', en: 'Ready to treat yourself?', ar: 'مستعدة للاهتمام بنفسك؟', es: '¿Lista para mimarte?' },
                lang
              )}
            </p>
            <p className="font-raleway text-sm mt-1" style={{ color: 'rgba(255,255,255,0.38)' }}>
              {tr(
                { fr: 'Réponse garantie en moins de 15 minutes ⚡', en: 'Response guaranteed in less than 15 minutes ⚡', ar: 'ردّ مضمون في أقل من 15 دقيقة ⚡', es: 'Respuesta garantizada en menos de 15 minutos ⚡' },
                lang
              )}
            </p>
          </div>
          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-mp-black px-7 py-3.5 rounded-full font-raleway text-sm font-bold tracking-wider uppercase transition-colors duration-300 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            {tr({ fr: 'Réserver maintenant', en: 'Book Now', ar: 'احجزي الآن', es: 'Reservar Ahora' }, lang)}
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
