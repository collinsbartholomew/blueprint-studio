import Link from "next/link";

export default function HomeFounder() {
  return (
    <section className="section" style={{ backgroundColor: "var(--site-secondary)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "-20px",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: "14px",
                  letterSpacing: "0.1em",
                  color: "var(--site-text-light)",
                  fontWeight: 500,
                }}
              >
                Mikaele Mora / Founder
              </div>
              <img
                src="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1288707203-768x981.jpg"
                alt="Mikaele Mora"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <div>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--site-text)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                Minnaro was founded out of a shared desire to create spaces that feel as good as they look — honest, balanced, and deeply personal.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--site-text)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                With a foundation in interior architecture and product design, the studio connects people to their environments through refined, purposeful design.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--site-text)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                Every project begins with listening. We take the time to understand daily rhythms, personal values, and individual style. From that, we shape tailored interiors that reflect who you are — spaces that work quietly, beautifully, and intuitively.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <img
                  src="https://minnaro.vamtam.com/wp-content/uploads/2025/05/INT-logo-08.png"
                  alt="Award"
                  style={{ height: "40px", marginBottom: "1rem" }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--site-text-light)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Interior Designs of the Year 2024
                </p>
              </div>

              <details
                style={{
                  marginTop: "2rem",
                  background: "rgba(0,0,0,0.03)",
                  padding: "1.25rem",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--site-text)",
                    listStyle: "none",
                  }}
                >
                  Read more from Mikaele
                </summary>
                <div style={{ marginTop: "1rem" }}>
                  <h4
                    className="font-heading"
                    style={{ fontSize: "18px", fontWeight: 400, marginBottom: "0.75rem" }}
                  >
                    Mikaele here!
                  </h4>
                  <p style={{ fontSize: "15px", color: "var(--site-text)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                    Founder of Minnaro, trained in interior architecture and product design in Milan and Copenhagen.
                  </p>
                  <p style={{ fontSize: "15px", color: "var(--site-text)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                    With over a decade of experience across Europe and Australia, I create spaces that are thoughtful, understated, and quietly personal.
                  </p>
                  <p style={{ fontSize: "15px", color: "var(--site-text)", lineHeight: 1.7 }}>
                    My work has been recognised in international publications and design awards — but what matters most is how it feels to live in.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
