import { motion } from "motion/react";

// Starting-point privacy policy for a Canadian (Ontario) business under PIPEDA.
// It describes our actual practices: consent-based collection via the site's
// forms, no sale or rental of personal information, and the third parties that
// help us operate (form delivery + spam protection). Have counsel review before
// relying on it. Keep the "Last updated" date current when the policy changes.

const LAST_UPDATED = "September 4, 2026";

export function Privacy() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl mb-6">Privacy Policy</h1>
            <p className="text-gray-500 text-sm uppercase tracking-wider">
              Last updated: {LAST_UPDATED}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-gray-300 leading-relaxed">
            <p>
              Utkrisht Alliance ("Utkrisht Alliance", "we", "us") is a media and
              events company based in Toronto, Ontario, Canada. This policy
              explains what personal information we collect through this website,
              how we use and protect it, and the choices you have. We handle
              personal information in accordance with Canada's Personal
              Information Protection and Electronic Documents Act (PIPEDA) and
              applicable provincial privacy law.
            </p>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                1. Information we collect
              </h2>
              <p className="mb-4">
                We only collect the information you choose to give us, primarily
                through our forms:
              </p>
              <ul className="space-y-2 list-disc pl-6 text-gray-400">
                <li>
                  <span className="text-gray-300">Enquiries &amp; partnerships:</span>{" "}
                  your name, email, phone number, company or organisation, area
                  of interest, and the contents of your message.
                </li>
                <li>
                  <span className="text-gray-300">Creator applications:</span>{" "}
                  the details you submit, such as your name, email, platform and
                  handle, audience size, niche, location and portfolio link.
                </li>
                <li>
                  <span className="text-gray-300">Event interest &amp; updates:</span>{" "}
                  the contact details you provide when you register interest in an
                  event or ask to receive updates.
                </li>
                <li>
                  <span className="text-gray-300">Technical information:</span>{" "}
                  limited data your browser sends automatically (such as IP
                  address) and information used by our spam-protection provider to
                  verify that a submission is genuine.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                2. How we use your information
              </h2>
              <p>
                We use your information to respond to your enquiry, to discuss and
                deliver partnerships, exhibiting and event participation, to
                coordinate events, and — where you have asked us to — to send you
                updates about our events and season. We use it for the purpose you
                gave it to us, and not for unrelated purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">3. Consent</h2>
              <p>
                We collect and use your personal information with your consent,
                which you give by submitting a form or otherwise contacting us. You
                may withdraw your consent at any time by emailing us at{" "}
                <a
                  href="mailto:info@utkrishtalliance.com"
                  className="underline hover:text-white"
                >
                  info@utkrishtalliance.com
                </a>
                , subject to legal and contractual limits, and we will stop using
                your information for the relevant purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                4. Sharing and disclosure
              </h2>
              <p>
                We do not sell, rent, or trade your personal information, and we do
                not share attendee or contact lists. We share information only
                with the service providers that help us operate this site and
                communicate with you (for example, our form-delivery and
                spam-protection providers, and our email provider), and only as
                needed to provide those services. We may also disclose information
                where required by law, or to establish or defend our legal rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                5. Third-party services
              </h2>
              <p>
                Our forms are delivered using Web3Forms and protected from spam
                using hCaptcha. When you submit a form, the information you enter
                is transmitted to these providers to deliver your message and
                verify the submission. hCaptcha may set cookies or collect device
                information for that purpose. These providers may process data on
                servers located outside Canada; where that is the case, your
                information is subject to the laws of those jurisdictions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                6. Cookies and analytics
              </h2>
              <p>
                This site uses cookies and similar technologies that are necessary
                for it to function and to protect our forms from abuse. We also use
                Google Analytics (GA4) to understand how visitors use the site —
                for example, which pages are viewed and how people arrive. Google
                Analytics sets cookies (such as{" "}
                <span className="text-gray-400">_ga</span>) and processes usage
                data on our behalf; see{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  Google's privacy policy
                </a>{" "}
                for details. We do not use these cookies for advertising. You can
                opt out of Google Analytics with{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  Google's browser add-on
                </a>
                , or by blocking cookies in your browser.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">7. Retention</h2>
              <p>
                We keep your personal information only for as long as needed to
                fulfil the purpose for which it was collected and to meet our legal
                and business obligations, after which it is securely deleted or
                anonymised.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">8. Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect
                your information against loss, misuse and unauthorised access. No
                method of transmission or storage is completely secure, but we work
                to safeguard the information you entrust to us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">9. Your rights</h2>
              <p>
                Subject to applicable law, you may ask to access the personal
                information we hold about you, to correct it if it is inaccurate,
                or to withdraw your consent. To make a request, email us at{" "}
                <a
                  href="mailto:info@utkrishtalliance.com"
                  className="underline hover:text-white"
                >
                  info@utkrishtalliance.com
                </a>
                . We will respond within a reasonable time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">10. Children</h2>
              <p>
                This website is intended for adults and is not directed to
                children. Our events that involve alcohol are strictly for guests
                of legal drinking age (19+ in Ontario), verified before service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                11. Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. When we do, we will
                revise the "Last updated" date above. Material changes will be
                reflected on this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">12. Contact us</h2>
              <p>
                For any question about this policy or your personal information,
                contact us at{" "}
                <a
                  href="mailto:info@utkrishtalliance.com"
                  className="underline hover:text-white"
                >
                  info@utkrishtalliance.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
