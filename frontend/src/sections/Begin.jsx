export default function Begin() {
  return (
    <section id="begin" className="relative overflow-hidden bg-brand text-white bg-gradient-to-br from-brand-gradientStart/80 to-brand-gradientEnd">
      <div className="container-xl py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Tecnologia que <span className="text-accent">impulsiona</span> resultados
          </h1>
          <p className="mt-4 text-lg text-[#D9D9D9]">
            Sites, sistemas e integrações para acelerar a transformação digital do seu negócio.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="btn-primary">Começar agora</a>
            <a href="#services" className="btn-outline">Ver serviços</a>
          </div>
        </div>
        <div className="card p-6">
          <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
            <img src="/src/assets/images/indian_dev.png" alt="Code One Solutions" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
