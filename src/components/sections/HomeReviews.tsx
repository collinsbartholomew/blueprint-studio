import { testimonials } from "@/lib/constants";

export default function HomeReviews() {
  return (
    <section className="section" style={{ backgroundColor: "var(--site-secondary)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "start",
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
              Reviews
            </p>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 400,
                color: "var(--site-text)",
                lineHeight: 1.3,
              }}
            >
              Don&apos;t take our word for it
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                style={{
                  background: "var(--site-bg)",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--site-text)",
                      }}
                    >
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--site-text)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 2fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
