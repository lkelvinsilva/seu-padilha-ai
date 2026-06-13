import Image from "next/image";
const items = [
  {
    title: "BURGERS",
    image: "/burguer.png",
    desc: "Artesanais e irresistíveis"
  },
  {
    title: "ESPETINHOS",
    image: "/espetinho.png",
    desc: "Na brasa, com sabor único"
  },
  {
    title: "CARNES",
    image: "/carne.png",
    desc: "Cortes selecionados"
  },
  {
    title: "PETISCOS",
    image: "/petisco.png",
    desc: "Perfeitos para compartilhar"
  }
];

export default function Menu() {
  return (
    <section
      id="cardapio"
      className="relative bg-black py-32 px-8 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/5 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center">

          <span className="text-amber-500 uppercase tracking-[4px]">
            Nosso Cardápio
          </span>

          <h2 className="text-5xl md:text-6xl text-white mt-4 font-bold">
            Uma experiência completa
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {items.map((item) => (
            <div
              key={item.title}
              className="
                group
                bg-[#111]
                border
                border-amber-500/20
                rounded-3xl
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-amber-500
                hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]
              "
            >
              <div className="overflow-hidden">

                <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="
                    h-72
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                "
                />

              </div>

              <div className="p-6 text-center">

                <h3 className="text-white text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-2">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-14">

          <button
            className="
              border
              border-amber-500/30
              text-amber-400
              px-8
              py-4
              rounded-xl
              hover:bg-amber-500
              hover:text-black
              transition-all
              duration-300
            "
          >
            Ver Cardápio Completo →
          </button>

        </div>

      </div>
    </section>
  );
}