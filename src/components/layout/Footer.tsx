import Link from "next/link";
import { siteConfig, footerNav } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo-wrapper" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <img
            src="https://minnaro.vamtam.com/wp-content/uploads/2025/05/logo.svg"
            alt="Minnaro"
            style={{ height: 20, filter: "brightness(0) invert(1)" }}
          />
        </div>

        <div className="footer-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div className="footer-col">
            <nav>
              <ul className="footer-links" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 2rem" }}>
                {footerNav.studio.map((item) => (
                  <li key={item.label} style={{ marginTop: 0 }}>
                    <Link href={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="footer-col" style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href={siteConfig.social?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: "var(--color-white-60)", transition: "color 0.2s" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={siteConfig.social?.houzz}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Houzz"
                style={{ color: "var(--color-white-60)", transition: "color 0.2s" }}
              >
                <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z" />
                </svg>
              </a>
              <a
                href={siteConfig.social?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: "var(--color-white-60)", transition: "color 0.2s" }}
              >
                <svg width="20" height="20" viewBox="0 0 320 512" fill="currentColor">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href={siteConfig.social?.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                style={{ color: "var(--color-white-60)", transition: "color 0.2s" }}
              >
                <svg width="20" height="20" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built by <a href="https://omegarevelation.com" target="_blank" rel="noopener noreferrer" className="footer-legal-link">Omega Revelation</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
