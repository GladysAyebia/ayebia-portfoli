import { FiCode, FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import styles from "./Footer.module.css";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBar} />
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoIcon}><FiCode /></span>
              <span className={styles.logoText}>
                <span className={styles.logoG}>G</span>ladys
                <span className={styles.logoDot}>.</span>
              </span>
            </a>
            <p className={styles.tagline}>
              Frontend & Mobile Developer based in Accra, Ghana. Building
              clean, impactful digital experiences — one commit at a time.
            </p>
            <div className={styles.socials}>
              <a
                href="https://github.com/gladysayebia"
                target="_blank"
                rel="noreferrer"
                className={styles.social}
                aria-label="GitHub"
              >
                <FiGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/gladys-ayebia-ashong-44a73b248/"
                target="_blank"
                rel="noreferrer"
                className={styles.social}
                aria-label="LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href="mailto:gladysashong17@gmail.com"
                className={styles.social}
                aria-label="Email"
              >
                <FiMail size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={styles.link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <p className={styles.contactText}>
              Open to new opportunities, collaborations, and conversations.
            </p>
            <a href="#contact" className="btn-primary" style={{ fontSize: "0.85rem", padding: "10px 24px" }}>
              Send a Message
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Gladys Ayebia Ashong. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <FiHeart className={styles.heart} /> in Accra, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
