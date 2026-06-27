import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="hero-section" style={{ minHeight: "85vh" }}>
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            "url('https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1329929715-683x1024.jpg')",
        }}
      />
      <div
        className="hero-overlay"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1))",
        }}
      />
      <div className="container relative z-10">
        <div className="hero-content">
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            Interior Design Studio
          </p>
          <h1
            className="font-heading"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.15,
              maxWidth: "650px",
              marginBottom: "2rem",
            }}
          >
            Design that listens — homes made for real living, guided by your vision.
          </h1>
          <Link
            href="/studio"
            className="btn-site-primary"
            style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
