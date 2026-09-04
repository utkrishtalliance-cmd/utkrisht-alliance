import { motion } from "motion/react";

// Starting-point terms of use for the website. It reinforces the compliance
// posture used elsewhere on the site: the site is informational, nothing on it
// is an offer or investment advice, and participation is by separate written
// agreement. Have counsel review before relying on it.

const LAST_UPDATED = "September 4, 2026";

export function Terms() {
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
            <h1 className="text-5xl md:text-7xl mb-6">Terms of Use</h1>
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
              These terms govern your use of the Utkrisht Alliance website. By
              using this site, you agree to them. If you do not agree, please do
              not use the site.
            </p>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                1. Informational purpose
              </h2>
              <p>
                This site is provided for general information about Utkrisht
                Alliance and its events. Nothing on it is an offer, a solicitation,
                or a binding commitment, and nothing on it should be relied on as
                financial, legal, tax, or investment advice. Any partnership,
                sponsorship, exhibiting, or event participation is subject to a
                separate written agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                2. Property and other events
              </h2>
              <p>
                Where our events feature real estate or other regulated
                categories, presentations are educational and informational only.
                Any transaction is completed by the appropriate licensed party
                under a separate agreement, off the event floor. We do not offer
                securities, and we do not make yield, return, or appreciation
                representations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                3. Intellectual property
              </h2>
              <p>
                The Utkrisht Alliance name, logo, brand, and the text, design and
                other content on this site are owned by or licensed to us and are
                protected by law. You may not copy, reproduce, or use them without
                our prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">4. Acceptable use</h2>
              <p>
                You agree to use the site lawfully and not to misuse it — including
                not attempting to disrupt it, gain unauthorised access, or harvest,
                scrape, or collect data from it by automated means.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                5. Submissions and applications
              </h2>
              <p>
                When you submit a form, you confirm that the information you
                provide is accurate and that you are entitled to share it. We
                review enquiries and applications and may accept or decline any of
                them at our discretion; submitting a form does not guarantee
                participation, a place, or a response.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">6. Third-party links</h2>
              <p>
                The site may link to third-party websites or services that we do
                not control. We are not responsible for their content, practices,
                or availability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                7. No warranties
              </h2>
              <p>
                The site is provided "as is" and "as available", without
                warranties of any kind, whether express or implied. We do not
                warrant that the site will be uninterrupted, error-free, or that
                the information on it is complete or current.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">
                8. Limitation of liability
              </h2>
              <p>
                To the fullest extent permitted by law, Utkrisht Alliance will not
                be liable for any indirect, incidental, or consequential loss
                arising from your use of, or inability to use, the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">9. Changes</h2>
              <p>
                We may update these terms from time to time. Changes take effect
                when posted, and we will revise the "Last updated" date above.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">10. Governing law</h2>
              <p>
                These terms are governed by the laws of the Province of Ontario and
                the federal laws of Canada applicable there, and the courts of
                Ontario have exclusive jurisdiction over any dispute.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-3 text-white">11. Contact us</h2>
              <p>
                Questions about these terms? Email us at{" "}
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
