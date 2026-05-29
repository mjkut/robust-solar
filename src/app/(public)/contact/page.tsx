import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Robust Solar & Energy Solutions. Request a quote, ask about our services, or book a consultation.",
};

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+27 79 264 5562"],
    action: { href: "tel:+27 79 264 5562", label: "Call Now" },
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["robustsolares@gmail.com"],
    action: { href: "mailto:robustsolares@gmail.com", label: "Send Email" },
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["ERF 36 Olga Kirsch", "Street, Mullerstuine, Vanderbijlpark", "South Africa"],
    action: {
      href: "https://maps.google.com/?q=ERF+36+Olga+Kirsch+Street+Mullerstuine+Vanderbijlpark+South+Africa",
      label: "Get Directions",
    },
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Fri: 8:00 AM – 5:00 PM", "Saturday: 9:00 AM – 1:00 PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get a free quote, book a consultation, or just ask us a question. We respond within 24 hours."
        breadcrumb="Get in Touch"
        image="/images/projects/hero-bg.jpg"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left: Contact info + WhatsApp */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0d2137] mb-3">
                Let&apos;s Talk Solar
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you&apos;re looking for a full solar installation, need a UPS for load shedding,
                or just have questions — we&apos;re here to help. Reach out and we&apos;ll guide you to
                the right solution.
              </p>

              {/* WhatsApp prominent CTA */}
              <a
                href="https://wa.me/2779645562?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20solar%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-green-50 border border-green-200 rounded-2xl hover:bg-green-100 transition-colors mb-8 group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-white" size={22} />
                </div>
                <div>
                  <div className="font-bold text-green-800">Chat on WhatsApp</div>
                  <div className="text-green-600 text-sm">
                    Fastest way to reach us — typically reply within minutes
                  </div>
                </div>
              </a>

              {/* Contact details */}
              <div className="space-y-6">
                {contactDetails.map(({ icon: Icon, title, lines, action }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e8821a]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#e8821a]" size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0d2137] text-sm mb-1">{title}</div>
                      {lines.map((line) => (
                        <div key={line} className="text-gray-600 text-sm">
                          {line}
                        </div>
                      ))}
                      {action && (
                        <a
                          href={action.href}
                          target={action.href.startsWith("http") ? "_blank" : undefined}
                          rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[#e8821a] text-sm font-semibold mt-1.5 inline-block hover:underline"
                        >
                          {action.label} →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Countries note */}
              <div className="mt-8 p-5 bg-[#0d2137] rounded-2xl text-white">
                <div className="text-sm font-semibold text-[#e8821a] mb-2">We Operate In</div>
                <div className="flex flex-wrap gap-2">
                  {["🇿🇼 Zimbabwe", "🇿🇦 South Africa", "🇱🇸 Lesotho", "🇸🇿 Swaziland"].map(
                    (c) => (
                      <span key={c} className="text-white/70 text-xs bg-white/10 px-3 py-1 rounded-full">
                        {c}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#0d2137] mb-1">Send Us a Message</h3>
              <p className="text-gray-500 text-sm mb-6">
                Fill in the form and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-gray-200 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.9792432388!2d27.8333!3d-26.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDe-Forest+Street+Vanderbijlpark!5e0!3m2!1sen!2sza!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Robust Solar Location"
          className="grayscale opacity-70"
        />
      </section>
    </>
  );
}
