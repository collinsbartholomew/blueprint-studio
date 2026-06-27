import Link from "next/link";

type CtaSectionProps = {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "light" | "primary" | "dark";
};

const variantStyles = {
  default: {
    section: "",
    titleColor: "var(--site-text)",
    subtitleColor: "var(--site-text-light)",
  },
  light: {
    section: "bg-site-bg",
    titleColor: "var(--site-text)",
    subtitleColor: "var(--site-text-light)",
  },
  primary: {
    section: "bg-site-primary",
    titleColor: "#fff",
    subtitleColor: "rgba(255,255,255,0.8)",
  },
  dark: {
    section: "bg-site-marquee",
    titleColor: "#fff",
    subtitleColor: "rgba(255,255,255,0.8)",
  },
};

export default function CtaSection({
  title,
  subtitle,
  buttonText = "Book a Consultation",
  buttonHref = "/contact",
  variant = "default",
}: CtaSectionProps) {
  const styles = variantStyles[variant];

  return (
    <section
      className={`section ${styles.section}`}
      style={{
        backgroundImage:
          variant === "default"
            ? "url('https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1870664949-1024x904.jpg')"
            : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {variant === "default" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        />
      )}
      <div
        className="container text-center"
        style={{ position: "relative", zIndex: 1 }}
      >
        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(24px, 3vw, 40px)",
            fontWeight: 400,
            color: variant === "default" ? "#fff" : styles.titleColor,
            marginBottom: "1rem",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              color: variant === "default" ? "rgba(255,255,255,0.8)" : styles.subtitleColor,
              maxWidth: "500px",
              margin: "0 auto 2rem",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}
        <Link
          href={buttonHref}
          className="btn-site-primary"
          style={{
            color: variant === "default" ? "#fff" : undefined,
            borderColor: variant === "default" ? "rgba(255,255,255,0.5)" : undefined,
          }}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
