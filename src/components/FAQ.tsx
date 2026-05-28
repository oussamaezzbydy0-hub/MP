import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, lineGrow, VIEWPORT } from '../lib/motionVariants'
import { useLang } from '../lib/LanguageContext'

type T4 = { fr: string; en: string; ar: string; es: string }

function tr(t: T4, lang: string): string {
  return t[lang as keyof T4] ?? t.fr
}

const EYEBROW: T4 = {
  fr: '✦ Questions Fréquentes ✦',
  en: '✦ Frequently Asked Questions ✦',
  ar: '✦ الأسئلة الشائعة ✦',
  es: '✦ Preguntas Frecuentes ✦',
}
const TITLE: T4 = {
  fr: 'Tout Ce Que Vous Voulez Savoir',
  en: 'Everything You Want to Know',
  ar: 'كل ما تريدين معرفته',
  es: 'Todo Lo Que Quieres Saber',
}
const SUBTITLE: T4 = {
  fr: "Vous avez des questions ? Nous avons les réponses. Si vous ne trouvez pas ce que vous cherchez, contactez-nous directement sur WhatsApp.",
  en: "Have questions? We have the answers. If you can't find what you're looking for, contact us directly on WhatsApp.",
  ar: "هل لديك أسئلة؟ لدينا الإجابات. إذا لم تجدي ما تبحثين عنه، تواصلي معنا مباشرة عبر واتساب.",
  es: "¿Tienes preguntas? Tenemos las respuestas. Si no encuentras lo que buscas, contáctanos directamente por WhatsApp.",
}

