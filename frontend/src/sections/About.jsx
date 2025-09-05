export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container-xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-center text-accent mb-4">Sobre a Code One Solutions</h2>
          <div className="mt-6 space-y-6 font-medium text-justify">
            <p>
              A Code One Solutions é uma empresa de tecnologia especializada em impulsionar a transformação digital de negócios e instituições. Nosso propósito é desenvolver soluções inovadoras que aumentem a eficiência, a agilidade e a confiabilidade dos processos, conectando tecnologia de ponta a resultados reais.
            </p>
            <p>
              Com experiência consolidada em engenharia de software e arquitetura de soluções, atuamos no desenvolvimento de sistemas robustos, escaláveis e centrados no usuário. Nossa atuação abrange desde a criação de plataformas web e mobile, passando por prontuários eletrônicos, portais corporativos e aplicações em nuvem, até a implementação de modelos avançados de analytics e dashboards inteligentes para apoiar a tomada de decisão.
            </p>
            <p>
              Aliamos metodologias ágeis, inteligência artificial e infraestrutura em nuvem para entregar soluções que atendem às necessidades de diferentes setores, com destaque para o setor da saúde. Nossos projetos têm como objetivo transformar a operação de empresas e instituições, promovendo inovação com segurança, escalabilidade e impacto positivo para pessoas.
            </p>
            <p>
              Na Code One Solutions, acreditamos que a tecnologia deve ser mais do que uma ferramenta: deve ser uma ponte entre eficiência operacional e valor humano.
            </p>
          </div>
        </div>
        <div className="card p-6">
          <div className="card p-0 rounded-2xl bg-slate-100 flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_0_20px_#5e17eb66]">
            <img src="/assets/images/men_dev.png" alt="Code One Solutions" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
