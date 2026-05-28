import { motion } from 'framer-motion'
import { fadeUp, stagger, cardItem, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'
import { WA } from '../lib/siteConfig'

type T4 = { fr: string; en: string; ar: string; es: string }
function tr(t: T4, lang: string): string { return t[lang as keyof T4] ?? t.fr }

/* ─── copy ─── */
const EYEBROW: T4 = {
  fr: '✦ Tanguift by Miss Prestige ✦',
  en: '✦ Tanguift by Miss Prestige ✦',
  ar: '✦ تنقافت من ميس بريستيج ✦',
  es: '✦ Tanguift by Miss Prestige ✦',
}
const TITLE: T4 = {
  fr: 'Préparation\nde la Mariée',
  en: 'Bridal\nPreparation',
  ar: 'إعداد\nالعروس',
  es: 'Preparación\nde la Novia',
}
const DESC: T4 = {
  fr: "Tanguift est le service mariage de Miss Prestige — une expérience unique dédiée à la mariée marocaine. De la location de caftan à l'Amariya en passant par le maquillage, la coiffure et le shooting photo, notre équipe prend en charge chaque détail pour que vous rayonniez d'une beauté incomparable le jour J.",
  en: "Tanguift is the wedding service of Miss Prestige — a unique experience dedicated to the Moroccan bride. From caftan rental to the Amariya, including makeup, hair and photo shooting, our team takes care of every detail so you shine with incomparable beauty on your wedding day.",
  ar: "تنقافت هو خدمة الزفاف لدى ميس بريستيج — تجربة فريدة مخصصة للعروس المغربية. من تأجير القفطان إلى الأمارية، مروراً بالمكياج والتسريحة والتصوير، يعتني فريقنا بكل تفصيل لتتألقي بجمال لا مثيل له في يوم زفافك.",
  es: "Tanguift es el servicio de bodas de Miss Prestige — una experiencia única dedicada a la novia marroquí. Desde el alquiler de caftán hasta el Amariya, pasando por el maquillaje, el peinado y el shooting fotográfico, nuestro equipo cuida cada detalle para que brilles con una belleza incomparable el día de tu boda.",
}
const DEVIS: T4    = { fr: 'Sur devis',  en: 'On request', ar: 'حسب الطلب',    es: 'Bajo presupuesto' }
const RESERVER: T4 = { fr: 'Réserver',  en: 'Book',        ar: 'احجزي',         es: 'Reservar'         }
const CTA_LABEL: T4 = {
  fr: 'Consultation gratuite sur WhatsApp',
  en: 'Free consultation on WhatsApp',
  ar: 'استشارة مجانية عبر واتساب',
  es: 'Consulta gratuita por WhatsApp',
}
const GARANTIE: T4 = {
  fr: 'Réponse garantie sous 15 minutes ⚡',
  en: 'Response within 15 minutes ⚡',
  ar: 'ردّ مضمون خلال 15 دقيقة ⚡',
  es: 'Respuesta en 15 minutos ⚡',
}

/* ─── services ─── */
type Service = { icon: React.ReactNode; title: T4; desc: T4; waMsg: T4 }

const SERVICES: Service[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l1.5 1.5M19 3l-1.5 1.5M3 9h18M5 9v9a2 2 0 002 2h10a2 2 0 002-2V9M9 9V6a3 3 0 016 0v3" />
      </svg>
    ),
    title: { fr: 'Location de Caftans & Takchitas', en: 'Caftan & Takchita Rental', ar: 'تأجير القفاطن والتكشيطة', es: 'Alquiler Caftanes & Takchitas' },
    desc:  { fr: 'Large sélection de caftans brodés et takchitas de luxe pour chaque moment de la cérémonie.', en: 'Wide selection of embroidered caftans and luxury takchitas for every moment of the ceremony.', ar: 'مجموعة واسعة من القفاطين المطرزة والتكشيطة الفاخرة لكل لحظة من الحفل.', es: 'Amplia selección de caftanes bordados y takchitas de lujo para cada momento de la ceremonia.' },
    waMsg: { fr: 'Bonjour, je souhaite des informations sur la location de caftans chez Tanguift. Merci !', en: 'Hello, I would like information about caftan rental at Tanguift. Thank you!', ar: 'مرحباً، أريد معلومات عن تأجير القفاطن لدى تنقافت. شكراً!', es: 'Hola, me gustaría información sobre el alquiler de caftanes en Tanguift. ¡Gracias!' },
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: { fr: 'Maquillage & Coiffure Mariée', en: 'Bridal Makeup & Hair', ar: 'مكياج وتسريحة العروس', es: 'Maquillaje & Peinado Novia' },
    desc:  { fr: 'Makeup longue tenue et coiffure nuptiale adaptés à chaque style — naturel, glamour ou oriental.', en: 'Long-lasting makeup and bridal hairstyle adapted to every style — natural, glamour or oriental.', ar: 'مكياج طويل الأمد وتسريحة عروس تتكيف مع كل أسلوب — طبيعي أو غلامور أو شرقي.', es: 'Maquillaje de larga duración y peinado nupcial adaptado a cada estilo — natural, glamour u oriental.' },
    waMsg: { fr: 'Bonjour, je voudrais réserver un maquillage et coiffure mariée chez Tanguift. Merci !', en: 'Hello, I would like to book bridal makeup and hair at Tanguift. Thank you!', ar: 'مرحباً، أريد حجز مكياج وتسريحة عروس لدى تنقافت. شكراً!', es: 'Hola, me gustaría reservar maquillaje y peinado de novia en Tanguift. ¡Gracias!' },
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: { fr: 'Shooting Photo & Vidéo', en: 'Photo & Video Shooting', ar: 'تصوير فوتوغرافي وفيديو', es: 'Shooting Foto & Vídeo' },
    desc:  { fr: 'Photographe et vidéaste professionnels pour immortaliser chaque instant — reportage, film cinématique et Reels.', en: 'Professional photographer and videographer to capture every moment — reportage, cinematic film and Reels.', ar: 'مصور فوتوغرافي ومصور فيديو محترفان لتخليد كل لحظة — تصوير وفيلم سينمائي وريلز.', es: 'Fotógrafo y videógrafo profesionales para inmortalizar cada instante — reportaje, film cinematográfico y Reels.' },
    waMsg: { fr: 'Bonjour, je voudrais réserver le service shooting photo & vidéo pour mon mariage chez Tanguift. Merci !', en: 'Hello, I would like to book the photo & video shooting service for my wedding at Tanguift. Thank you!', ar: 'مرحباً، أريد حجز خدمة التصوير الفوتوغرافي لزفافي لدى تنقافت. شكراً!', es: 'Hola, me gustaría reservar el servicio de shooting foto & vídeo para mi boda en Tanguift. ¡Gracias!' },
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    title: { fr: 'Tanguift — Préparation Complète', en: 'Tanguift — Full Bridal Prep', ar: 'تنقافت — إعداد كامل للعروس', es: 'Tanguift — Preparación Completa' },
    desc:  { fr: 'Coiffure nuptiale, habillage, accessoires traditionnels et Neggafa — un accompagnement complet de A à Z.', en: 'Bridal hairstyle, dressing, traditional accessories and Neggafa — complete accompaniment from A to Z.', ar: 'تسريحة عروس وتلبيس وإكسسوارات تقليدية ونقافة — مرافقة كاملة من الألف إلى الياء.', es: 'Peinado nupcial, vestido, accesorios tradicionales y Neggafa — acompañamiento completo de la A a la Z.' },
    waMsg: { fr: 'Bonjour, je voudrais des informations sur la préparation complète Tanguift pour mon mariage. Merci !', en: 'Hello, I would like information about the complete Tanguift bridal preparation. Thank you!', ar: 'مرحباً، أريد معلومات عن خدمة تنقافت الكاملة لإعداد العروس. شكراً!', es: 'Hola, me gustaría información sobre la preparación nupcial completa Tanguift. ¡Gracias!' },
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    title: { fr: "L'Amariya & Neggafa", en: 'The Amariya & Neggafa', ar: 'الأمارية والنقافة', es: 'La Amariya & Neggafa' },
    desc:  { fr: "L'entrée royale de la mariée — organisation et coordination de l'Amariya traditionnelle pour un moment magique et inoubliable.", en: "The royal entrance of the bride — organisation and coordination of the traditional Amariya for a magical and unforgettable moment.", ar: "الدخول الملكي للعروس — تنظيم وتنسيق الأمارية التقليدية لحظة سحرية لا تُنسى.", es: "La entrada real de la novia — organización y coordinación del Amariya tradicional para un momento mágico e inolvidable." },
    waMsg: { fr: "Bonjour, je voudrais des informations sur l'Amariya pour mon mariage chez Tanguift. Merci !", en: 'Hello, I would like information about the Amariya for my wedding at Tanguift. Thank you!', ar: 'مرحباً، أريد معلومات عن الأمارية لزفافي لدى تنقافت. شكراً!', es: 'Hola, me gustaría información sobre el Amariya para mi boda en Tanguift. ¡Gracias!' },
  },
]

