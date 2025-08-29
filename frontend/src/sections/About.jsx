export default function About() {
  return (
    <section id="sobre" className="py-20 bg-slate-50">
      <div className="container-xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Sobre a Code One Solutions</h2>
          <p className="text-slate-600 mt-4">
            Somos um time apaixonado por criar soluções digitais que resolvem problemas reais.
            Nosso foco é entender o seu contexto e entregar software com qualidade, velocidade e impacto.
          </p>
        </div>
        <div className="card p-6">
          <ul className="space-y-3 text-sm">
            <li>✔️ Ciclo de projeto completo</li>
            <li>✔️ Inovação constante</li>
            <li>✔️ Foco em soluções inteligentes</li>
            <li>✔️ Agilidade e eficiência</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
