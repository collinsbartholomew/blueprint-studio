import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Studio",
  description: "Minnaro was founded out of a shared desire to create spaces that feel as good as they look.",
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        title="Studio"
        subtitle="Together, we shape homes rooted in simplicity and crafted with care."
        bgImage="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1796996457-768x547.jpg"
      />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--site-text)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                Minnaro was founded out of a shared desire to create spaces that feel as good as
                they look — honest, balanced, and deeply personal.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--site-text)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                With a foundation in interior architecture and product design, the studio connects
                people to their environments through refined, purposeful design.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--site-text)",
                  lineHeight: 1.8,
                }}
              >
                Every project begins with listening. We take the time to understand daily rhythms,
                personal values, and individual style. From that, we shape tailored interiors that
                reflect who you are — spaces that work quietly, beautifully, and intuitively.
              </p>
            </div>
            <div style={{ overflow: "hidden" }}>
              <img
                src="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1288707203-768x981.jpg"
                alt="Studio"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--site-secondary)" }}>
        <div className="container">
          <h3
            className="font-heading"
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "var(--site-text)",
              marginBottom: "2rem",
            }}
          >
            Our values
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                title: "Empathy",
                desc: "We listen first, design second. Understanding your world is the foundation of our work.",
              },
              {
                title: "Simplicity",
                desc: "We believe in the power of restraint — spaces that feel calm, clear, and considered.",
              },
              {
                title: "Craft",
                desc: "Every detail matters. We work with skilled makers to ensure quality at every scale.",
              },
              {
                title: "Integrity",
                desc: "We design for how you live, not for trends. Spaces that endure because they're true.",
              },
            ].map((value) => (
              <div key={value.title}>
                <h4
                  className="font-heading"
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "var(--site-text)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {value.title}
                </h4>
                <p style={{ fontSize: "15px", color: "var(--site-text-light)", lineHeight: 1.6 }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Design is personal. So are we."
        subtitle="Let's create something meaningful — together."
        buttonText="Book a Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
