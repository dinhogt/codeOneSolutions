export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-xl py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Tecnologia que <span className="text-accent">impulsiona</span> resultados
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Sites, sistemas e integrações para acelerar a transformação digital do seu negócio.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contato" className="btn-primary">Começar agora</a>
            <a href="#servicos" className="btn-outline">Ver serviços</a>
          </div>
        </div>
        <div className="card p-6">
          <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
            {/* Espaço para imagem/banner */}
            <span>Seu banner aqui</span>
          </div>
        </div>
      </div>
    </section>
  )
}
