import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Robust Solar & Energy Solutions. Learn how we collect, use, and protect your personal information.",
};

const lastUpdated = "14 May 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}`}
        breadcrumb="Legal"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 text-sm text-amber-800 leading-relaxed">
            <strong>Robust Solar & Energy Solutions</strong> (Reg. 2020/519615/07) respects your
            privacy and is committed to protecting your personal information. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit
            our website or engage our services.
          </div>

          <div className="prose prose-slate max-w-none space-y-10">

            <Section title="1. Who We Are">
              <p>
                Robust Solar &amp; Energy Solutions is a South African registered company (Registration
                Number: 2020/519615/07), headquartered at 10 De-Forest Street, CW5, Vanderbijlpark,
                Gauteng, 1911, South Africa. We provide solar energy systems, UPS solutions, and
                related energy services across Southern Africa.
              </p>
              <p>
                For any privacy-related queries, contact us at:{" "}
                <a href="mailto:info@robustsolarenergy.co.za" className="text-[#e8821a] hover:underline">
                  info@robustsolarenergy.co.za
                </a>
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We may collect the following categories of personal information:</p>
              <SubSection title="2.1 Information you provide directly">
                <ul>
                  <li><strong>Contact information:</strong> Name, email address, phone number</li>
                  <li><strong>Inquiry details:</strong> Messages, project descriptions, service requests, and quote information submitted via our contact form</li>
                  <li><strong>Communication history:</strong> Records of correspondence between you and Robust Solar</li>
                </ul>
              </SubSection>
              <SubSection title="2.2 Information collected automatically">
                <ul>
                  <li><strong>Usage data:</strong> Pages visited, time spent on site, referring URLs</li>
                  <li><strong>Device information:</strong> Browser type, operating system, IP address</li>
                  <li><strong>Cookies:</strong> Session and preference cookies (see Section 7)</li>
                </ul>
              </SubSection>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the personal information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide quotations</li>
                <li>Process and fulfil service requests and installations</li>
                <li>Communicate updates about your project or order</li>
                <li>Send service-related notifications (not marketing without consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with applicable South African and international legal obligations</li>
                <li>Prevent fraud and ensure the security of our website</li>
              </ul>
              <p>
                We do <strong>not</strong> sell, rent, or trade your personal information to third
                parties for marketing purposes.
              </p>
            </Section>

            <Section title="4. Legal Basis for Processing">
              <p>
                In accordance with the <strong>Protection of Personal Information Act (POPIA)</strong>{" "}
                of South Africa, we process your personal information on the following lawful bases:
              </p>
              <ul>
                <li><strong>Contractual necessity:</strong> Processing required to fulfil a service agreement or quote request</li>
                <li><strong>Legitimate interest:</strong> Operating our website, improving services, and preventing fraud</li>
                <li><strong>Consent:</strong> Where you have explicitly provided consent (e.g., subscribing to updates)</li>
                <li><strong>Legal obligation:</strong> Where required to comply with applicable law</li>
              </ul>
            </Section>

            <Section title="5. Sharing Your Information">
              <p>We may share your personal information with:</p>
              <ul>
                <li>
                  <strong>Service providers:</strong> Third-party vendors who assist us in operating our
                  website, processing payments, or sending communications (e.g., email service providers).
                  These parties are contractually bound to handle your data securely.
                </li>
                <li>
                  <strong>Legal authorities:</strong> Where required by law, court order, or government
                  regulation.
                </li>
                <li>
                  <strong>Business transfers:</strong> In the event of a merger, acquisition, or asset
                  sale, your information may be transferred as part of that transaction.
                </li>
              </ul>
            </Section>

            <Section title="6. Data Retention">
              <p>
                We retain your personal information only for as long as necessary to fulfil the
                purposes outlined in this policy, or as required by law. Inquiry records are typically
                retained for <strong>3 years</strong> for business record-keeping purposes. You may
                request deletion of your data at any time (subject to legal obligations).
              </p>
            </Section>

            <Section title="7. Cookies">
              <p>
                Our website uses cookies to improve your browsing experience. Cookies are small text
                files stored on your device. We use:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> Required for the website to function (e.g., session management)</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use the site (anonymised data)</li>
              </ul>
              <p>
                You can disable cookies in your browser settings, but this may affect website functionality.
              </p>
            </Section>

            <Section title="8. Your Rights (POPIA)">
              <p>Under POPIA and applicable law, you have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdrawal of consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                <li><strong>Complaints:</strong> Lodge a complaint with the Information Regulator of South Africa</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@robustsolarenergy.co.za" className="text-[#e8821a] hover:underline">
                  info@robustsolarenergy.co.za
                </a>. We will respond within <strong>30 days</strong>.
              </p>
            </Section>

            <Section title="9. Security">
              <p>
                We implement appropriate technical and organisational security measures to protect your
                personal information against unauthorised access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </Section>

            <Section title="10. Cross-Border Data Transfers">
              <p>
                Robust Solar operates across Southern Africa (Zimbabwe, South Africa, Lesotho, Swaziland).
                Where personal information is transferred across borders, we ensure appropriate safeguards
                are in place in accordance with POPIA and applicable regulations.
              </p>
            </Section>

            <Section title="11. Children's Privacy">
              <p>
                Our website and services are not directed to individuals under 18 years of age. We do not
                knowingly collect personal information from minors. If you believe we have inadvertently
                collected such information, please contact us immediately.
              </p>
            </Section>

            <Section title="12. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page
                with a revised &quot;Last updated&quot; date. We encourage you to review this policy
                periodically. Continued use of our website following any changes constitutes acceptance
                of the updated policy.
              </p>
            </Section>

            <Section title="13. Contact Us">
              <p>For questions, concerns, or requests regarding this Privacy Policy:</p>
              <div className="bg-gray-50 rounded-xl p-5 mt-3 text-sm space-y-1.5">
                <p><strong>Robust Solar &amp; Energy Solutions</strong></p>
                <p>10 De-Forest Street, CW5, Vanderbijlpark, Gauteng, 1911</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@robustsolarenergy.co.za" className="text-[#e8821a] hover:underline">
                    info@robustsolarenergy.co.za
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+27635259005" className="text-[#e8821a] hover:underline">
                    +27 (635) 25 9005
                  </a>
                </p>
              </div>
            </Section>

          </div>

          {/* Related links */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
            <Link href="/terms" className="text-[#e8821a] hover:underline font-medium">
              Terms of Service →
            </Link>
            <Link href="/contact" className="text-[#e8821a] hover:underline font-medium">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#0d2137] mb-3 pb-2 border-b border-gray-100">
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed space-y-3 text-sm">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-3">
      <h3 className="font-semibold text-[#0d2137] mb-2 text-sm">{title}</h3>
      <div className="pl-4 text-gray-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
