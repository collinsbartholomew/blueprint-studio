import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { testimonials } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read what our clients say about working with Minnaro.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Reviews"
        subtitle="Personal spaces. Shared experiences."
        bgImage="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1994347902.jpg"
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  padding: "3rem 0",
                  borderBottom: index < testimonials.length - 1 ? "1px solid var(--site-border)" : "none",
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="var(--site-primary)"
                  style={{ marginBottom: "1.5rem" }}
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <p
                  style={{
                    fontSize: "18px",
                    color: "var(--site-text)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "var(--site-text)",
                    }}
                  >
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
