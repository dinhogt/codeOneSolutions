export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container-xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-center">Sobre a Code One Solutions</h2>
          <p className="text-center mt-6 font-medium">
            CodeOne Solutions é uma empresa de tecnologia dedicada a transformar negócios por meio da inovação digital. Nossa missão é promover a transformação digital com soluções tecnológicas que aumentem a eficiência, agilidade e confiabilidade dos processos. 
          </p>
        </div>
        <div className="card p-6">
          <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
            <img src="../../public/assets/images/women_dev.png" alt="Seu banner aqui" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