const FAQS: { q: T4; a: T4 }[] = [
  {
    q: {
      fr: 'Comment réserver un rendez-vous ?',
      en: 'How do I book an appointment?',
      ar: 'كيف أحجز موعداً؟',
      es: '¿Cómo reservo una cita?',
    },
    a: {
      fr: "La méthode la plus simple est de nous envoyer un message WhatsApp au +212 662-519668. Nous confirmons votre créneau en moins de 15 minutes. Vous pouvez aussi nous appeler directement.",
      en: "The easiest way is to send us a WhatsApp message at +212 662-519668. We confirm your slot in less than 15 minutes. You can also call us directly.",
      ar: "أسهل طريقة هي إرسال رسالة واتساب على +212 662-519668. نؤكد موعدك في أقل من 15 دقيقة. يمكنك أيضاً الاتصال بنا مباشرة.",
      es: "La forma más fácil es enviarnos un WhatsApp al +212 662-519668. Confirmamos tu cita en menos de 15 minutos. También puedes llamarnos directamente.",
    },
  },
  {
    q: {
      fr: 'Acceptez-vous les clientes sans rendez-vous ?',
      en: 'Do you accept walk-in clients?',
      ar: 'هل تقبلون العميلات بدون موعد؟',
      es: '¿Aceptan clientas sin cita previa?',
    },
    a: {
      fr: "Oui, dans la mesure du possible selon nos disponibilités. Cependant, nous recommandons de réserver à l'avance pour garantir votre créneau et éviter toute attente.",
      en: "Yes, whenever possible depending on availability. However, we recommend booking in advance to guarantee your slot and avoid any waiting time.",
      ar: "نعم، حسب التوفر. لكننا نوصي بالحجز المسبق لضمان موعدك وتجنب الانتظار.",
      es: "Sí, siempre que sea posible según disponibilidad. Sin embargo, recomendamos reservar con antelación para garantizar tu cita y evitar esperas.",
    },
  },
  {
    q: {
      fr: 'Quels produits utilisez-vous pour les soins capillaires ?',
      en: 'What products do you use for hair care?',
      ar: 'ما هي المنتجات التي تستخدمونها للعناية بالشعر؟',
      es: '¿Qué productos usan para el cuidado del cabello?',
    },
    a: {
      fr: "Nous utilisons exclusivement des marques professionnelles haut de gamme soigneusement sélectionnées pour leur qualité, leur efficacité et leur respect de la santé capillaire.",
      en: "We exclusively use high-end professional brands carefully selected for their quality, effectiveness and respect for hair health.",
      ar: "نستخدم حصرياً ماركات مهنية راقية مختارة بعناية لجودتها وفعاليتها وسلامة الشعر.",
      es: "Usamos exclusivamente marcas profesionales de alta gama cuidadosamente seleccionadas por su calidad, eficacia y respeto por la salud capilar.",
    },
  },
  {
    q: {
      fr: 'Combien de temps durent les différentes prestations ?',
      en: 'How long do the different services take?',
      ar: 'كم من الوقت تستغرق الخدمات المختلفة؟',
      es: '¿Cuánto tiempo duran los diferentes servicios?',
    },
    a: {
      fr: "La durée varie selon la prestation : Brushing (30–45 min), Coloration (2–3h), Extensions de cils (1h30–2h), Manucure (45 min–1h), Soins visage (1–1h30). La durée exacte vous sera communiquée lors de votre réservation.",
      en: "Duration varies by service: Blow-dry (30–45 min), Coloring (2–3h), Eyelash extensions (1.5–2h), Manicure (45 min–1h), Facial care (1–1.5h). The exact duration will be communicated at booking.",
      ar: "تتفاوت المدة حسب الخدمة: التجفيف (30-45 دق)، التلوين (2-3 ساعات)، الرموش (90 دق-ساعتان)، المانيكير (45 دق-ساعة)، العناية بالوجه (ساعة-ساعة ونص). المدة الدقيقة تُعطى عند الحجز.",
      es: "La duración varía: Brushing (30–45 min), Coloración (2–3h), Extensiones de pestañas (1.5–2h), Manicura (45 min–1h), Cuidado facial (1–1.5h). La duración exacta se comunica al reservar.",
    },
  },
  {
    q: {
      fr: 'Proposez-vous des formules spéciales mariage ?',
      en: 'Do you offer special bridal packages?',
      ar: 'هل تقدمون باقات خاصة للعرائس؟',
      es: '¿Ofrecen paquetes especiales para novias?',
    },
    a: {
      fr: "Absolument ! Notre espace Tanguift est entièrement dédié à la préparation de la mariée : coiffure, maquillage, soins du visage, onglerie, location de caftans et takchitas, Amariya, Neggafa et bien plus encore. Contactez-nous pour une consultation gratuite.",
      en: "Absolutely! Our Tanguift space is fully dedicated to bridal preparation: hair, makeup, facial care, nails, caftan and takchita rental, Amariya, Neggafa and much more. Contact us for a free consultation.",
      ar: "بالتأكيد! فضاء تنقافت مخصص بالكامل للعروس: شعر، مكياج، عناية بالوجه، أظافر، تأجير قفطان وتكشيطة، أمارية، نقافة والمزيد. تواصلي للاستشارة المجانية.",
      es: "¡Por supuesto! Nuestro espacio Tanguift está totalmente dedicado a la preparación nupcial: pelo, maquillaje, cuidado facial, uñas, alquiler de caftán y takchita, Amariya, Neggafa y mucho más. Contáctanos para una consulta gratuita.",
    },
  },
  {
    q: {
      fr: 'Quels sont vos horaires d\'ouverture ?',
      en: 'What are your opening hours?',
      ar: 'ما هي أوقات العمل لديكم؟',
      es: '¿Cuáles son sus horarios de apertura?',
    },
    a: {
      fr: "Nous sommes ouvertes du lundi au samedi, de 11h00 à 21h00. Le dimanche, nous sommes fermées. Pour des besoins spéciaux (mariages, événements), contactez-nous pour des horaires adaptés.",
      en: "We are open Monday to Saturday, from 11:00 to 21:00. Sundays we are closed. For special needs (weddings, events), contact us for adapted hours.",
      ar: "نفتح من الاثنين إلى السبت، من 11:00 إلى 21:00. الأحد مغلق. لمناسبات خاصة، تواصلي معنا لمواعيد مخصصة.",
      es: "Abrimos de lunes a sábado, de 11:00 a 21:00. Los domingos cerramos. Para necesidades especiales (bodas, eventos), contáctanos para horarios adaptados.",
    },
  },
  {
    q: {
      fr: 'Les résultats des extensions de cils sont-ils durables ?',
      en: 'Are eyelash extension results long-lasting?',
      ar: 'هل نتائج تمديد الرموش تدوم طويلاً؟',
      es: '¿Son duraderos los resultados de las extensiones de pestañas?',
    },
    a: {
      fr: "Nos extensions de cils durent entre 3 et 6 semaines selon votre cycle naturel de renouvellement des cils. Nous recommandons un retouche toutes les 3–4 semaines pour maintenir un effet parfait et un regard toujours impeccable.",
      en: "Our eyelash extensions last between 3 and 6 weeks depending on your natural lash renewal cycle. We recommend a touch-up every 3–4 weeks to maintain a perfect effect and always impeccable look.",
      ar: "تمديدات رموشنا تدوم بين 3 و6 أسابيع حسب دورة تجدد رموشك الطبيعية. نوصي بالصيانة كل 3-4 أسابيع للحفاظ على الأثر المثالي.",
      es: "Nuestras extensiones duran entre 3 y 6 semanas según tu ciclo natural de renovación de pestañas. Recomendamos un retoque cada 3–4 semanas para mantener el efecto perfecto.",
    },
  },
  {
    q: {
      fr: 'Comment se rendre au salon depuis le centre-ville ?',
      en: 'How to get to the salon from the city center?',
      ar: 'كيف أصل إلى الصالون من وسط المدينة؟',
      es: '¿Cómo llegar al salón desde el centro?',
    },
    a: {
      fr: "Nous sommes situés Rue Mohammed El Qory, dans la Médina d'Essaouira (44000). Recherchez 'Salon Miss Prestige Essaouira' sur Google Maps pour l'itinéraire. Vous pouvez aussi nous écrire sur WhatsApp et nous vous enverrons notre localisation exacte.",
      en: "We are located on Rue Mohammed El Qory, in the Medina of Essaouira (44000). Search 'Salon Miss Prestige Essaouira' on Google Maps for directions. You can also message us on WhatsApp and we'll send you our exact location.",
      ar: "نقع في شارع محمد القوري، في المدينة العتيقة للصويرة (44000). ابحثي عن 'Salon Miss Prestige Essaouira' على خرائط جوجل. يمكنك أيضاً مراسلتنا عبر واتساب وسنرسل لك موقعنا بالضبط.",
      es: "Estamos en Rue Mohammed El Qory, en la Medina de Essaouira (44000). Busca 'Salon Miss Prestige Essaouira' en Google Maps. También puedes escribirnos por WhatsApp y te enviamos nuestra ubicación exacta.",
    },
  },
]

