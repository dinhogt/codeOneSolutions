import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import About from './sections/About.jsx'
import Highlights from './sections/Highlights.jsx'
import Testimonial from './sections/Testimonial.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Services />
        <Testimonial />
        <About />
        <Contact />
      </main>
      <Footer />
      {/* <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 rounded-full shadow-lg bg-green-500 text-white px-4 py-3 font-semibold"
        aria-label="Fale no WhatsApp"
      >
        WhatsApp
      </a> */}
    </div>
  )
}
