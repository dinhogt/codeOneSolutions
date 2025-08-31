export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container-xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-center text-accent">Sobre a Code One Solutions</h2>
          <div className="mt-6 space-y-6 font-medium text-justify">
            <p>
              <strong>Code One Solutions</strong> é uma empresa de tecnologia dedicada a transformar negócios por meio da inovação digital. Nossa missão é promover a transformação digital com soluções tecnológicas que aumentem a eficiência, agilidade e confiabilidade dos processos.
            </p>
            <p>
              À frente da nossa visão está <strong>Janderson Guilherme</strong>, especialista em Engenharia de Software, Dados e Arquitetura de Soluções, com sólida atuação na transformação digital do setor de saúde.
            </p>
            <p>
              Com anos de experiência liderando equipes de tecnologia, Janderson esteve à frente de projetos que integraram Cloud, Inteligência Artificial e metodologias ágeis para criar soluções digitais seguras, escaláveis e focadas no usuário.
            </p>
            <p>
              Entre suas principais contribuições estão o desenvolvimento de prontuários eletrônicos, portais e aplicativos mobile, além da implementação de modelos de analytics e dashboards inteligentes que apoiam a tomada de decisão em ambientes hospitalares.
            </p>
            <p>
              Sua missão é clara: impulsionar negócios e instituições por meio de uma tecnologia robusta, inovadora e humanizada, conectando eficiência operacional com impacto real para pessoas.
            </p>
          </div>
        </div>
        <div className="card p-6">
          <div className="card p-0 rounded-2xl bg-slate-100 flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_0_20px_#5e17eb66]">
            <img src="/assets/images/founder.png" alt="Janderson Guilherme (Founder)" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
