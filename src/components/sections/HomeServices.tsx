import Link from "next/link";
import { services } from "@/lib/constants";

export default function HomeServices() {
  return (
    <section className="section" style={{ backgroundColor: "var(--site-secondary)" }}>
      <div className="container">
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
          Services
        </p>
        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 400,
            color: "var(--site-text)",
            maxWidth: "600px",
            marginBottom: "3rem",
            lineHeight: 1.3,
          }}
        >
          Design, build, furnish — spaces tailored to the way you live
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
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
                position: "relative",
                overflow: "hidden",
                borderRadius: "0",
              }}
              className="group"
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
                className="service-tag"
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: "13px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {service.tagline}
                </span>
              </div>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 0",
                }}
              >
                <h4
                  className="font-heading"
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "var(--site-text)",
                  }}
                >
                  {service.name}
                </h4>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "var(--site-text-light)", opacity: 0, transition: "opacity 0.3s" }}
                  className="service-arrow"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <style>{`
          .group:hover .service-tag { opacity: 1; }
          .group:hover img { transform: scale(1.05); }
          .group:hover .service-arrow { opacity: 1; }
        `}</style>
      </div>
    </section>
  );
}
