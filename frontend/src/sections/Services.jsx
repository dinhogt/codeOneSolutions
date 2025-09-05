import { useState, useEffect } from "react";

export default function Services() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetch('/data/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(() => setServices([]));
  }, []);

  return (
    <>
      <section id="services" className="py-10">
        <div className="container-xl">
          <h2 className="text-3xl text-center font-bold text-accent">Como podemos ajudar</h2>
          <p className="text-slate-600 text-center mt-2">Realizamos projetos end-to-end com foco em resultados.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {services.map((s, i) => (
              <div
                key={s.id || i}
                className="card overflow-hidden cursor-pointer"
                onClick={() => setSelectedService(s)}
              >
                <img src={s.image} alt={s.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <div className="font-semibold text-accent">{s.title}</div>
                  <p className="text-sm text-slate-600 mt-2">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar à esquerda */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-md bg-white z-50 shadow-2xl p-8 overflow-y-auto transition-transform duration-300 ease-in-out ${
          selectedService ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ pointerEvents: selectedService ? 'auto' : 'none' }}
      >
        {selectedService && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-accent">{selectedService.title}</h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-2xl hover:text-accent"
              >
                &times;
              </button>
            </div>
            <img src={selectedService.image} alt={selectedService.title} className="aspect-video w-full rounded-lg object-cover mb-6" />
            <p className="text-slate-700 leading-relaxed">{selectedService.details}</p>
          </>
        )}
      </div>
      {/* Overlay para fechar ao clicar fora */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${selectedService ? 'bg-black/60' : 'bg-transparent pointer-events-none'}`}
        onClick={() => setSelectedService(null)}
      ></div>
    </>
  );
}
