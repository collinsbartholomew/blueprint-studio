import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Bespoke Furnishings",
  description: "We design and source custom furniture, textiles, and objects that perfectly suit your space.",
};

export default function BespokeFurnishingsPage() {
  return (
    <>
      <PageHero
        title="Bespoke Furnishings"
        subtitle="Essence - Attention - Mood"
        bgImage="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1353481343-682x1024.jpg"
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
              We design and source custom furniture, textiles, and objects that perfectly suit your
              space — pieces that feel made for you, because they are.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--site-text)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Our bespoke service covers everything from custom upholstery and built-in cabinetry
              to one-of-a-kind decorative pieces. We work with skilled artisans and manufacturers
              to bring your vision to life.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--site-text)",
                lineHeight: 1.8,
              }}
            >
              Each piece is designed with consideration for proportion, material, comfort, and how
              it will be used in your daily life. The result is furniture and objects that are
              uniquely yours.
            </p>
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
