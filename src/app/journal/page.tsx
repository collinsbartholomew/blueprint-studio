import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { journalPosts } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description: "Thoughts, process and inspiration — behind the spaces we create.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        title="Journal"
        subtitle="Thoughts, process and inspiration — behind the spaces we create."
        bgImage="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1699468388.jpg"
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
            {journalPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
                className="journal-card"
              >
                <div style={{ overflow: "hidden", aspectRatio: "3/4" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--site-text-light)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {post.category}
                  </p>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: "22px",
                      fontWeight: 400,
                      color: "var(--site-text)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "var(--site-text-light)", lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .journal-card:hover img { transform: scale(1.05); }
        `}</style>
      </section>
    </>
  );
}
