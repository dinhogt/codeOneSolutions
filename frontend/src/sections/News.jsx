import { useState } from 'react';

// 1. Dados de exemplo (simulando uma chamada de API)
const newsData = [
  {
    id: 1,
    title: "Avanços em IA Generativa Transformam o Mercado",
    summary: "Novos modelos de linguagem estão permitindo a criação de conteúdo automatizado com uma qualidade sem precedentes.",
    content: "A inteligência artificial generativa deu um salto significativo nos últimos meses. Empresas de tecnologia estão lançando modelos cada vez mais sofisticados, capazes de escrever textos, criar imagens e até mesmo compor músicas. Especialistas preveem que essa tecnologia irá remodelar indústrias inteiras, desde o marketing digital até o desenvolvimento de software.",
    imageUrl: "https://placehold.co/600x400/1d2c4e/FFFFFF/png?text=IA"
  },
  {
    id: 2,
    title: "Computação em Nuvem: A Tendência é a Soberania de Dados",
    summary: "Empresas buscam soluções de nuvem que garantam que seus dados permaneçam em uma região geográfica específica.",
    content: "Com o aumento das regulamentações de privacidade como a GDPR e a LGPD, a soberania de dados tornou-se uma prioridade. Provedores de nuvem estão respondendo com 'regiões soberanas', que garantem que os dados dos clientes sejam armazenados e processados dentro de fronteiras geográficas definidas, atendendo às exigências legais e de conformidade.",
    imageUrl: "https://placehold.co/600x400/2f455c/FFFFFF/png?text=Nuvem"
  },
  {
    id: 3,
    title: "O Futuro do Desenvolvimento Web é Componetizado",
    summary: "Frameworks como React, Vue e Svelte consolidam a abordagem de construir interfaces a partir de componentes reutilizáveis.",
    content: "A era dos monólitos de front-end está chegando ao fim. A componentização, popularizada por bibliotecas como o React, permite que equipes de desenvolvimento criem sistemas complexos de forma mais rápida e organizada. A reutilização de componentes não só acelera o desenvolvimento, mas também garante uma consistência visual e funcional em toda a aplicação.",
    imageUrl: "https://placehold.co/600x400/5e17eb/FFFFFF/png?text=Web"
  },
];

export default function News() {
  // 2. Estado para controlar a notícia selecionada e o painel
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <>
      <section id="news" className="py-20">
        <div className="container-xl">
          <h2 className="text-3xl text-center font-bold">Novidades</h2>
          <p className="text-slate-600 text-center mt-2">Fique por dentro das novidades do mundo da tecnologia.</p>

          {/* 3. Grid de cards de notícias */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {newsData.map((news) => (
              <div 
                key={news.id} 
                className="card p-6 cursor-pointer"
                onClick={() => setSelectedNews(news)}
              >
                <img src={news.imageUrl} alt={news.title} className="aspect-video w-full rounded-lg object-cover mb-4" />
                <div className="font-semibold">{news.title}</div>
                <p className="text-sm text-slate-600 mt-2">{news.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Painel Lateral (Drawer) */}
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${selectedNews ? 'bg-black/60' : 'bg-transparent pointer-events-none'}`}
        onClick={() => setSelectedNews(null)}
      ></div>

      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl p-8 overflow-y-auto transition-transform duration-300 ease-in-out ${selectedNews ? 'translate-x-0' : 'translate-x-full'}`}>
        {selectedNews ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">{selectedNews.title}</h3>
              <button 
                onClick={() => setSelectedNews(null)}
                className="text-2xl hover:text-accent"
              >
                &times;
              </button>
            </div>
            <img src={selectedNews.imageUrl} alt={selectedNews.title} className="aspect-video w-full rounded-lg object-cover mb-6" />
            <p className="text-slate-700 leading-relaxed">{selectedNews.content}</p>
          </>
        ) : (
          <div className="text-center text-slate-500">Selecione uma notícia para ler.</div>
        )}
      </div>
    </>
  );
}
