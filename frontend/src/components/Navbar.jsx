import logoImage from '../../public/assets/logos/logoImage.png'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg">
       <div className="container-xl flex items-center justify-between h-16">
        <a href="#begin" className="flex items-center">
          <img src={logoImage} alt="Code One Logo" className="h-16 w-auto"/>
          <span className="ml-2 text-xl font-bold text-accent">Code One Solutions</span>
        </a>
      <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <a href="#services" className="hover:text-accent">Serviços</a>
            <a href="#news" className="hover:text-accent">Novidades</a>
            <a href="#projects" className="hover:text-accent">Projetos</a>
            <a href="#about" className="hover:text-accent">Sobre</a>
          </nav>
          <a href="#contact" className="btn-primary text-sm">Fale Conosco</a>
        </div>
      </div>
    </header>
  )
}
