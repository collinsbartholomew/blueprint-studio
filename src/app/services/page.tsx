import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import { services } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Interior design, lighting design, bespoke furnishings, and construction services by Minnaro.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Design, build, furnish — spaces tailored to the way you live."
        bgImage="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1310423813.jpg"
      />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
                className="group"
              >
                <div style={{ overflow: "hidden", aspectRatio: "2/3" }}>
                  <img
                    src={service.image}
                    alt={service.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>
                <div style={{ padding: "1.5rem 0" }}>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--site-text-light)",
                      letterSpacing: "0.05em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {service.tagline}
                  </p>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: "22px",
                      fontWeight: 400,
                      color: "var(--site-text)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {service.name}
                  </h3>
                  <p style={{ fontSize: "15px", color: "var(--site-text-light)", lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .group:hover img { transform: scale(1.05); }
        `}</style>
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
