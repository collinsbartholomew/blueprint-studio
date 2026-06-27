import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { portfolioProjects } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our residential and commercial interior design projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        subtitle="A curated selection of our residential and commercial projects."
        bgImage="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1306386642-738x1024.jpg"
      />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {portfolioProjects.map((project) => (
              <Link
                key={project.slug}
                href={project.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  overflow: "hidden",
                  position: "relative",
                }}
                className="portfolio-item"
              >
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    zIndex: 2,
                    background: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(8px)",
                    padding: "8px 15px",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                  className="portfolio-tag"
                >
                  <span style={{ color: "#fff", fontSize: "13px" }}>{project.category}</span>
                </div>
                <div style={{ overflow: "hidden", aspectRatio: "3/4" }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>
                <div style={{ padding: "1.25rem 0" }}>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "var(--site-text)",
                    }}
                  >
                    {project.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .portfolio-item:hover .portfolio-tag { opacity: 1; }
          .portfolio-item:hover img { transform: scale(1.05); }
        `}</style>
      </section>
    </>
  );
}
