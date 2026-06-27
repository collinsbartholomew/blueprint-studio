interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  label?: string;
  minHeight?: string;
}

export default function PageHero({ title, subtitle, bgImage, label, minHeight }: PageHeroProps) {
  return (
    <section
      className="page-hero"
      style={minHeight ? { minHeight } : {}}
    >
      {bgImage && (
        <>
          <div
            className="page-hero-bg"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="page-hero-overlay" />
        </>
      )}
      <div className="container page-hero-content">
        {label && (
          <div className="section-label">
            <span className="section-label-line" />
            <span className="section-label-text">{label}</span>
          </div>
        )}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
