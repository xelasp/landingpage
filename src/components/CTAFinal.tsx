const WA_LINK = 'https://wa.me/5511998293870?text=Olá!%20Quero%20criar%20meu%20site%20que%20converte.'

export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="cta-dots bg-gradient-to-br from-azul-escuro to-[#0A2550] text-center py-[90px] px-[6%] relative overflow-hidden"
    >
      <div className="relative z-[1] max-w-[700px] mx-auto">
        <div className="font-montserrat font-bold text-[0.72rem] tracking-[3px] uppercase text-dourado mb-4">
          Não espere mais
        </div>

        <h2 className="font-montserrat font-black text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.18] text-white mb-5">
          Cada Dia de Atraso é um Dia que Você{' '}
          <span className="text-azul-brilho">Perde para a Concorrência</span>
        </h2>

        <p className="text-[1.05rem] text-[rgba(255,255,255,0.72)] mb-10 leading-[1.7]">
          Enquanto você lê isso, alguém está pesquisando no Google o serviço que você oferece —
          e encontrando o <strong className="text-dourado-claro">seu concorrente</strong>. Vamos mudar
          isso agora. Sem compromisso, sem enrolação.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="font-montserrat font-extrabold text-[1rem] no-underline bg-gradient-to-br from-dourado to-dourado-claro text-azul-escuro px-10 py-[18px] rounded-[8px] inline-flex items-center gap-2 transition-all duration-200 shadow-[0_6px_24px_rgba(201,168,76,0.35)] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(201,168,76,0.5)]"
        >
          🟢 Falar com Especialista Agora
        </a>

        <div className="inline-flex items-center gap-[10px] mt-7 text-[0.88rem] text-[rgba(255,255,255,0.55)]">
          <span className="text-[1.2rem]">🔒</span>
          Consulta gratuita e sem compromisso · Resposta em até 2 horas
        </div>
      </div>
    </section>
  )
}
