const dores = [
  {
    icon: '🐌',
    titulo: 'Meu site demora uma eternidade',
    texto: 'Sabia que 53% das pessoas abandonam um site que demora mais de 3 segundos para carregar? Cada segundo lento é receita jogada fora.',
  },
  {
    icon: '📉',
    titulo: 'Tenho visitas mas não tenho vendas',
    texto: 'Tráfego sem conversão é custo, não investimento. Um layout confuso ou sem CTA estratégico mata qualquer chance de fechar negócio.',
  },
  {
    icon: '🕵️',
    titulo: 'Não apareço nem no Google',
    texto: 'Se você não aparece nas buscas, simplesmente não existe para quem mais importa: o cliente que está procurando exatamente o que você oferece.',
  },
  {
    icon: '📵',
    titulo: 'Nunca tive um site',
    texto: 'Em 2025, não ter presença digital é como ter uma loja fechada 24h por dia. Seus concorrentes estão abertos o tempo todo — você não.',
  },
  {
    icon: '🤦',
    titulo: 'Meu site parece amador',
    texto: 'Um design desatualizado comunica: "não confiamos na nossa própria imagem". E se você não confia na sua, por que o cliente confiaria?',
  },
  {
    icon: '📱',
    titulo: 'Não funciona no celular',
    texto: 'Mais de 70% dos acessos vêm do smartphone. Se o seu site quebra no mobile, você está perdendo a maioria dos seus clientes potenciais.',
  },
]

export default function SecaoDor() {
  return (
    <section className="bg-cinza-suave py-[90px] px-[6%]">
      <div className="text-center reveal">
        <div className="font-montserrat font-bold text-[0.72rem] tracking-[3px] uppercase text-azul-claro mb-3">
          Você se identifica?
        </div>
        <h2 className="font-montserrat font-black text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.18] text-azul-escuro mb-5">
          Qual é a Sua <span className="text-dourado">Dor</span> Agora?
        </h2>
        <p className="text-[1.05rem] leading-[1.7] text-cinza-texto max-w-[600px] mx-auto">
          Reconhecemos o problema antes de apresentar a solução. Porque o certo é resolver, não enrolar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-[52px]">
        {dores.map((d) => (
          <div
            key={d.titulo}
            className="reveal bg-white rounded-[14px] p-8 border-l-4 border-urgencia shadow-[0_4px_24px_rgba(10,31,68,0.07)] transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(10,31,68,0.12)]"
          >
            <div className="text-[2rem] mb-4">{d.icon}</div>
            <h3 className="font-montserrat font-extrabold text-[1.05rem] text-azul-escuro mb-[10px]">
              {d.titulo}
            </h3>
            <p className="text-[0.95rem] leading-[1.65] text-cinza-texto">{d.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
