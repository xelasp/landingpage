export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6%] py-[18px] bg-[rgba(10,31,68,0.97)] backdrop-blur-md border-b border-[rgba(201,168,76,0.25)]">
      <div className="font-montserrat font-black text-[1.35rem] text-white tracking-tight">
        Lexsan <span className="text-dourado">Digital</span>
      </div>
      <a
        href="#contato"
        className="font-montserrat font-bold text-[0.85rem] tracking-wide no-underline bg-dourado text-azul-escuro px-[22px] py-[10px] rounded-[6px] transition-all duration-200 hover:bg-dourado-claro hover:-translate-y-px"
      >
        Falar Agora →
      </a>
    </nav>
  )
}
