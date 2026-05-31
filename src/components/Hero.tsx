export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-[6%] pt-[120px] pb-[80px] relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center max-w-[1200px] w-full relative z-[2]">

        {/* ── Texto ── */}
        <div>
          <div className="hero-badge inline-block bg-[rgba(201,168,76,0.15)] border border-dourado text-dourado font-montserrat font-bold text-[0.72rem] tracking-[2px] uppercase px-4 py-[6px] rounded-full mb-6">
            ⚡ Seu site atual está te custando clientes
          </div>

          <h1 className="hero-h1 font-montserrat font-black text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.12] text-azul-escuro mb-6">
            Seu Negócio Perde Dinheiro Todo Dia
            <span className="text-dourado"> Sem um Site que Converte.</span>
            <span className="block text-azul-claro text-[0.85em]">Isso muda agora.</span>
          </h1>

          <p className="hero-sub text-[1.1rem] leading-[1.7] text-cinza-texto mb-9">
            Se o seu site demora pra carregar, não aparece no Google ou simplesmente{' '}
            <strong className="text-azul-claro font-bold">não existe</strong> — seus concorrentes estão
            faturando no seu lugar. Criamos sites estratégicos que transformam visitantes em compradores.
          </p>

          <div className="hero-ctas flex gap-4 flex-wrap">
            <a
              href="#contato"
              className="font-montserrat font-extrabold text-[0.95rem] no-underline bg-gradient-to-br from-dourado to-dourado-claro text-azul-escuro px-8 py-4 rounded-[8px] transition-all duration-200 shadow-[0_6px_24px_rgba(201,168,76,0.35)] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(201,168,76,0.5)] inline-flex items-center gap-2"
            >
              🚀 Quero Meu Site Agora
            </a>
            <a
              href="#contato"
              className="font-montserrat font-bold text-[0.9rem] no-underline border-2 border-azul-claro text-azul-escuro px-7 py-[14px] rounded-[8px] transition-all duration-200 hover:border-azul-escuro hover:bg-[rgba(41,121,200,0.08)]"
            >
              Falar Agora →
            </a>
          </div>
        </div>

        {/* ── Mockup Browser ── */}
        <div className="hero-visual relative hidden md:block">
          <div className="relative">
            <div className="badge-live absolute -top-[14px] -right-[14px] bg-[#27C93F] text-white font-montserrat font-black text-[0.7rem] tracking-[1px] px-[14px] py-[6px] rounded-full shadow-[0_4px_14px_rgba(39,201,63,0.4)] z-10">
              ● ONLINE
            </div>

            <div className="bg-[#0E2D5E] rounded-[14px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)]">
              {/* Barra do browser */}
              <div className="bg-azul-escuro px-4 py-3 flex items-center gap-2 border-b border-[rgba(255,255,255,0.06)]">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F56]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#27C93F]" />
                <div className="flex-1 bg-[rgba(255,255,255,0.07)] rounded-[5px] h-[22px] ml-[10px] flex items-center px-[10px]">
                  <span className="text-[0.7rem] text-[rgba(255,255,255,0.4)] font-lato">https://seusite.com.br</span>
                </div>
              </div>

              {/* Conteúdo mockup */}
              <div className="p-6 min-h-[280px]">
                <div className="bg-gradient-to-br from-azul-medio to-azul-claro rounded-[8px] p-5 mb-4">
                  <div className="h-[14px] bg-[rgba(255,255,255,0.85)] rounded w-[70%] mb-2" />
                  <div className="h-[10px] bg-[rgba(201,168,76,0.8)] rounded w-[50%]" />
                  <div className="h-[30px] bg-dourado rounded-[6px] w-[38%] mt-[14px]" />
                </div>

                <div className="grid grid-cols-3 gap-[10px] mb-4">
                  {[
                    { num: '3x', lbl: 'Conversão' },
                    { num: '1,8s',  lbl: 'Velocidade' },
                    { num: '#1',    lbl: 'Google' },
                  ].map((s) => (
                    <div key={s.lbl} className="bg-[rgba(41,121,200,0.15)] border border-[rgba(41,121,200,0.3)] rounded-[8px] p-[10px] text-center">
                      <div className="font-montserrat font-black text-[1.1rem] text-dourado-claro">{s.num}</div>
                      <div className="text-[0.65rem] text-[rgba(255,255,255,0.5)] mt-0.5">{s.lbl}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-[10px]">
                  <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-[8px] h-[60px]" />
                  <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-[8px] h-[60px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
