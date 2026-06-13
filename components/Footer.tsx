

export default function Footer() {
  return (
    <footer
  className="
  bg-black
  border-t
  border-amber-500/10
  py-12
  px-8
  "
>
  <div className="max-w-7xl mx-auto justify- center items-center gap-16 md:gap-32">

    <div className="grid md:grid-cols-5 gap-8 items-start">


      <div>
        <h4 className="text-amber-400 mb-4">
          Institucional
        </h4>

        <ul className="space-y-2 text-zinc-400 text-sm">
          <li>Sobre Nós</li>
          <li>Nossa História</li>
          <li>Valores</li>
        </ul>
      </div>

      <div>
        <h4 className="text-amber-400 mb-4">
          Cardápio
        </h4>

        <ul className="space-y-2 text-zinc-400 text-sm">
          <li>Burgers</li>
          <li>Espetinhos</li>
          <li>Carnes</li>
          <li>Petiscos</li>
        </ul>
      </div>

      <div>
        <h4 className="text-amber-400 mb-4">
          Atendimento
        </h4>

        <ul className="space-y-2 text-zinc-400 text-sm">
          <li>WhatsApp</li>
          <li>Reservas</li>
          <li>Horários</li>
        </ul>
      </div>

      <div>
        <h4 className="text-amber-400 mb-4">
          Visite-nos
        </h4>

        <ul className="space-y-2 text-zinc-400 text-sm">
          <li>Rua Zildênia, 1240</li>
          <li>Eusébio - CE</li>
          <li>Seg-Sáb 11h-14h</li>
          <li>Qua-Dom 18h-23h</li>
        </ul>
      </div>

    </div>

    <div
      className="
      border-t
      border-amber-500/10
      mt-10
      pt-6
      text-zinc-500
      text-sm
      "
    >
      © 2026 Seu Padilha. Todos os direitos reservados.
    </div>

  </div>
</footer>
  );
}