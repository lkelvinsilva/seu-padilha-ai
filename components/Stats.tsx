import {
  Star,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-black px-8 pb-20">

      <div
        className="
        max-w-7xl
        mx-auto
        border
        border-amber-500/20
        rounded-3xl
        bg-zinc-950/70
        backdrop-blur-md
        "
      >

        <div className="grid md:grid-cols-4">

          <div className="p-10 border-b md:border-b-0 md:border-r border-amber-500/10">

            <Users className="text-amber-500 mb-4" />

            <h3 className="text-white text-3xl font-bold">
              17,6K+
            </h3>

            <p className="text-zinc-400">
              Seguidores
            </p>

          </div>

          <div className="p-10 border-b md:border-b-0 md:border-r border-amber-500/10">

            <Star className="text-amber-500 mb-4" />

            <h3 className="text-white text-3xl font-bold">
              5⭐
            </h3>

            <p className="text-zinc-400">
              Avaliação Google
            </p>

          </div>

          <div className="p-10 border-b md:border-b-0 md:border-r border-amber-500/10">

            <BadgeCheck className="text-amber-500 mb-4" />

            <h3 className="text-white text-3xl font-bold">
              100%
            </h3>

            <p className="text-zinc-400">
              Ambiente Familiar
            </p>

          </div>

          <div className="p-10 flex flex-col justify-center">

            <span className="text-amber-400 uppercase tracking-[3px] text-sm">
              Pronto para viver essa experiência?
            </span>

            <h2 className="text-white text-3xl font-bold mt-3">
              Faça seu pedido agora!
            </h2>

            <button
              className="
              mt-6
              bg-gradient-to-r
              from-amber-500
              to-orange-600
              px-6
              py-4
              rounded-xl
              text-white
              font-semibold
              "
            >
              Fazer Pedido 
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}