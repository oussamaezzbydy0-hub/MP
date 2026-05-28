import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './lib/LanguageContext'
import { useLenis } from './lib/useLenis'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TanguiftSection from './components/TanguiftSection'
import WhyChooseUs from './components/WhyChooseUs'
import Tarifs from './components/Tarifs'
import Gallery from './components/Gallery'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import WhatsAppCTA from './components/WhatsAppCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import CaftanPage from './pages/CaftanPage'

function HomePage() {
  useLenis()
  return (
    <div className="font-raleway">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <TanguiftSection />
      <WhyChooseUs />
      <Tarifs />
      <Gallery />
      <About />
      <Testimonials />
      <FAQ />
      <WhatsAppCTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/caftans" element={<CaftanPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
