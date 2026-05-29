import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  image?: string;
}

export default function PageHero({ title, subtitle, breadcrumb, image }: PageHeroProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0d2137] overflow-hidden">
      {/* Background */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2137] via-[#0d2137]/90 to-[#0d2137]/70" />
      {/* Orange bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e8821a] via-[#f5c842] to-[#e8821a]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#e8821a] bg-[#e8821a]/10 rounded-full mb-4">
            {breadcrumb}
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
