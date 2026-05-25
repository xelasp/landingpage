const WA_LINK = 'https://wa.me/5511998293870'

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      title="Falar no WhatsApp"
      className="whatsapp-float fixed bottom-[30px] right-[30px] z-[200] w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_28px_rgba(37,211,102,0.45)] no-underline text-[1.7rem] transition-transform duration-200 hover:scale-110"
    >
      💬
    </a>
  )
}
