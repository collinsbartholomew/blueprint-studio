import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h1
          className="font-heading"
          style={{
            fontSize: "clamp(60px, 10vw, 120px)",
            fontWeight: 400,
            color: "var(--site-text)",
            lineHeight: 1,
            marginBottom: "1rem",
          }}
        >
          404
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "var(--site-text-light)",
            marginBottom: "2rem",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn-site-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
