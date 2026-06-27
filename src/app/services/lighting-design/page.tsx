import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Lighting Design",
  description: "Light shapes how we feel in a space. We design lighting schemes that enhance mood and highlight architecture.",
};

export default function LightingDesignPage() {
  return (
    <>
      <PageHero
        title="Lighting Design"
        subtitle="Atmosphere – Focus – Harmony"
        bgImage="https://minnaro.vamtam.com/wp-content/uploads/2025/05/anton-sobotyak-8og8EDtnc9w-unsplash-682x1024.jpg"
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
              Light shapes how we feel in a space. We design lighting schemes that enhance mood,
              highlight architecture, and bring warmth to every room.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--site-text)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Our approach considers natural light patterns, artificial lighting layers, and the
              emotional quality of each space. We create lighting plans that work throughout the day
              and adapt to different activities and moods.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--site-text)",
                lineHeight: 1.8,
              }}
            >
              From ambient and task lighting to accent and decorative fixtures, every element is
              carefully selected to complement the overall design and enhance the lived experience.
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
