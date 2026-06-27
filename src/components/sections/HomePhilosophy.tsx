import Link from "next/link";

export default function HomePhilosophy() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
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
              Our philosophy
            </p>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 400,
                color: "var(--site-text)",
                lineHeight: 1.3,
                maxWidth: "500px",
              }}
            >
              Guided by empathy. Grounded in simplicity. Crafted with care.
            </h2>
          </div>

          <div style={{ overflow: "hidden", borderRadius: "0" }}>
            <img
              src="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1310423813.jpg"
              alt="Philosophy"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            marginTop: "4rem",
          }}
        >
          <div>
            <svg width="60" height="20" viewBox="0 0 101 34" style={{ marginBottom: "1.5rem" }}>
              <path
                d="M99.5 31.02H73.73a24.8 24.8 0 0 0-44.77-12.96L2.33.26a1.5 1.5 0 0 0-2.08.4c-.46.69-.28 1.61.41 2.07l46.4 31.02c.26.17.55.25.85.25h51.6a1.5 1.5 0 1 0 0-2.98h-.02ZM31 19.8A21.62 21.62 0 0 1 48.44 11 21.59 21.59 0 0 1 70 31H47.78L31 19.8Z"
                fill="var(--site-text)"
                fillRule="evenodd"
              />
            </svg>
            <h5
              className="font-heading"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "var(--site-text)",
                marginBottom: "0.75rem",
              }}
            >
              Warm &amp; Human-centered
            </h5>
            <p style={{ fontSize: "15px", color: "var(--site-text-light)", lineHeight: 1.6 }}>
              We believe that great design begins with listening. Rooted in empathy, functionality, and timeless crafting spaces that reflect your story.
            </p>
          </div>

          <div>
            <svg width="60" height="20" viewBox="0 0 121 35" style={{ marginBottom: "1.5rem" }}>
              <path
                d="M119.62 32.23H93.9C93.18 14.33 78.48 0 60.5 0 42.52 0 27.82 14.33 27.1 32.23H1.39a1.39 1.39 0 0 0 0 2.77h118.24c.76 0 1.38-.62 1.38-1.39 0-.76-.62-1.38-1.38-1.38ZM60.5 3A30.5 30.5 0 0 1 91 32H30A30.49 30.49 0 0 1 60.5 3Z"
                fill="var(--site-text)"
                fillRule="evenodd"
              />
            </svg>
            <h5
              className="font-heading"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "var(--site-text)",
                marginBottom: "0.75rem",
              }}
            >
              Artistic &amp; expressive
            </h5>
            <p style={{ fontSize: "15px", color: "var(--site-text-light)", lineHeight: 1.6 }}>
              Every space tells a story. Our philosophy is to design with emotion, to sculpt interiors that resonate deeply with those who live in them.
            </p>
          </div>

          <div>
            <svg width="60" height="20" viewBox="0 0 101 34" style={{ marginBottom: "1.5rem" }}>
              <path
                d="M1.5 31.02h25.76a24.8 24.8 0 0 1 44.77-12.96L98.67.26a1.5 1.5 0 0 1 2.08.4c.46.69.28 1.61-.41 2.07l-46.4 31.02c-.26.17-.55.25-.85.25H1.5a1.5 1.5 0 1 1 0-2.98h.02ZM69.3 19.8A21.62 21.62 0 0 0 51.84 11 21.59 21.59 0 0 0 30.3 31h22.22l16.78-11.2Z"
                fill="var(--site-text)"
                fillRule="evenodd"
              />
            </svg>
            <h5
              className="font-heading"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "var(--site-text)",
                marginBottom: "0.75rem",
              }}
            >
              Client-focused
            </h5>
            <p style={{ fontSize: "15px", color: "var(--site-text-light)", lineHeight: 1.6 }}>
              You are our inspiration. We see design as a dialogue—balancing your vision with our expertise to shape interiors that feel as good as they look.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