/* ─── icons ─── */
function WAIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  )
}

/* ════════════════════════════════════════════════════════ */
export default function TanguiftSection() {
  const { lang } = useLang()

  return (
    <section className="py-24 px-6 overflow-hidden" style={{ backgroundColor: '#0D080C' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ══ LEFT — intro ══ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="lg:sticky lg:top-28"
          >
            {/* Eyebrow */}
            <p
              className="font-raleway text-[11px] tracking-[0.4em] uppercase mb-5"
              style={{ color: '#C06878' }}
            >
              {tr(EYEBROW, lang)}
            </p>

            {/* Title */}
            <h2
              className="font-playfair text-5xl md:text-6xl leading-tight mb-4 whitespace-pre-line text-white"
            >
              {tr(TITLE, lang)}
            </h2>

            {/* Rose divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-px" style={{ backgroundColor: 'rgba(192,104,120,0.5)' }} />
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#C06878' }} />
            </div>

            {/* Description */}
            <p className="font-raleway text-white/52 text-sm leading-[1.9] mb-10 max-w-md">
              {tr(DESC, lang)}
            </p>

            {/* CTA WhatsApp */}
            <motion.a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-raleway text-sm font-semibold tracking-wider uppercase"
              style={{ backgroundColor: '#C06878', boxShadow: '0 8px 28px rgba(192,104,120,0.32)' }}
            >
              <WAIcon />
              {tr(CTA_LABEL, lang)}
            </motion.a>

            <p className="font-raleway text-xs mt-4" style={{ color: 'rgba(255,255,255,0.28)' }}>
              {tr(GARANTIE, lang)}
            </p>
          </motion.div>

          {/* ══ RIGHT — 5 service cards (2×2 + 1 pleine largeur) ══ */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={stagger}
          >
            {/* 4 first cards — 2×2 */}
            {SERVICES.slice(0, 4).map((s, i) => {
              const waLink = `${WA}?text=${encodeURIComponent(tr(s.waMsg, lang))}`
              return (
                <motion.div
                  key={i}
                  variants={cardItem}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="group rounded-2xl p-5 flex flex-col gap-4"
                  style={{ backgroundColor: '#1C1215', border: '1px solid rgba(192,104,120,0.15)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(192,104,120,0.42)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(192,104,120,0.15)')}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(192,104,120,0.1)', color: '#C06878' }}
                  >
                    {s.icon}
                  </div>

                  {/* Title */}
                  <p className="font-raleway text-white/85 text-xs font-semibold leading-snug tracking-wide flex-1">
                    {tr(s.title, lang)}
                  </p>

                  {/* Description */}
                  <p className="font-raleway text-white/38 text-[11px] leading-relaxed">
                    {tr(s.desc, lang)}
                  </p>

                  {/* Footer */}
                  <div className="pt-3 border-t flex items-center justify-between gap-2" style={{ borderColor: 'rgba(192,104,120,0.1)' }}>
                    <span className="font-raleway text-[9px] font-semibold tracking-[0.18em] uppercase" style={{ color: 'rgba(192,104,120,0.55)' }}>
                      {tr(DEVIS, lang)}
                    </span>
                    <motion.a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 text-mp-black font-raleway text-[9px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: '#C9A84C' }}
                    >
                      <WAIcon />
                      {tr(RESERVER, lang)}
                    </motion.a>
                  </div>
                </motion.div>
              )
            })}

            {/* 5th card — full width */}
            {(() => {
              const s = SERVICES[4]
              const waLink = `${WA}?text=${encodeURIComponent(tr(s.waMsg, lang))}`
              return (
                <motion.div
                  variants={cardItem}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="group col-span-2 rounded-2xl p-5 flex items-center gap-5"
                  style={{ backgroundColor: '#1C1215', border: '1px solid rgba(192,104,120,0.15)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(192,104,120,0.42)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(192,104,120,0.15)')}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(192,104,120,0.1)', color: '#C06878' }}
                  >
                    {s.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="font-raleway text-white/85 text-xs font-semibold leading-snug tracking-wide mb-1">
                      {tr(s.title, lang)}
                    </p>
                    <p className="font-raleway text-white/38 text-[11px] leading-relaxed line-clamp-2">
                      {tr(s.desc, lang)}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0 flex flex-col items-end gap-1.5">
                    <span className="font-raleway text-[9px] font-semibold tracking-[0.18em] uppercase" style={{ color: 'rgba(192,104,120,0.55)' }}>
                      {tr(DEVIS, lang)}
                    </span>
                    <motion.a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 text-mp-black font-raleway text-[9px] font-bold tracking-wider uppercase px-3.5 py-2 rounded-full"
                      style={{ backgroundColor: '#C9A84C' }}
                    >
                      <WAIcon />
                      {tr(RESERVER, lang)}
                    </motion.a>
                  </div>
                </motion.div>
              )
            })()}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
