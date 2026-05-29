import Link from "next/link";
import {
  Images,
  Package,
  MessageSquare,
  TrendingUp,
  Users,
  Sun,
  ArrowRight,
  PlusCircle,
} from "lucide-react";

const stats = [
  { label: "Total Projects", value: "0", icon: Images, href: "/admin/projects", color: "bg-blue-50 text-blue-600" },
  { label: "Products Listed", value: "0", icon: Package, href: "/admin/products", color: "bg-purple-50 text-purple-600" },
  { label: "New Messages", value: "0", icon: MessageSquare, href: "/admin/messages", color: "bg-orange-50 text-orange-600" },
  { label: "Website Views", value: "—", icon: TrendingUp, href: "#", color: "bg-green-50 text-green-600" },
];

const quickActions = [
  { label: "Add New Project", href: "/admin/projects/new", icon: Images },
  { label: "Add New Product", href: "/admin/products/new", icon: Package },
  { label: "View Messages", href: "/admin/messages", icon: MessageSquare },
  { label: "Edit Services", href: "/admin/settings", icon: Sun },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#0d2137]">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage your website content, projects, products, and customer messages.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ label, value, icon: Icon, href, color }) => (
          <Link
            key={label}
            href={href}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#e8821a]/30 hover:shadow-md transition-all group"
          >
            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-4`}>
              <Icon size={18} />
            </div>
            <div className="text-3xl font-bold text-[#0d2137] mb-1">{value}</div>
            <div className="text-gray-500 text-sm">{label}</div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick actions */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-bold text-[#0d2137] mb-4 flex items-center gap-2">
            <PlusCircle size={18} className="text-[#e8821a]" />
            Quick Actions
          </h2>
          <div className="space-y-2">
            {quickActions.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Icon size={15} className="text-[#e8821a]" />
                  {label}
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-[#e8821a] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Getting started */}
        <div className="bg-[#0d2137] rounded-2xl p-6 text-white">
          <h2 className="font-bold mb-4 flex items-center gap-2">
            <Sun size={18} className="text-[#e8821a]" />
            Getting Started
          </h2>
          <ol className="space-y-3 text-sm text-white/70">
            {[
              "Connect your database (Supabase) in .env",
              "Run: npx prisma db push",
              "Add your project photos to the Projects section",
              "Update products catalog with real pricing",
              "Configure email (Resend) for contact form notifications",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#e8821a] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
