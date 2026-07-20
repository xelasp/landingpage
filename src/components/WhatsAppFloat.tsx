const WA_LINK = 'https://wa.me/5511998293870'

export default function WhatsAppFloat() {
  return (
    <div className="wa-float fixed right-[22px] bottom-[22px] z-[60] flex items-center gap-0">
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative w-[60px] h-[60px] rounded-full bg-[#25d366] text-white grid place-items-center shadow-[0_10px_26px_-6px_rgba(37,211,102,.55),0_3px_10px_rgba(0,0,0,.18)] transition-transform duration-200 hover:scale-105"
        style={{ textDecoration: 'none' }}
      >
        {/* ── Anel de pulso ── */}
        <span
          className="absolute inset-0 rounded-full bg-[#25d366] opacity-55 -z-[1]"
          style={{ animation: 'wa-pulse 2.6s ease-out infinite' }}
        />

        {/* ── Label tooltip ── */}
        <span className="wa-label">Fale no WhatsApp</span>

        {/* ── SVG oficial WhatsApp ── */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          width="33"
          height="33"
        >
          <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.5 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2 .2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.4.5-.3.3c-.1.1-.2.3 0 .5.2.4.8 1.3 1.6 2 1.1.9 1.9 1.2 2.2 1.3.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.5-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.3z" />
        </svg>
      </a>
    </div>
  )
}