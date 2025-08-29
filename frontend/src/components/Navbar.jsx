export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="container-xl flex items-center justify-between h-16">
        <a href="#" className="font-bold text-xl">SuaEmpresa</a>
        <nav className="hidden md:flex gap-6">
          <a href="#sobre" className="hover:text-accent">Sobre</a>
          <a href="#servicos" className="hover:text-accent">Serviços</a>
          <a href="#competencias" className="hover:text-accent">Competências</a>
          <a href="#projetos" className="hover:text-accent">Projetos</a>
        </nav>
        <a href="#contato" className="btn-primary text-sm">Fale Conosco</a>
      </div>
    </header>
  )
}
