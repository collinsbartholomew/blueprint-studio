import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Minnaro for your interior design project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Let's create something meaningful — together."
        bgImage="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1870664949-1024x904.jpg"
      />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
            }}
          >
            <div>
              <h2
                className="font-heading"
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 400,
                  color: "var(--site-text)",
                  marginBottom: "1.5rem",
                }}
              >
                Get in touch
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--site-text-light)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                Whether you&apos;re planning a full renovation or need guidance on a single room,
                we&apos;d love to hear about your project. Reach out and let&apos;s start the conversation.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "var(--site-text-light)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{ fontSize: "16px", color: "var(--site-text)", textDecoration: "none" }}
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "var(--site-text-light)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneHref}`}
                    style={{ fontSize: "16px", color: "var(--site-text)", textDecoration: "none" }}
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "var(--site-text-light)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Address
                  </p>
                  <p style={{ fontSize: "16px", color: "var(--site-text)" }}>
                    {siteConfig.address}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label className="input-label">First Name</label>
                    <input type="text" className="input" placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="input-label">Last Name</label>
                    <input type="text" className="input" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label className="input-label">Email</label>
                  <input type="email" className="input" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="input-label">Phone</label>
                  <input type="tel" className="input" placeholder="+1 (000) 000-0000" />
                </div>
                <div>
                  <label className="input-label">Project Type</label>
                  <select className="select">
                    <option value="">Select a service</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="lighting-design">Lighting Design</option>
                    <option value="bespoke-furnishings">Bespoke Furnishings</option>
                    <option value="construction">Construction</option>
                  </select>
                </div>
                <div>
                  <label className="input-label">Message</label>
                  <textarea
                    className="input"
                    rows={5}
                    placeholder="Tell us about your project..."
                    style={{ resize: "none" }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
