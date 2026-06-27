import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Construction",
  description: "We manage every phase of the build process, coordinating trades and overseeing quality.",
};

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        title="Construction"
        subtitle="Mood – Clarity – Ambience"
        bgImage="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1360691299-682x1024.jpg"
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
              We manage every phase of the build process, coordinating trades, overseeing quality,
              and ensuring the design vision is executed flawlessly.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--site-text)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Our construction management service takes the stress out of building or renovating.
              We handle scheduling, budgeting, contractor coordination, and quality control so you
              can focus on the excitement of your project.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--site-text)",
                lineHeight: 1.8,
              }}
            >
              From demolition through final walkthrough, we maintain clear communication and
              meticulous attention to detail, ensuring your space is built to the highest standards.
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
