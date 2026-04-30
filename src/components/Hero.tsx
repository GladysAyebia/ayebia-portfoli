"use client";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./Hero.module.css";

const roles = [
  "Frontend Developer",
  "Mobile App Developer",
  "Community Manager",
  "React & Next.js Engineer",
  "Flutter Developer",
];

const techBadges = [
  { label: "React", color: "#61DAFB" },
  { label: "Next.js", color: "#fff" },
  { label: "Flutter", color: "#54C5F8" },
  { label: "Node.js", color: "#68A063" },
  { label: "SQL", color: "#F59E0B" },
  { label: "Expo", color: "#000" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing animation
  useEffect(() => {
    const role = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Glow blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={`container ${styles.inner}`}>
        {/* Left: Text */}
        <div className={styles.content}>
          <div className={styles.availBadge}>
            <span className={styles.dot} />
            Available for opportunities
          </div>

          <h1 className={styles.heading}>
            Hi, I&apos;m{" "}
            <span className={styles.name}>Gladys Ayebia</span>
            <br />
            <span className={styles.name}>Ashong</span>
          </h1>

          <div className={styles.roleRow}>
            <span className={styles.roleText}>{displayed}</span>
            <span className={styles.cursor} />
          </div>

          <p className={styles.bio}>
            A passionate <strong>Frontend & Mobile Developer</strong> based in{" "}
            <strong>Accra, Ghana</strong> — transforming ideas into clean,
            user-friendly interfaces and building communities with energy and
            purpose.
          </p>

          <div className={styles.ctas}>
            <a href="#projects" className="btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a
              href="/cv.pdf"
              download
              className="btn-outline"
            >
              <FiDownload /> Download CV
            </a>
          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/gladysayebia"
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gladys-ayebia-ashong-44a73b248/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:gladysashong17@gmail.com"
              className={styles.socialIcon}
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        {/* Right: Visual */}
        <div className={styles.visual}>
          <div className={styles.orbitRing}>
            {techBadges.map((badge, i) => (
              <div
                key={badge.label}
                className={styles.orbitBadge}
                style={{
                  animationDelay: `${-i * (8 / techBadges.length)}s`,
                  animationDuration: "8s",
                }}
              >
                <span
                  className={styles.badgePill}
                  style={{ borderColor: `${badge.color}40`, color: badge.color }}
                >
                  {badge.label}
                </span>
              </div>
            ))}

            {/* Center avatar */}
            <div className={styles.avatarCenter}>
              <div className={styles.avatarRing} />
              <div className={styles.avatarInitials}>GA</div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className={`${styles.statCard} ${styles.statCard1}`}>
            <span className={styles.statNum}>6+</span>
            <span className={styles.statLabel}>Projects Shipped</span>
          </div>
          <div className={`${styles.statCard} ${styles.statCard2}`}>
            <span className={styles.statNum}>2🏆</span>
            <span className={styles.statLabel}>Hackathon Wins</span>
          </div>
          <div className={`${styles.statCard} ${styles.statCard3}`}>
            <span className={styles.statNum}>∞</span>
            <span className={styles.statLabel}>Passion for Code</span>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {[...Array(2)].map((_, idx) => (
            <span key={idx} className={styles.marqueeInner}>
              {["React", "Next.js", "Flutter", "Node.js", "SQL", "Expo", "Community Management", "Social Media", "Mentoring", "Robotics", "Machine Learning", "Graphic Design"].map(
                (s) => (
                  <span key={s} className={styles.marqueeItem}>
                    <span className={styles.marqueeDot}>✦</span> {s}
                  </span>
                )
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
