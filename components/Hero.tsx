import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Fundo */}
      <Image
        src="/carne_hero.png"
        alt="Churrasqueira"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Glow laranja */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_70%_40%,rgba(251,146,60,0.25),transparent_35%)]
        "
      />

      {/* Glow superior */}
      <div
        className="
        absolute
        -top-40
        -left-40
        w-[800px]
        h-[800px]
        rounded-full
        bg-orange-500/10
        blur-[200px]
        "
      />

      <div className="relative z-10 mt-12 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[45%_55%] items-center min-h-screen">
          {/* TEXTO */}
          <div>
            <span
              className="
              text-amber-400
              uppercase
              tracking-[6px]
              text-sm
              font-semibold
              "
            >
              Sabor • Fé • Família
            </span>

            <h1
              className="
              font-[family-name:var(--font-bebas)]
              text-[70px]
              md:text-[170px]
              lg:text-[140px]
              leading-[0.88]
              uppercase
              text-white
              drop-shadow-2xl
              "
            >
              Seu Padilha
            </h1>

            <h2
              className="
              font-[family-name:var(--font-script)]
              text-amber-500
              text-[55px]
              md:text-[70px]
              lg:text-[80px]
              leading-none
              mt-2
              "
            >
              Sabor que acende memórias
            </h2>

            <p
              className="
              mt-8
              text-zinc-200
              font-serif
              text-lg
              md:text-xl
              max-w-xl
              leading-relaxed
              "
            >
              O primeiro restaurante cristão do Eusébio.
              Mais que um restaurante, um lugar para reunir
              a família, compartilhar momentos e viver a
              experiência da brasa.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button
                className="
                bg-gradient-to-r
                from-amber-500
                to-orange-600
                text-white
                font-semibold
                px-10
                py-5
                rounded-xl
                shadow-xl
                shadow-orange-500/30
                hover:scale-105
                transition
                "
              >
                Ver Cardápio
              </button>

          <a
            href="#chat"
            className="
            border
            border-amber-500
            px-10
            py-5
            rounded-xl
            text-white
            hover:bg-amber-500
            hover:text-black
            transition-all
            duration-300
            inline-block
            "
          >
            Fazer Pedido com IA
          </a>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative flex justify-end">
            <div
              className="
              absolute
              inset-0
              bg-orange-500/20
              blur-[150px]
              rounded-full
              "
            />

           
          </div>
        </div>
      </div>

      {/* Fade inferior */}
      <div
        className="
        absolute
        bottom-0
        left-0
        right-0
        h-40
        bg-gradient-to-t
        from-black
        to-transparent
        "
      />
    </section>
  );
}