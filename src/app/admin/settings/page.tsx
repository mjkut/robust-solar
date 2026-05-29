"use client";

import { useState } from "react";
import {
  Save,
  Globe,
  Phone,
  Mail,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  AlertTriangle,
  Database,
  Bell,
  Palette,
  Info,
} from "lucide-react";

type SaveState = "idle" | "saving" | "saved" | "error";

function SettingsSection({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="px-7 py-5 border-b border-gray-100 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#e8821a]/10 flex items-center justify-center">
          <Icon size={16} className="text-[#e8821a]" />
        </div>
        <div>
          <h2 className="font-bold text-[#0d2137] text-sm">{title}</h2>
          <p className="text-gray-500 text-xs">{description}</p>
        </div>
      </div>
      <div className="p-7 space-y-5">{children}</div>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      {children}
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e8821a]/30 focus:border-[#e8821a] transition-colors";
const textareaCls =
  "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e8821a]/30 focus:border-[#e8821a] transition-colors resize-none";

export default function AdminSettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [saveState, setSaveState] = useState<Record<string, SaveState>>({});

  const handleSave = (section: string) => {
    setSaveState((s) => ({ ...s, [section]: "saving" }));
    setTimeout(() => {
      setSaveState((s) => ({ ...s, [section]: "saved" }));
      setTimeout(() => setSaveState((s) => ({ ...s, [section]: "idle" })), 3000);
    }, 800);
  };

  const SaveButton = ({ section }: { section: string }) => {
    const state = saveState[section] ?? "idle";
    return (
      <div className="flex justify-end pt-2 border-t border-gray-100">
        <button
          onClick={() => handleSave(section)}
          disabled={state === "saving"}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e8821a] hover:bg-[#c46a0e] disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          {state === "saving" ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : state === "saved" ? (
            <CheckCircle size={15} />
          ) : (
            <Save size={15} />
          )}
          {state === "saving" ? "Saving…" : state === "saved" ? "Saved!" : "Save Changes"}
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-[#0d2137]">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage your website content, contact details, and account settings.
        </p>
      </div>

      {/* Database notice */}
      <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
        <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
        <span>
          Settings are currently static. Connect your database (<code className="bg-amber-100 px-1 rounded">DATABASE_URL</code> in{" "}
          <code className="bg-amber-100 px-1 rounded">.env</code>) to enable persistent settings management.
        </span>
      </div>

      {/* Company Info */}
      <SettingsSection
        icon={Info}
        title="Company Information"
        description="Public-facing company details shown on the website"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Company Name">
            <input type="text" defaultValue="Robust Solar & Energy Solutions" className={inputCls} />
          </Field>
          <Field label="Registration Number">
            <input type="text" defaultValue="2020/519615/07 (SA)" className={inputCls} />
          </Field>
        </div>
        <Field
          label="Company Tagline"
          hint="Short line shown in hero / meta description"
        >
          <input
            type="text"
            defaultValue="Top-of-the-range energy solutions for Southern Africa."
            className={inputCls}
          />
        </Field>
        <Field label="About / Description" hint="Used on homepage and SEO">
          <textarea
            rows={3}
            defaultValue="Robust Solar & Energy Solutions is a fast-growing enterprise providing clean energy solutions across Southern Africa since 2015."
            className={textareaCls}
          />
        </Field>
        <SaveButton section="company" />
      </SettingsSection>

      {/* Contact Details */}
      <SettingsSection
        icon={Phone}
        title="Contact Details"
        description="Shown in the header, footer, and contact page"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Primary Phone">
            <div className="relative">
              <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="tel" defaultValue="+27 (635) 25 9005" className={`${inputCls} pl-9`} />
            </div>
          </Field>
          <Field label="WhatsApp Number" hint="Used for WhatsApp chat links">
            <div className="relative">
              <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="tel" defaultValue="27635259005" className={`${inputCls} pl-9`} placeholder="Country code + number, no spaces" />
            </div>
          </Field>
          <Field label="General Email">
            <div className="relative">
              <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="email" defaultValue="info@robustsolarenergy.co.za" className={`${inputCls} pl-9`} />
            </div>
          </Field>
          <Field label="Projects Email">
            <div className="relative">
              <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="email" defaultValue="projects@robustsolarenergy.co.za" className={`${inputCls} pl-9`} />
            </div>
          </Field>
        </div>
        <Field label="Physical Address">
          <div className="relative">
            <MapPin size={14} className="absolute left-3.5 top-3.5 text-gray-400" />
            <textarea
              rows={2}
              defaultValue="10 De-Forest Street, CW5, Vanderbijlpark, Gauteng, 1911, South Africa"
              className={`${textareaCls} pl-9`}
            />
          </div>
        </Field>
        <SaveButton section="contact" />
      </SettingsSection>

      {/* Social Media */}
      <SettingsSection
        icon={Globe}
        title="Social Media Links"
        description="Links shown in the footer social icons"
      >
        <div className="space-y-4">
          {[
            { label: "Facebook URL", placeholder: "https://facebook.com/robustsolar" },
            { label: "Instagram URL", placeholder: "https://instagram.com/robustsolar" },
            { label: "Twitter / X URL", placeholder: "https://x.com/robustsolar" },
            { label: "LinkedIn URL", placeholder: "https://linkedin.com/company/robust-solar" },
          ].map(({ label, placeholder }) => (
            <Field key={label} label={label}>
              <input type="url" placeholder={placeholder} className={inputCls} />
            </Field>
          ))}
        </div>
        <SaveButton section="social" />
      </SettingsSection>

      {/* Homepage Stats */}
      <SettingsSection
        icon={Palette}
        title="Homepage Stats"
        description="The numbers shown in the stats banner below the hero"
      >
        <div className="grid grid-cols-2 gap-5">
          <Field label="Solar Systems Installed" hint="Shown as X+">
            <input type="number" defaultValue={200} min={0} className={inputCls} />
          </Field>
          <Field label="Countries Served">
            <input type="number" defaultValue={4} min={1} className={inputCls} />
          </Field>
          <Field label="Happy Clients" hint="Shown as X+">
            <input type="number" defaultValue={180} min={0} className={inputCls} />
          </Field>
          <Field label="Years of Experience" hint="Shown as X+">
            <input type="number" defaultValue={10} min={1} className={inputCls} />
          </Field>
        </div>
        <SaveButton section="stats" />
      </SettingsSection>

      {/* Business Hours */}
      <SettingsSection
        icon={Bell}
        title="Business Hours"
        description="Displayed on the contact page"
      >
        <div className="space-y-3">
          {[
            { day: "Monday – Friday", defaultVal: "8:00 AM – 5:00 PM" },
            { day: "Saturday", defaultVal: "9:00 AM – 1:00 PM" },
            { day: "Sunday", defaultVal: "Closed" },
          ].map(({ day, defaultVal }) => (
            <div key={day} className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600 w-36 flex-shrink-0">{day}</span>
              <input type="text" defaultValue={defaultVal} className={`${inputCls} flex-1`} />
            </div>
          ))}
        </div>
        <SaveButton section="hours" />
      </SettingsSection>

      {/* Email Notifications */}
      <SettingsSection
        icon={Bell}
        title="Email Notifications"
        description="Configure when you receive email alerts"
      >
        <div className="space-y-4">
          <Field label="Notification Email" hint="Address to receive contact form submissions and alerts">
            <input type="email" defaultValue="info@robustsolarenergy.co.za" className={inputCls} />
          </Field>
          <Field label="Resend API Key" hint="Get your key at resend.com — required to send email notifications">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="re_..."
              className={inputCls}
            />
          </Field>
          <div className="space-y-2.5">
            <p className="text-sm font-medium text-gray-700">Notify me when:</p>
            {[
              "New contact form submission",
              "New quote request",
              "New product inquiry",
            ].map((label) => (
              <label key={label} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded accent-[#e8821a]"
                />
                <span className="text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>
        <SaveButton section="notifications" />
      </SettingsSection>

      {/* Change Password */}
      <SettingsSection
        icon={Lock}
        title="Change Password"
        description="Update your admin account password"
      >
        <Field label="Current Password">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter current password"
              className={`${inputCls} pr-10`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="New Password" hint="Minimum 8 characters">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              className={inputCls}
            />
          </Field>
          <Field label="Confirm New Password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Repeat new password"
              className={inputCls}
            />
          </Field>
        </div>
        <SaveButton section="password" />
      </SettingsSection>

      {/* Database Info */}
      <SettingsSection
        icon={Database}
        title="Database & Deployment"
        description="Setup information for going live"
      >
        <div className="space-y-3 text-sm text-gray-600">
          <div className="bg-gray-50 rounded-xl p-5 space-y-4">
            <div>
              <p className="font-semibold text-[#0d2137] mb-1">Step 1 — Create Supabase project</p>
              <p className="text-gray-500 text-xs">
                Visit <span className="text-[#e8821a]">supabase.com</span>, create a free project, and copy
                the database connection string (Settings → Database → Connection string → URI).
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#0d2137] mb-1">Step 2 — Update .env</p>
              <code className="block bg-[#0d2137] text-green-400 text-xs p-3 rounded-lg">
                DATABASE_URL=&quot;postgresql://postgres:[password]@db.[ref].supabase.co:5432/postgres&quot;
              </code>
            </div>
            <div>
              <p className="font-semibold text-[#0d2137] mb-1">Step 3 — Push schema</p>
              <code className="block bg-[#0d2137] text-green-400 text-xs p-3 rounded-lg">
                npx prisma db push
              </code>
            </div>
            <div>
              <p className="font-semibold text-[#0d2137] mb-1">Step 4 — Deploy to Vercel</p>
              <p className="text-gray-500 text-xs">
                Push to GitHub, import on <span className="text-[#e8821a]">vercel.com</span>, and set your
                environment variables (DATABASE_URL, NEXTAUTH_SECRET, RESEND_API_KEY) in Vercel project settings.
              </p>
            </div>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}
