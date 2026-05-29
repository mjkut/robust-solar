import { Mail, Phone, Clock, Tag, Inbox } from "lucide-react";

// Will be replaced with real DB data once DATABASE_URL is configured
const mockMessages = [
  {
    id: "1",
    name: "John Dube",
    email: "john@example.com",
    phone: "+27 83 123 4567",
    type: "quote",
    subject: "5kW Solar System for my home",
    message: "Hi, I need a quote for a 5kW solar system for my 4-bedroom house in Johannesburg. I use about 30 units per day.",
    status: "new",
    createdAt: "2026-05-13T10:30:00",
  },
  {
    id: "2",
    name: "Tendai Moyo",
    email: "tendai@example.com",
    phone: "+263 77 123 4567",
    type: "installation",
    subject: "Solar pump for my farm",
    message: "I need a solar pump system for irrigation on my farm in Mazowe. The borehole is about 40m deep.",
    status: "read",
    createdAt: "2026-05-12T15:00:00",
  },
];

const statusColors: Record<string, string> = {
  new: "bg-green-100 text-green-700",
  read: "bg-blue-100 text-blue-700",
  replied: "bg-purple-100 text-purple-700",
  closed: "bg-gray-100 text-gray-500",
};

const typeLabels: Record<string, string> = {
  quote: "Quote Request",
  installation: "Installation",
  product: "Product Inquiry",
  maintenance: "Maintenance",
  general: "General",
};

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0d2137]">Messages</h1>
          <p className="text-gray-500 text-sm mt-1">Customer inquiries and contact form submissions</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Inbox size={16} />
          {mockMessages.filter((m) => m.status === "new").length} new
        </div>
      </div>

      {/* Message list */}
      <div className="space-y-4">
        {mockMessages.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
            <Inbox className="text-gray-300 mx-auto mb-3" size={36} />
            <p className="text-gray-500">No messages yet</p>
          </div>
        ) : (
          mockMessages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-2xl border border-gray-100 hover:border-[#e8821a]/20 p-6 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-semibold text-[#0d2137]">{msg.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[msg.status]}`}>
                      {msg.status}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 font-medium">
                      {typeLabels[msg.type]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800">{msg.subject}</h3>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs flex-shrink-0">
                  <Clock size={11} />
                  {new Date(msg.createdAt).toLocaleDateString()}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{msg.message}</p>

              <div className="flex items-center gap-5 text-xs text-gray-500">
                <a href={`mailto:${msg.email}`} className="flex items-center gap-1.5 hover:text-[#e8821a] transition-colors">
                  <Mail size={12} />
                  {msg.email}
                </a>
                {msg.phone && (
                  <a href={`tel:${msg.phone}`} className="flex items-center gap-1.5 hover:text-[#e8821a] transition-colors">
                    <Phone size={12} />
                    {msg.phone}
                  </a>
                )}
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                <a
                  href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                  className="px-4 py-2 text-xs font-semibold bg-[#e8821a] text-white rounded-lg hover:bg-[#c46a0e] transition-colors"
                >
                  Reply by Email
                </a>
                <a
                  href={`https://wa.me/${msg.phone?.replace(/\D/g, "")}?text=Hi+${msg.name.split(" ")[0]}%2C+regarding+your+inquiry+about+${encodeURIComponent(msg.subject)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  WhatsApp
                </a>
                <button className="px-4 py-2 text-xs font-semibold bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  Mark as Read
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
