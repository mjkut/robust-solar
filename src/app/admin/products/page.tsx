import Link from "next/link";
import { PlusCircle, Package } from "lucide-react";

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0d2137]">Products</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your product catalog</p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#e8821a] text-white text-sm font-semibold rounded-xl hover:bg-[#c46a0e] transition-colors"
        >
          <PlusCircle size={16} />
          Add Product
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
        <Package className="text-gray-200 mx-auto mb-4" size={48} />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">No Products Yet</h3>
        <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
          Add solar panels, batteries, inverters, and other products to your catalog.
        </p>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e8821a] text-white text-sm font-semibold rounded-xl hover:bg-[#c46a0e] transition-colors"
        >
          <PlusCircle size={15} />
          Add First Product
        </Link>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800">
        <strong>Database required:</strong> Connect your Supabase database in <code className="bg-amber-100 px-1 rounded">.env</code> and run{" "}
        <code className="bg-amber-100 px-1 rounded">npx prisma db push</code> to enable product management.
      </div>
    </div>
  );
}
