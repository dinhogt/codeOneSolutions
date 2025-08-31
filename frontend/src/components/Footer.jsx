import { useState } from "react";

function PrivacyPolicyModal({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${open ? 'bg-black/60 opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg p-8 max-w-2xl w-full relative shadow-2xl transform transition-transform duration-300 ${open ? 'scale-100' : 'scale-95'}`}
        onClick={e => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-2xl text-accent" onClick={onClose}>&times;</button>
        <h1 className="text-2xl font-bold text-accent mb-4">Política de Privacidade</h1>
        <p className="mb-2">Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso site.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">1. Informações Coletadas</h2>
        <p>Coletamos informações fornecidas por você, como nome, e-mail e dados de contato, além de informações de navegação, como endereço IP e cookies.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">2. Uso das Informações</h2>
        <p>Utilizamos suas informações para melhorar nossos serviços, responder a solicitações, enviar comunicações e garantir a segurança do site.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">3. Compartilhamento de Dados</h2>
        <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou para prestação de serviços essenciais.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">4. Cookies</h2>
        <p>Utilizamos cookies para melhorar a experiência do usuário. Você pode desativar os cookies nas configurações do seu navegador.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">5. Segurança</h2>
        <p>Adotamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração ou divulgação.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">6. Alterações na Política</h2>
        <p>Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">7. Contato</h2>
        <p>Em caso de dúvidas, entre em contato pelo e-mail: contato@codeonesolutions.com.br</p>
      </div>
    </div>
  );
}

function TermsOfServiceModal({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${open ? 'bg-black/60 opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg p-8 max-w-2xl w-full relative shadow-2xl transform transition-transform duration-300 ${open ? 'scale-100' : 'scale-95'}`}
        onClick={e => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-2xl text-accent" onClick={onClose}>&times;</button>
        <h1 className="text-2xl font-bold text-accent mb-4">Termos de Serviço</h1>
        <h2 className="text-lg font-semibold mt-4 mb-1">1. Aceitação dos Termos</h2>
        <p>Ao acessar e utilizar este site, você concorda com estes Termos de Serviço e com nossa Política de Privacidade.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">2. Uso do Site</h2>
        <p>Você se compromete a utilizar o site de forma legal, ética e respeitosa, não praticando atividades que possam prejudicar o funcionamento ou a segurança do site.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">3. Propriedade Intelectual</h2>
        <p>Todo o conteúdo do site, incluindo textos, imagens e marcas, é protegido por direitos autorais e não pode ser reproduzido sem autorização.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">4. Limitação de Responsabilidade</h2>
        <p>Não nos responsabilizamos por danos decorrentes do uso ou da impossibilidade de uso do site, incluindo falhas técnicas ou indisponibilidade.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">5. Alterações nos Termos</h2>
        <p>Reservamo-nos o direito de alterar estes Termos de Serviço a qualquer momento. As alterações serão publicadas nesta página.</p>
        <h2 className="text-lg font-semibold mt-4 mb-1">6. Contato</h2>
        <p>Em caso de dúvidas, entre em contato pelo e-mail: contato@codeonesolutions.com.br</p>
      </div>
    </div>
  );
}

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="border-t border-brand/50 bg-gradient-to-r from-brand-gradientEnd to-brand-gradientStart text-[#D9D9D9]">
        <div className="container-xl py-10 grid md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div>
            <div className="font-bold text-lg text-white">Code One Solutions</div>
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/company/codeonesolutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-6 h-6 text-white hover:text-accent transition" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
              <a href="https://twitter.com/codeonesolutions" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg className="w-6 h-6 text-white hover:text-accent transition" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 3.5h3.47l-7.57 8.62 8.93 11.38h-7.03l-5.54-7.07-6.34 7.07h-3.49l8.09-9.03-8.72-10.97h7.18l4.97 6.34z"/></svg>
              </a>
              <a href="https://www.youtube.com/@codeonesolutions" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg className="w-6 h-6 text-white hover:text-accent transition" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112c-1.863-.502-9.386-.502-9.386-.502s-7.523 0-9.386.502a2.994 2.994 0 0 0-2.112 2.112c-.502 1.863-.502 5.754-.502 5.754s0 3.891.502 5.754a2.994 2.994 0 0 0 2.112 2.112c1.863.502 9.386.502 9.386.502s7.523 0 9.386-.502a2.994 2.994 0 0 0 2.112-2.112c.502-1.863.502-5.754.502-5.754s0-3.891-.502-5.754zm-13.498 9.314v-7.001l6.001 3.5-6.001 3.501z"/></svg>
              </a>
            </div>
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
              <li><button className="hover:text-accent underline" onClick={() => setShowPrivacy(true)}>Política de Privacidade</button></li>
              <li><button className="hover:text-accent underline" onClick={() => setShowTerms(true)}>Termos de Serviço</button></li>
            </ul>
          </div>
          {/* Coluna 4: Contato */}
          <div>
            <div className="font-semibold text-white">Contato</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>contato@codeonesolutions.com.br</li>
              <li>(11) 99263-3877</li>
            </ul>
          </div>
        </div>
        {/* Seção de Direitos Autorais */}
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Code One Solutions. Todos os direitos reservados.
        </div>
      </footer>
      <PrivacyPolicyModal open={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsOfServiceModal open={showTerms} onClose={() => setShowTerms(false)} />
    </>
  );
}
