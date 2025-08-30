const items = [
  { title: "Performance", text: "Interfaces rápidas com foco na experiência do usuário." },
  { title: "Segurança", text: "Boas práticas, autenticação e proteção de dados." },
  { title: "Escalabilidade", text: "Arquiteturas preparadas para crescer com você." },
  { title: "Segurança", text: "Boas práticas, autenticação e proteção de dados." },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container-xl">
        <h2 className="text-3xl text-center font-bold">Projetos</h2>
        <p className="text-slate-600 text-center mt-2">Cases de Sucesso.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {items.map((s, i) => (
            <div key={i} className="card overflow-hidden">
              {/* Imagem maior e quadrada no topo */}
              <img src={s.image} alt={s.title} className="w-full h-48 object-cover" />              
              {/* Conteúdo com padding abaixo da imagem */}
              <div className="p-6 text-center">
                <div className="font-semibold">{s.title}</div>
                <p className="text-sm text-slate-600 mt-2">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
