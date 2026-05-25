const passos = [
  {
    num: '1',
    titulo: 'Briefing Estratégico',
    texto: 'Entendemos seu negócio, público-alvo e objetivos. Nada de site genérico.',
  },
  {
    num: '2',
    titulo: 'Design & Estrutura',
    texto: 'Criamos o layout focado em conversão, com hierarquia visual e calls-to-action estratégicos.',
  },
  {
    num: '3',
    titulo: 'Desenvolvimento',
    texto: 'Código limpo, velocidade máxima e responsivo em todos os dispositivos.',
  },
  {
    num: '4',
    titulo: 'Publicação & Suporte',
    texto: 'Seu site no ar com domínio, hospedagem configurada e suporte pós-entrega.',
  },
]

export default function ComoFunciona() {
  return (
    <section className="py-[90px] px-[6%] bg-white">
      <div className="text-center reveal">
        <div className="font-montserrat font-bold text-[0.72rem] tracking-[3px] uppercase text-azul-claro mb-3">
          Processo Simples
        </div>
        <h2 className="font-montserrat font-black text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.18] text-azul-escuro mb-5">
          Como Funciona?{' '}
          <span className="text-azul-claro">4 Passos</span> e Pronto.
        </h2>
        <p className="text-[1.05rem] leading-[1.7] text-cinza-texto max-w-[600px] mx-auto">
          Do zero ao site publicado e convertendo. Sem complicação, sem enrolação.
        </p>
      </div>

      <div className="como-connector relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-[56px]">
        {passos.map((p) => (
          <div key={p.num} className="reveal text-center px-5 relative z-[1] mb-9 lg:mb-0">
            <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-azul-escuro to-azul-medio flex items-center justify-center mx-auto mb-5 border-[3px] border-dourado shadow-[0_8px_28px_rgba(41,121,200,0.25)]">
              <span className="font-montserrat font-black text-[1.4rem] text-dourado">{p.num}</span>
            </div>
            <h3 className="font-montserrat font-extrabold text-[1rem] text-azul-escuro mb-2">{p.titulo}</h3>
            <p className="text-[0.9rem] text-cinza-texto leading-[1.6]">{p.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
