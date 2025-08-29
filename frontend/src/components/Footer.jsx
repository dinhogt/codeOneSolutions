export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-xl py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-lg">Code One Solutions</div>
          <p className="text-sm text-slate-600 mt-2">
            Soluções digitais sob medida.
          </p>
          <div>Redes Sociais</div>
        </div>
        <div>
          <div className="font-semibold">Links</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-accent">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-accent">Serviços</a></li>
            <li><a href="#competencias" className="hover:text-accent">Competências</a></li>
            <li><a href="#projetos" className="hover:text-accent">Projetos</a></li>
            <li><a href="#contato" className="hover:text-accent">Contato</a></li>
          </ul>          
        </div>        
        <div>
          <div className="font-semibold">Serviços</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-accent">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-accent">Serviços</a></li>
            <li><a href="#competencias" className="hover:text-accent">Competências</a></li>
            <li><a href="#projetos" className="hover:text-accent">Projetos</a></li>
            <li><a href="#contato" className="hover:text-accent">Contato</a></li>
          </ul>          
        </div> 
        <div>
        <div>       
          <div className="font-semibold">Contato</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li>contato@codeonesolutions.com</li>
            <li>(11) 99263-3877</li>
          </ul>
        </div>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Code One Solutions. Todos os direitos reservados.
      </div>
    </footer>
  )
}
