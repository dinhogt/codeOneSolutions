const items = [
  { title: "Performance", text: "Interfaces rápidas com foco na experiência do usuário." },
  { title: "Segurança", text: "Boas práticas, autenticação e proteção de dados." },
  { title: "Escalabilidade", text: "Arquiteturas preparadas para crescer com você." },
]

export default function Highlights() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-xl grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="card p-6">
            <div className="text-xl font-semibold">{it.title}</div>
            <p className="text-slate-600 mt-2">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
