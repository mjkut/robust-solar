import { Heart, Zap, Leaf, Star, Users, Trophy } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description:
      "Energy solutions are our passion. We are here to stay and it reflects in every installation we complete.",
  },
  {
    icon: Star,
    title: "Commitment to Quality",
    description:
      "We take great care to provide best solutions and offer free support services. Professional workmanship is our trail.",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description:
      "Smart modern equipment, IoT, and cloud-based solutions. We constantly stay ahead to deliver the best.",
  },
  {
    icon: Leaf,
    title: "Environment First",
    description:
      "We're driven to reduce greenhouse gas emissions through renewable and sustainable energy generation solutions.",
  },
  {
    icon: Users,
    title: "People-Centred",
    description:
      "Our model is designed to meet the requirements of clients of different affordability. One happy client leads to the next.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description:
      "Since 2015, hundreds of successful installations across Southern Africa. Our work speaks for itself.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0d2137] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-[#e8821a] to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#e8821a]/5 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#e8821a] bg-[#e8821a]/10 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built on Values That Last
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Robust Solar & Energy Solutions is a fast-growing enterprise with roots
            traceable to 2015. Energy solutions are our passion.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#e8821a]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#e8821a]/20 group-hover:bg-[#e8821a] transition-colors flex items-center justify-center mb-5">
                <Icon className="text-[#e8821a] group-hover:text-white transition-colors" size={22} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
