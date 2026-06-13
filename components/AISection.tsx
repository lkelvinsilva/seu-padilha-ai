import {
  MessageCircle,
  MapPin,
  Clock3,
  Calendar,
  Flame,
} from "lucide-react";

export default function AISection() {
  return (
    <section
      id="ia"
      className="bg-black py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[1fr_120px_420px_180px] gap-8 items-center">

          {/* Texto */}
          <div>

            <span className="text-amber-400 uppercase tracking-[3px] text-sm">
              Atendimento Inteligente 24h
            </span>

            <h2 className="text-white text-6xl font-bold mt-4 leading-tight">
              Converse com nossa
              <br />
              atendente virtual
            </h2>

            <p className="text-zinc-400 mt-6 max-w-md text-lg">
              Peça, reserve, tire dúvidas e conheça
              nosso cardápio de forma rápida e prática.
            </p>

            <ul className="space-y-4 mt-8">

              <li className="flex items-center gap-3 text-zinc-300">
                <MessageCircle
                  size={18}
                  className="text-amber-500"
                />
                Pedidos via WhatsApp
              </li>

              <li className="flex items-center gap-3 text-zinc-300">
                <Calendar
                  size={18}
                  className="text-amber-500"
                />
                Reservas de mesa
              </li>

              <li className="flex items-center gap-3 text-zinc-300">
                <Flame
                  size={18}
                  className="text-amber-500"
                />
                Informações sobre cardápio
              </li>

              <li className="flex items-center gap-3 text-zinc-300">
                <Clock3
                  size={18}
                  className="text-amber-500"
                />
                Horários e localização
              </li>

            </ul>

            <button
              className="
              mt-10
              bg-gradient-to-r
              from-amber-500
              to-orange-600
              px-8
              py-4
              rounded-xl
              text-white
              font-semibold
              hover:scale-105
              transition
              "
            >
              EXPERIMENTAR AGORA
            </button>

          </div>

          {/* Botões pequenos */}
          <div className="space-y-4">

            <button className="w-full border border-amber-500/20 bg-zinc-900 rounded-xl py-4 text-white">
              🍔 Ver cardápio
            </button>

            <button
              className="
              w-full
              border
              border-amber-500/20
              bg-zinc-900
              rounded-xl
              py-4
              text-white
              flex
              items-center
              justify-center
              gap-2
              "
            >
              <MapPin size={18} className="text-amber-500" />
              Localização
            </button>

            <button className="w-full border border-amber-500/20 bg-zinc-900 rounded-xl py-4 text-white">
              🕒 Horários
            </button>

          </div>

          {/* Chat */}
          <div
            className="
            bg-zinc-950
            border
            border-amber-500/20
            rounded-3xl
            overflow-hidden
            "
          >
            <div className="p-5 border-b border-white/10">

              <h3 className="text-white font-semibold">
                Atendente Seu Padilha
              </h3>

              <span className="text-green-500 text-sm">
                Online agora
              </span>

            </div>

            <div className="p-5 space-y-4">

              <div className="bg-zinc-800 p-4 rounded-2xl text-white max-w-xs">
                Olá! 👋
                <br />
                Seja bem-vindo ao Seu Padilha.
                <br />
                Como posso ajudar hoje?
              </div>

              <div className="bg-amber-600 p-4 rounded-2xl text-white ml-auto max-w-xs">
                Quero fazer uma reserva
                para 4 pessoas
              </div>

              <div className="bg-zinc-800 p-4 rounded-2xl text-white max-w-xs">
                Perfeito! 🙏
                <br />
                Para qual dia deseja fazer a reserva?
              </div>

            </div>
          </div>

          {/* Ações laterais */}
          <div className="space-y-4">

            <button className="w-full bg-zinc-900 border border-amber-500/20 rounded-xl py-4 text-white">
              📅 Reservar mesa
            </button>

            <button className="w-full bg-zinc-900 border border-amber-500/20 rounded-xl py-4 text-white">
              🔥 Promoções
            </button>

            <button className="w-full bg-zinc-900 border border-amber-500/20 rounded-xl py-4 text-white">
              💬 Falar com atendente
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}