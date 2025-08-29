const services = [
  { title: "Sites e Landing Pages", text: "Páginas modernas, rápidas e prontas para ranquear." },
  { title: "Sistemas Web", text: "Aplicações sob medida em React, Node e nuvem." },
  { title: "Integrações", text: "APIs e automações para conectar seus sistemas." },
  { title: "Consultoria", text: "Arquitetura, segurança, performance e boas práticas." },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20">
      <div className="container-xl">
        <h2 className="text-3xl font-bold">O que fazemos</h2>
        <p className="text-slate-600 mt-2">Resultados tangíveis com tecnologia.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((s, i) => (
            <div key={i} className="card p-6">
              <div className="font-semibold">{s.title}</div>
              <p className="text-sm text-slate-600 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
