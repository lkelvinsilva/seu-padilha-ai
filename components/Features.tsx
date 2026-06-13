import { Clock, Moon, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Almoço",
    description: "Segunda a Sábado • 11h às 14h",
  },
  {
    icon: Moon,
    title: "Jantar",
    description: "Quarta a Domingo • 18h às 23h",
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "Rua Zildênia, 1240 • Eusébio",
  },
  {
    icon: Users,
    title: "Ambiente",
    description: "Familiar e Cristão",
  },
];

export default function Features() {
  return (
    <section
      className="
      relative
      bg-gradient-to-b
      from-black
      to-[#0f0f0f]
      py-16
      px-8
      "
    >
      <div className="max-w-7xl mx-auto">

        <div
          className="
          grid
          md:grid-cols-4
          gap-6
          "
        >
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                group
                bg-[#111]
                border
                border-amber-500/15
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-amber-500/40
                hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-amber-500/10
                  flex
                  items-center
                  justify-center
                  mb-5
                  "
                >
                  <Icon
                    size={28}
                    className="text-amber-500"
                  />
                </div>

                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}