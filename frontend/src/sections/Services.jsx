const services = [
  { 
    title: "Consultoria", 
    text: "Arquitetura, segurança, performance e boas práticas.",
    image: "/assets/images/project.png" // Caminho corrigido
  },
  { 
    title: "Sites e Landing Pages", 
    text: "Páginas modernas, rápidas e prontas para ranquear.",
    image: "/assets/images/woman_dev.png" // Caminho corrigido
  },
  { 
    title: "Sistemas Web", 
    text: "Aplicações sob medida em React, Node e nuvem.",
    image: "/assets/images/asian_dev.png" // Caminho corrigido
  },
  { 
    title: "Integrações", 
    text: "APIs e automações para conectar seus sistemas.",
    image: "/assets/images/men_dev.png" // Caminho corrigido
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-xl">
        <h2 className="text-3xl text-center font-bold">Como podemos ajudar</h2>
        <p className="text-slate-600 text-center mt-2">Resultados tangíveis com tecnologia.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((s, i) => (
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
