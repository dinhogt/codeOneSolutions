export default function Footer() {
  return (
    <footer className="border-t border-brand/50 bg-gradient-to-r from-brand-gradientEnd to-brand-gradientStart text-[#D9D9D9]">
      <div className="container-xl py-10 grid md:grid-cols-4 gap-8">
        {/* Coluna 1: Logo e Descrição */}
        <div>
          <div className="font-bold text-lg text-white">Code One Solutions</div>
          {/* Adicionar ícones de redes sociais aqui */}
        </div>
        
        {/* Coluna 2: Navegação */}
        <div>
          <div className="font-semibold text-white">Navegação</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-accent">Sobre</a></li>
            <li><a href="#services" className="hover:text-accent">Serviços</a></li>
            <li><a href="#news" className="hover:text-accent">Novidades</a></li>
            <li><a href="#projects" className="hover:text-accent">Projetos</a></li>
          </ul>          
        </div>
        
        {/* Coluna 3: Legal */}
        <div>
          <div className="font-semibold text-white">Legal</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-accent">Termos de Serviço</a></li>
          </ul>          
        </div> 
        
        {/* Coluna 4: Contato */}
        <div>       
          <div className="font-semibold text-white">Contato</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li>contato@codeonesolutions.com</li>
            <li>(11) 99263-3877</li>
          </ul>
        </div>
      </div>
      
      {/* Seção de Direitos Autorais */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Code One Solutions. Todos os direitos reservados.
      </div>
    </footer>
  )
}
