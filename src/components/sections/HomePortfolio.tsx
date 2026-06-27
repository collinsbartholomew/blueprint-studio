import Link from "next/link";
import { portfolioProjects } from "@/lib/constants";

export default function HomePortfolio() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "var(--site-text-light)",
                marginBottom: "1rem",
              }}
            >
              Portfolio
            </p>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 400,
                color: "var(--site-text)",
              }}
            >
              Our latest works
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="btn-site-primary"
            style={{ display: "inline-block" }}
          >
            Portfolio
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {portfolioProjects.slice(0, 3).map((project) => (
            <div
              key={project.slug}
              style={{ position: "relative", overflow: "hidden" }}
            >
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
                  className="portfolio-img"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  padding: "2rem 1.5rem 1.5rem",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                }}
                className="portfolio-overlay"
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "13px",
                    letterSpacing: "0.05em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {project.category}
                </p>
                <h4
                  className="font-heading"
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#fff",
                  }}
                >
                  {project.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .portfolio-img:hover { transform: scale(1.05); }
          div:hover > .portfolio-overlay { opacity: 1; }
        `}</style>
      </div>
    </section>
  );
}
