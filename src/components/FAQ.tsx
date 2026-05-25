import { useState } from 'react'

const perguntas = [
  {
    q: 'Quanto tempo leva para meu site ficar pronto?',
    a: 'O prazo médio é de 7 a 15 dias úteis, dependendo do plano e das informações fornecidas. Quanto mais rápido você nos enviar os conteúdos (textos, fotos, informações do negócio), mais rápido entregamos.',
  },
  {
    q: 'Preciso ter domínio e hospedagem para contratar?',
    a: 'Não precisa se preocupar com isso. Indicamos e auxiliamos na contratação do domínio (nome do site) e da hospedagem. Auxiliamos na configuração sem custo adicional.',
  },
  {
    q: 'E se eu não gostar do design?',
    a: 'Antes de desenvolver, criamos um wireframe (rascunho visual) para aprovação. Você tem voz ativa no processo. Além disso, todos os projetos incluem rodadas de revisão para ajustes finos.',
  },
  {
    q: 'Posso atualizar o site depois de pronto?',
    a: 'Sim! Desenvolvemos em plataformas intuitivas onde você mesmo pode fazer pequenas atualizações. Para alterações maiores, oferecemos pacotes de manutenção mensais com valor acessível.',
  },
  {
    q: 'O site vai aparecer no Google automaticamente?',
    a: 'Configuramos o SEO técnico para que o Google indexe seu site corretamente. O posicionamento orgânico (aparecer nas primeiras posições) é um processo gradual que depende de conteúdo, autoridade e tempo. Para resultados mais rápidos, recomendamos tráfego pago.',
  },
]

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null)

  const toggle = (i: number) => setAberto(aberto === i ? null : i)

  return (
    <section className="bg-cinza-suave py-[90px] px-[6%]">
      <div className="text-center reveal">
        <div className="font-montserrat font-bold text-[0.72rem] tracking-[3px] uppercase text-azul-claro mb-3">
          Dúvidas frequentes
        </div>
        <h2 className="font-montserrat font-black text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.18] text-azul-escuro mb-5">
          Antes de Você <span className="text-dourado">Perguntar</span>
        </h2>
      </div>

      <div className="max-w-[760px] mx-auto mt-[52px] space-y-3">
        {perguntas.map((item, i) => (
          <div
            key={i}
            className="reveal bg-white rounded-[10px] overflow-hidden border border-[#E0E8F4]"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-5 bg-transparent border-none cursor-pointer font-montserrat font-bold text-[0.97rem] text-azul-escuro text-left gap-3"
            >
              {item.q}
              <span className={`faq-arrow ${aberto === i ? 'open' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${aberto === i ? 'open' : ''}`}>
              <p className="px-6 pb-5 text-[0.93rem] leading-[1.7] text-cinza-texto">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
