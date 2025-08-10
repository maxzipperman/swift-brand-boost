import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service - Position Digital"
        description="Position Digital's terms of service outlining the conditions for using our web design and development services."
      />
      <Header />
      
      <main className="section-padding">
        <div className="container max-w-4xl mx-auto prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            <strong>Effective Date:</strong> January 1, 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Position Digital's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
              <p className="mb-4">
                Position Digital provides web design and development services including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom website design and development</li>
                <li>Website optimization and performance improvements</li>
                <li>SEO and digital marketing consultation</li>
                <li>Website maintenance and support services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Project Terms</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Project Scope</h3>
              <p className="mb-4">
                All projects begin with a detailed scope of work that outlines deliverables, timeline, and costs. Changes to the project scope may result in additional fees and timeline adjustments.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.2 Timeline</h3>
              <p className="mb-4">
                Project timelines are estimates based on the agreed scope and client responsiveness. Delays in client feedback or content provision may extend project timelines.
              </p>

              <h3 className="text-xl font-semibold mb-3">3.3 Revisions</h3>
              <p>
                Each project package includes a specified number of revision rounds. Additional revisions beyond the included amount are available at our standard hourly rate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>A 50% deposit is required to begin work on projects over $2,500</li>
                <li>Final payment is due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are in USD unless otherwise specified</li>
                <li>Payment plans may be available for larger projects</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Client Responsibilities</h2>
              <p className="mb-4">Clients are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing accurate and complete project requirements</li>
                <li>Supplying content, images, and materials in a timely manner</li>
                <li>Reviewing and providing feedback within agreed timeframes</li>
                <li>Ensuring they have rights to all provided content</li>
                <li>Arranging hosting and domain services (if not provided by us)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1 Client Content</h3>
              <p className="mb-4">
                Clients retain full ownership of all content, logos, and materials they provide.
              </p>

              <h3 className="text-xl font-semibold mb-3">6.2 Custom Code</h3>
              <p className="mb-4">
                Upon full payment, clients receive full ownership of custom code developed specifically for their project.
              </p>

              <h3 className="text-xl font-semibold mb-3">6.3 Third-Party Components</h3>
              <p>
                Some projects may include third-party components or libraries that maintain their original licenses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Warranties and Disclaimers</h2>
              <p className="mb-4">
                We warrant that our services will be performed in a professional manner. However:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not guarantee specific business results or search engine rankings</li>
                <li>Website performance may vary based on hosting and external factors</li>
                <li>We are not responsible for content or functionality added after project completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p>
                Our liability for any claim related to our services shall not exceed the total amount paid for the specific project in question. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Support and Maintenance</h2>
              <p className="mb-4">
                Post-launch support terms vary by project package:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website Tune-Up: 1 week of email support</li>
                <li>Brand Refresh: 1 month of email support</li>
                <li>Premium Brand Experience: 3 months of email support</li>
              </ul>
              <p className="mt-4">
                Ongoing maintenance packages are available separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Cancellation</h2>
              <p>
                Projects may be cancelled by either party with written notice. Cancellation fees may apply based on work completed. Deposits are non-refundable once work has begun.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Force Majeure</h2>
              <p>
                Neither party shall be liable for delays or failures due to circumstances beyond their reasonable control, including natural disasters, government actions, or internet service disruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Updated terms will be posted on our website with a new effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
              <p className="mb-4">
                For questions about these terms, please contact us:
              </p>
              <div className="bg-brand-neutral-50 p-6 rounded-lg">
                <p><strong>Position Digital</strong></p>
                <p>Email: hello@positiondigital.com</p>
                <p>Website: positiondigital.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Terms;