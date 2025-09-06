import { useState, useEffect } from 'react';

export default function News() {
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        setNewsData(data);
      } catch (err) {
        setNewsData([]);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <>
      <section id="news" className="py-10">
        <div className="container-xl">
          <h2 className="text-3xl text-center font-bold text-accent">Novidades no Mundo da Tecnologia</h2>
          <p className="text-slate-600 text-center mt-2">Fique por dentro das novidades do mundo da tecnologia. Trazemos alguns dos assuntos mais recentes e relevantes.</p>

          {loading ? (
            <div className="text-center mt-10">Carregando notícias...</div>
          ) : newsData.length === 0 ? (
            <div className="flex justify-center items-center mt-10">
              <div className="card p-10 flex flex-col items-center max-w-lg mx-auto text-center">
                <img src="/assets/images/dog_found_news.png" alt="Sem notícias" className="aspect-video w-full rounded-lg object-cover mb-8 max-h-60" />
                <div className="font-semibold text-lg text-accent mb-2">Nenhuma notícia disponível</div>
                <p className="text-slate-500 mb-2">No momento não há notícias para exibir.<br />Tente novamente mais tarde ou acompanhe nossas redes sociais para novidades!</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {newsData.map((news, idx) => (
                <div 
                  key={news.article_id || idx} 
                  className="card p-10 cursor-pointer flex flex-col items-center max-w-lg mx-auto"
                  onClick={() => setSelectedNews(news)}
                  style={{ minHeight: '400px', maxHeight: '520px', overflow: 'hidden' }}
                >
                  <img src={news.image_url || 'https://placehold.co/600x400'} alt={news.title} className="aspect-video w-full rounded-lg object-cover mb-8 max-h-96" />
                  <div className="font-semibold text-center text-lg line-clamp-2 text-black">{news.title}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

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
            <img src={selectedNews.image_url || 'https://placehold.co/600x400'} alt={selectedNews.title} className="aspect-video w-full rounded-lg object-cover mb-6" />
            <p className="text-slate-700 leading-relaxed">{selectedNews.description}</p>
            <a href={selectedNews.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-600 underline">Ver notícia completa</a>
          </>
        ) : (
          <div className="text-center text-slate-500">Selecione uma notícia para ler.</div>
        )}
      </div>
    </>
  );
}
