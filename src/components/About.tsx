"use client";
import { useEffect, useRef } from "react";
import { FiMapPin, FiMail, FiAward, FiUsers, FiStar } from "react-icons/fi";
import styles from "./About.module.css";

const stats = [
  { icon: <FiAward />, num: "2", label: "Hackathon Wins" },
  { icon: <FiStar />, num: "6+", label: "Projects Completed" },
  { icon: <FiUsers />, num: "4+", label: "Teams Collaborated" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`${styles.about} dot-bg`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Avatar + stats */}
          <div className={`${styles.leftCol} reveal-left`}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatarRingOuter} />
              <div className={styles.avatarRingInner} />
              <div className={styles.avatarBox}>
                <span className={styles.avatarLetters}>GA</span>
                <div className={styles.avatarGlow} />
              </div>
              <div className={styles.expBadge}>
                <span className={styles.expNum}>2+</span>
                <span className={styles.expLabel}>Years Experience</span>
              </div>
            </div>

            {/* Stat chips */}
            <div className={styles.statsRow}>
              {stats.map((s) => (
                <div key={s.label} className={`glass-card ${styles.statChip}`}>
                  <span className={styles.statIcon}>{s.icon}</span>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className={`${styles.rightCol} reveal-right`}>
            <span className="section-tag">About Me</span>
            <h2 className="section-title">
              Passionate Developer.<br />Natural Connector.
            </h2>
            <p className={styles.text}>
              I&apos;m <strong>Gladys Ayebia Ashong</strong>, a frontend and mobile
              developer based in <strong>Accra, Ghana</strong>. I&apos;m currently pursuing
              a Bachelor of Engineering in Computer Engineering at
              <strong> Accra Institute of Technology</strong>.
            </p>
            <p className={styles.text}>
              I love transforming complex ideas into clean, intuitive interfaces — from
              responsive web apps built with <strong>React & Next.js</strong> to
              cross-platform mobile experiences with <strong>Flutter & Expo</strong>.
              Outside of code, I bring teams together, manage communities, and communicate
              with genuine passion.
            </p>
            <p className={styles.text}>
              I&apos;ve won <strong>two hackathons</strong> (Devpost & Bite-Sized Market),
              mentored students in STEM, and consistently delivered across frontend,
              design, and community roles. I am described by colleagues as
              <em> &quot;dedicated, creative, and full of energy.&quot;</em>
            </p>

            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <FiMapPin className={styles.infoIcon} />
                <span>Accra, Ghana</span>
              </div>
              <div className={styles.infoItem}>
                <FiMail className={styles.infoIcon} />
                <span>gladysashong17@gmail.com</span>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <a href="#contact" className="btn-primary">
                Let&apos;s Connect
              </a>
              <a
                href="https://www.linkedin.com/in/gladys-ayebia-ashong-44a73b248/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
