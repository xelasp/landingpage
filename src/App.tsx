import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import UrgenciaStrip   from './components/UrgenciaStrip'
import SecaoDor        from './components/SecaoDor'
import ComoFunciona    from './components/ComoFunciona'
import SecaoBeneficios from './components/SecaoBeneficios'
import SecaoNumeros    from './components/SecaoNumeros'
import FAQ             from './components/FAQ'
import CTAFinal        from './components/CTAFinal'
import Footer          from './components/Footer'
import WhatsAppFloat   from './components/WhatsAppFloat'
import { useReveal }   from './components/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UrgenciaStrip />
        <SecaoDor />
        <ComoFunciona />
        <SecaoBeneficios />
        <SecaoNumeros />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
