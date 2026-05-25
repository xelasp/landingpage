const beneficios = [
  {
    icon: '⚡',
    titulo: 'Velocidade Extrema',
    texto: 'Sites otimizados para carregar em menos de 2 segundos. Google ama, usuário ama, suas vendas aumentam.',
  },
  {
    icon: '🎯',
    titulo: 'Copy Persuasiva',
    texto: 'Textos estratégicos que falam direto com a dor do seu cliente e conduzem à ação. Psicologia de vendas aplicada.',
  },
  {
    icon: '📱',
    titulo: '100% Responsivo',
    texto: 'Perfeito em celular, tablet e desktop. Seu cliente acessa de onde estiver e tem a melhor experiência.',
  },
  {
    icon: '🔍',
    titulo: 'SEO na Base',
    texto: 'Configuramos o básico do SEO técnico para que o Google encontre e indexe seu site corretamente.',
  },
  {
    icon: '🔒',
    titulo: 'Segurança SSL',
    texto: 'Certificado de segurança ativo. Seu site com cadeado verde transmite confiança e melhora o ranqueamento.',
  },
  {
    icon: '💬',
    titulo: 'Integração WhatsApp',
    texto: 'Botão flutuante do WhatsApp integrado para que o cliente entre em contato em 1 clique — conversão imediata.',
  },
]

export default function SecaoBeneficios() {
  return (
    <section className="bg-cinza-suave py-[90px] px-[6%] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal">
          <div className="font-montserrat font-bold text-[0.72rem] tracking-[3px] uppercase text-azul-claro mb-3">
            O que você recebe
          </div>
          <h2 className="font-montserrat font-black text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.18] text-azul-escuro mb-5">
            Tudo que Seu Site Precisa para{' '}
            <span className="text-dourado">Vender de Verdade</span>
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-cinza-texto max-w-[600px]">
            Não entregamos páginas. Entregamos máquinas de conversão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[52px]">
          {beneficios.map((b) => (
            <div
              key={b.titulo}
              className="bene-card-bar reveal bg-white border border-[#E0E8F4] rounded-[14px] p-[30px_26px] relative overflow-hidden shadow-[0_4px_24px_rgba(10,31,68,0.07)] transition-all duration-[250ms] hover:shadow-[0_12px_36px_rgba(10,31,68,0.12)] hover:-translate-y-1"
            >
              <div className="text-[2rem] mb-[14px]">{b.icon}</div>
              <h3 className="font-montserrat font-extrabold text-[1.05rem] text-azul-escuro mb-2">{b.titulo}</h3>
              <p className="text-[0.93rem] leading-[1.65] text-cinza-texto">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
