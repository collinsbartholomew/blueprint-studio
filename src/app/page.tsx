import HomeHero from "@/components/sections/HomeHero";
import HomePhilosophy from "@/components/sections/HomePhilosophy";
import HomeFounder from "@/components/sections/HomeFounder";
import HomeServices from "@/components/sections/HomeServices";
import HomePortfolio from "@/components/sections/HomePortfolio";
import HomeReviews from "@/components/sections/HomeReviews";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePhilosophy />
      <HomeFounder />
      <HomeServices />
      <HomePortfolio />
      <HomeReviews />
      <section className="py-8" style={{ borderBottom: "1px solid var(--site-border)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              "https://minnaro.vamtam.com/wp-content/uploads/2025/05/ID-logo-WHITE-1-768x278-1.png",
              "https://minnaro.vamtam.com/wp-content/uploads/2025/05/drum-shapes-logo-png-768x548.png",
              "https://minnaro.vamtam.com/wp-content/uploads/2025/05/logo-e1727835153363.png",
              "https://minnaro.vamtam.com/wp-content/uploads/2025/05/BQ-logo-white-768x326-1.png",
              "https://minnaro.vamtam.com/wp-content/uploads/2025/05/1-Medium-768x271.png",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Featured in"
                style={{ height: 32, objectFit: "contain", opacity: 0.6 }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
