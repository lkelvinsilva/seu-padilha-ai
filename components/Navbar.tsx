import Image from "next/image";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/40
      backdrop-blur-xl
      border-b
      border-amber-500/10
      "
    >
      <div
        className="
        max-w-[1600px]
        mx-auto
        px-4 md:px-6 lg:px-10
        h-20
        flex
        items-center
        justify-between
        "
      >
        {/* Logo + Nome */}
        <div className="flex items-center gap-3 md:gap-4">

          <Image
            src="/logo.png"
            alt="Seu Padilha"
            width={80}
            height={80}
            priority
            style={{
              width: "auto",
              height: "60px",
            }}
          />

          <div>
            <h1 className="text-white text-base md:text-lg font-black tracking-tight">
              Seu Padilha
            </h1>

            <p
              className="
              hidden sm:block
              text-amber-400
              text-[10px]
              md:text-xs
              tracking-[3px]
              uppercase
              "
            >
              Sabor que acende memórias
            </p>
          </div>

        </div>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-8">

          <a
            href="#"
            className="
            text-amber-400
            font-medium
            border-b-2
            border-amber-400
            pb-1
            "
          >
            Início
          </a>

          <a
            href="#cardapio"
            className="
            text-white
            hover:text-amber-400
            transition
            "
          >
            Cardápio
          </a>

          <a
            href="#galeria"
            className="
            text-white
            hover:text-amber-400
            transition
            "
          >
            Galeria
          </a>

          <a
            href="#ia"
            className="
            text-white
            hover:text-amber-400
            transition
            "
          >
            Atendimento
          </a>

          <a
            href="#contato"
            className="
            text-white
            hover:text-amber-400
            transition
            "
          >
            Contato
          </a>

        </nav>

        {/* Botão Desktop */}
        <a
          href="#contato"
          className="
          hidden md:flex
          bg-gradient-to-r
          from-amber-500
          to-orange-600
          px-8
          py-3
          rounded-xl
          text-white
          font-semibold
          shadow-lg
          shadow-orange-500/30
          hover:scale-105
          transition-all
          duration-300
          "
        >
          Fale Conosco
        </a>

        {/* Botão Mobile */}
        <a
          href="#contato"
          className="
          md:hidden
          bg-gradient-to-r
          from-amber-500
          to-orange-600
          px-4
          py-2
          rounded-lg
          text-white
          text-sm
          font-semibold
          whitespace-nowrap
          "
        >
          Contato
        </a>

      </div>
    </header>
  );
}