export default function FAQ() {
  const { lang } = useLang()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="bg-mp-dark py-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
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

          <p className="font-raleway text-white/45 text-base max-w-xl mx-auto leading-relaxed">
            {tr(SUBTITLE, lang)}
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.5, ease, delay: i * 0.055 }}
                className="rounded-2xl overflow-hidden border transition-colors duration-300"
                style={{
                  backgroundColor: isOpen ? 'rgba(201,168,76,0.04)' : '#111111',
                  borderColor: isOpen ? 'rgba(201,168,76,0.35)' : 'rgba(201,168,76,0.13)',
                }}
              >
                {/* Question button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-5 px-7 py-5 text-left"
                >
                  <span
                    className="font-playfair text-base leading-snug transition-colors duration-300"
                    style={{ color: isOpen ? '#C9A84C' : '#ffffff' }}
                  >
                    {tr(faq.q, lang)}
                  </span>

                  {/* +/× toggle */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease }}
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{
                      border: `1px solid ${isOpen ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.25)'}`,
                      color: isOpen ? '#C9A84C' : 'rgba(201,168,76,0.6)',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                    >
                      <div className="px-7 pb-6 border-t" style={{ borderColor: 'rgba(201,168,76,0.12)' }}>
                        <p className="font-raleway text-sm leading-relaxed pt-4" style={{ color: 'rgba(255,255,255,0.58)' }}>
                          {tr(faq.a, lang)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
        >
          <p className="font-raleway text-sm mb-5" style={{ color: 'rgba(255,255,255,0.38)' }}>
            {tr(
              { fr: 'Votre question n\'est pas listée ?', en: "Your question isn't listed?", ar: 'سؤالك غير مدرج؟', es: '¿Tu pregunta no está en la lista?' },
              lang
            )}
          </p>
          <motion.a
            href="https://wa.me/212662519668"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-mp-black px-8 py-3.5 rounded-full font-raleway text-sm font-bold tracking-wider uppercase transition-colors duration-300 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            {tr(
              { fr: 'Poser votre question sur WhatsApp', en: 'Ask your question on WhatsApp', ar: 'اطرحي سؤالك على واتساب', es: 'Hacer tu pregunta por WhatsApp' },
              lang
            )}
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
