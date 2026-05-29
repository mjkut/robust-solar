import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Robust Solar & Energy Solutions. Understand the terms governing your use of our website and services.",
};

const lastUpdated = "14 May 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle={`Last updated: ${lastUpdated}`}
        breadcrumb="Legal"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10 text-sm text-blue-800 leading-relaxed">
            Please read these Terms of Service carefully before using our website or engaging our
            services. By accessing our website or requesting a quote or installation, you agree to
            be bound by these terms. If you do not agree, please do not use our services.
          </div>

          <div className="prose prose-slate max-w-none space-y-10">

            <Section title="1. About Robust Solar & Energy Solutions">
              <p>
                These Terms govern your use of the website at{" "}
                <strong>robustsolarenergy.co.za</strong> and the services provided by{" "}
                <strong>Robust Solar &amp; Energy Solutions</strong>, a company registered in
                South Africa (Reg. No. 2020/519615/07), operating from 10 De-Forest Street, CW5,
                Vanderbijlpark, Gauteng, 1911.
              </p>
            </Section>

            <Section title="2. Use of This Website">
              <p>By using this website, you agree that you will:</p>
              <ul>
                <li>Use the site only for lawful purposes and in accordance with these Terms</li>
                <li>Not attempt to gain unauthorised access to any part of the website or its systems</li>
                <li>Not use the website to transmit any harmful, offensive, or misleading content</li>
                <li>Not copy, reproduce, or distribute content from this website without written permission</li>
                <li>Provide accurate information when submitting contact forms or quote requests</li>
              </ul>
              <p>
                We reserve the right to restrict or terminate access to the website at our discretion,
                without notice, for conduct that violates these Terms.
              </p>
            </Section>

            <Section title="3. Services & Quotations">
              <SubSection title="3.1 Quotations">
                <p>
                  Quotations provided by Robust Solar are valid for <strong>30 days</strong> from the date
                  of issue unless stated otherwise. Prices are subject to change due to fluctuations in
                  equipment costs, exchange rates, or other market factors after the validity period.
                </p>
              </SubSection>
              <SubSection title="3.2 Service Agreements">
                <p>
                  A formal service agreement or purchase order must be signed before any installation
                  work commences. Work will only begin upon receipt of a deposit as agreed in writing.
                  The remaining balance is due upon completion and sign-off of the installation.
                </p>
              </SubSection>
              <SubSection title="3.3 Scope Changes">
                <p>
                  Any changes to the agreed scope of work must be approved in writing by both parties
                  before implementation. Additional costs arising from scope changes will be communicated
                  and agreed upon before proceeding.
                </p>
              </SubSection>
              <SubSection title="3.4 Consultations">
                <p>
                  We strongly recommend a site assessment and consultation before finalising any system
                  design or purchase. Robust Solar accepts no liability for systems that are incorrectly
                  sized or installed based on inaccurate information provided by the client.
                </p>
              </SubSection>
            </Section>

            <Section title="4. Products & Equipment">
              <ul>
                <li>
                  All products are subject to availability. Prices displayed on our website are indicative
                  and subject to confirmation at the time of order.
                </li>
                <li>
                  Equipment carries the manufacturer&apos;s warranty. Robust Solar will assist in
                  facilitating warranty claims but is not liable for manufacturer defects beyond the
                  warranty claim process.
                </li>
                <li>
                  Ownership of equipment passes to the client only upon receipt of full payment.
                </li>
                <li>
                  We reserve the right to substitute specified products with equivalent-specification
                  alternatives where the original product is unavailable, subject to client notification.
                </li>
              </ul>
            </Section>

            <Section title="5. Installation Services">
              <SubSection title="5.1 Site Conditions">
                <p>
                  The client is responsible for ensuring safe and suitable site conditions for
                  installation. Robust Solar may decline or suspend installation work where site
                  conditions pose a safety risk to our team.
                </p>
              </SubSection>
              <SubSection title="5.2 Workmanship Warranty">
                <p>
                  Robust Solar provides a <strong>12-month workmanship warranty</strong> on all
                  installation work carried out by our team. This covers defects directly attributable
                  to our installation workmanship and does not cover damage caused by weather events,
                  third-party interference, misuse, or equipment failure.
                </p>
              </SubSection>
              <SubSection title="5.3 Ongoing Support">
                <p>
                  Clients whose systems were installed by Robust Solar are entitled to free technical
                  support for the duration of the workmanship warranty period. This support is provided
                  via phone, email, or WhatsApp during business hours.
                </p>
              </SubSection>
              <SubSection title="5.4 Third-Party Installations">
                <p>
                  Robust Solar accepts no responsibility for systems not installed by our team.
                  Maintenance or repairs on third-party installations will be quoted separately and
                  carried out at the client&apos;s risk and cost.
                </p>
              </SubSection>
            </Section>

            <Section title="6. Payment Terms">
              <ul>
                <li>A deposit (typically 50%) is required before commencement of work or despatch of equipment</li>
                <li>The balance is due upon project completion unless otherwise agreed in writing</li>
                <li>Late payments may incur interest at the rate of 2% per month on the outstanding balance</li>
                <li>Robust Solar reserves the right to suspend services for accounts in arrears</li>
                <li>All prices are quoted in South African Rand (ZAR) unless otherwise specified</li>
              </ul>
            </Section>

            <Section title="7. Cancellations & Refunds">
              <ul>
                <li>
                  Cancellations must be made in writing. Deposits are non-refundable once equipment
                  has been ordered or work has commenced.
                </li>
                <li>
                  If Robust Solar cancels a confirmed order, any deposit paid will be refunded in full
                  within 14 working days.
                </li>
                <li>
                  Refunds for products are subject to the supplier&apos;s return policy and are only
                  applicable to unused, unopened items in original packaging, returned within 7 days
                  of delivery.
                </li>
              </ul>
            </Section>

            <Section title="8. Intellectual Property">
              <p>
                All content on this website — including text, images, logos, graphics, and system
                designs — is the intellectual property of Robust Solar &amp; Energy Solutions and is
                protected by South African and international copyright law.
              </p>
              <p>
                You may not reproduce, distribute, or use any content from this site for commercial
                purposes without prior written consent from Robust Solar.
              </p>
            </Section>

            <Section title="9. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, Robust Solar shall not be liable for:
              </p>
              <ul>
                <li>Indirect, incidental, or consequential losses arising from use of our website or services</li>
                <li>Loss of data, revenue, or profit resulting from service interruptions</li>
                <li>Damage caused by events beyond our reasonable control (force majeure), including load shedding, natural disasters, or civil unrest</li>
                <li>Inaccuracies in information provided on the website, which is provided for general information only</li>
              </ul>
              <p>
                Our total liability to you for any claim arising out of or in connection with these
                Terms shall not exceed the amount paid by you for the relevant service or product.
              </p>
            </Section>

            <Section title="10. Governing Law">
              <p>
                These Terms are governed by and construed in accordance with the laws of the Republic
                of South Africa. Any disputes shall be subject to the jurisdiction of the South African
                courts, with primary jurisdiction in Gauteng.
              </p>
            </Section>

            <Section title="11. Changes to These Terms">
              <p>
                Robust Solar reserves the right to modify these Terms at any time. Updated terms will
                be posted on this page with a revised &quot;Last updated&quot; date. Continued use of
                our website or services after changes constitutes acceptance of the updated Terms.
              </p>
            </Section>

            <Section title="12. Contact">
              <p>If you have questions about these Terms:</p>
              <div className="bg-gray-50 rounded-xl p-5 mt-3 text-sm space-y-1.5">
                <p><strong>Robust Solar &amp; Energy Solutions</strong></p>
                <p>10 De-Forest Street, CW5, Vanderbijlpark, Gauteng, 1911, South Africa</p>
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
            <Link href="/privacy" className="text-[#e8821a] hover:underline font-medium">
              Privacy Policy →
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
