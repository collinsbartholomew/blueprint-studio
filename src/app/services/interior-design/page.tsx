import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Interior Design",
  description: "From concept to completion, we craft interiors that reflect your personality and lifestyle.",
};

export default function InteriorDesignPage() {
  return (
    <>
      <PageHero
        title="Interior Design"
        subtitle="Detail – Attention – Harmony"
        bgImage="https://minnaro.vamtam.com/wp-content/uploads/2025/05/shivani-chougula-IBzfpFgUNuw-unsplash-682x1024.jpg"
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "700px" }}>
            <p
              style={{
                fontSize: "16px",
                color: "var(--site-text)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              From concept to completion, we craft interiors that reflect your personality and lifestyle.
              Every material, color, and layout is chosen with intention — creating spaces that feel
              both beautiful and effortlessly livable.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--site-text)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Our interior design process begins with understanding how you live, what you value,
              and how you want your home to feel. We translate that into a cohesive design vision
              that balances aesthetics with function.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--site-text)",
                lineHeight: 1.8,
              }}
            >
              Whether it&apos;s a complete renovation or a refreshing of existing spaces, we guide
              you through every decision — from floor plans and materials to furniture selection
              and finishing touches.
            </p>
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
            What we offer
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              "Space planning & layout",
              "Color & material selection",
              "Custom millwork design",
              "Furniture sourcing & procurement",
              "Styling & accessories",
              "Project management",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "1.5rem",
                  background: "var(--site-bg-alt)",
                  fontSize: "15px",
                  color: "var(--site-text)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to transform your space?"
        subtitle="Let's discuss your project and bring your vision to life."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
