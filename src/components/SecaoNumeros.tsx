const numeros = [
  { num: '✔', sup: '', lbl: 'Estudos mostram que a aparência e a experiência do site são fatores decisivos para a percepção de credibilidade de uma empresa' },
  { num: '53', sup: '%', lbl: 'dos usuários móveis abandonam um site que leva mais de 3 segundos para carregar' },
  { num: '81', sup: '%', lbl: 'dos consumidores pesquisam online antes de tomar uma decisão de compra' },
  { num: '🚀',  sup: '', lbl: 'Um design profissional aumenta significativamente a confiança e as taxas de conversão dos visitantes' },
]

export default function SecaoNumeros() {
  return (
    <section className="bg-white py-[90px] px-[6%]">
      <div className="text-center reveal">
        <div className="font-montserrat font-bold text-[0.72rem] tracking-[3px] uppercase text-azul-claro mb-3">
          Dados que importam
        </div>
        <h2 className="font-montserrat font-black text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.18] text-azul-escuro mb-5">
          Por que Ter um Site <span className="text-dourado">Profissional</span> é Urgente
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[52px]">
        {numeros.map((n) => (
          <div
            key={n.lbl}
            className="reveal text-center py-9 px-5 bg-cinza-suave rounded-[14px] shadow-[0_4px_20px_rgba(10,31,68,0.07)] border-t-4 border-dourado transition-all duration-[250ms] hover:-translate-y-1"
          >
            <div className="font-montserrat font-black text-[3rem] text-azul-claro leading-none">
              {n.num}
              <sup className="text-[1.4rem] text-dourado">{n.sup}</sup>
            </div>
            <div className="text-[0.9rem] text-cinza-texto mt-2 font-bold">{n.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
