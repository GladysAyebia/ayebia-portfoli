"use client";
import { useEffect, useRef } from "react";
import { FiExternalLink, FiGithub, FiAward } from "react-icons/fi";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "ImoScope",
    subtitle: "AI Image Description PWA",
    desc: "An accessibility-focused progressive web app that uses AI to describe images for visually impaired users. Built with React and connected to a vision API backend.",
    link: "https://image-description-app-frontend.vercel.app/",
    tags: ["React", "PWA", "AI", "Accessibility"],
    color: "#38BDF8",
    emoji: "🔍",
  },
  {
    title: "Sisi's Online Shop",
    subtitle: "E-commerce Platform",
    desc: "A fully responsive online clothing and accessories store with product listings, filtering, and a seamless shopping experience built with modern web technologies.",
    link: "https://sisi-s-online-clothing.vercel.app/",
    tags: ["React", "E-commerce", "CSS"],
    color: "#F43F5E",
    emoji: "👗",
  },
  {
    title: "Course Registration",
    subtitle: "Academic Registration Platform",
    desc: "An online course registration website enabling students to browse, select, and enrol in academic courses — with a clean, intuitive UI.",
    link: "https://course-registration-website.vercel.app/",
    tags: ["React", "UI/UX", "Academic"],
    color: "#A855F7",
    emoji: "🎓",
  },
  {
    title: "Scripture & Spirit",
    subtitle: "Podcast Website",
    desc: "A beautifully designed podcast website built with React + Vite featuring episode listings, audio player integration, and a spiritual aesthetic.",
    link: "https://scripture-and-spirit-podcast.vercel.app/",
    tags: ["React", "Vite", "Audio", "Design"],
    color: "#F59E0B",
    emoji: "🎙️",
  },
  {
    title: "3D Interactive Lessons",
    subtitle: "🏆 Hackathon Winner — Devpost",
    desc: "Award-winning educational platform with immersive 3D interactive lessons built for the Software Education Hacks hackathon. Won first place on Devpost.",
    link: "https://devpost.com/software/3d-interactive",
    isWinner: true,
    tags: ["3D", "Education", "Hackathon", "Winner"],
    color: "#F59E0B",
    emoji: "🎮",
  },
  {
    title: "Edubase",
    subtitle: "🏆 Hackathon Winner — Bite-Sized Market",
    desc: "Award-winning educational platform built and presented at the Bite-Sized Market hackathon. Focused on accessible, structured learning experiences.",
    link: "#",
    isWinner: true,
    tags: ["Education", "Hackathon", "Winner"],
    color: "#4ADE80",
    emoji: "📚",
  },
  {
    title: "ML Salary Predictor",
    subtitle: "Machine Learning Notebook",
    desc: "A machine learning model that predicts salaries based on years of experience, built and documented in Google Colab using Python and scikit-learn.",
    link: "https://colab.research.google.com/drive/1bK6G2gwFZRi1W6JwyAO5w1zHKpbNdU2R",
    tags: ["Python", "ML", "Colab", "Data"],
    color: "#6366F1",
    emoji: "🤖",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el) =>
              el.classList.add("visible")
            );
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className={`${styles.projects} dot-bg`}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">My Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated selection of projects — from AI-powered PWAs to
            award-winning hackathon builds.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card ${styles.card} ${p.isWinner ? styles.winnerCard : ""} reveal`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Top bar */}
              <div className={styles.cardTop} style={{ background: `${p.color}12` }}>
                <span className={styles.emoji}>{p.emoji}</span>
                {p.isWinner && (
                  <span className={styles.winBadge}>
                    <FiAward size={12} /> Winner
                  </span>
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.sub} style={{ color: p.color }}>
                  {p.subtitle}
                </p>
                <p className={styles.desc}>{p.desc}</p>

                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={styles.tag}
                      style={{ color: p.color, borderColor: `${p.color}30`, background: `${p.color}0a` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.liveBtn}
                  style={{
                    background: `${p.color}18`,
                    color: p.color,
                    borderColor: `${p.color}30`,
                  }}
                >
                  <FiExternalLink size={14} /> Live Demo
                </a>
                <a
                  href="https://github.com/gladysayebia"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.ghBtn}
                  aria-label="GitHub"
                >
                  <FiGithub size={16} />
                </a>
              </div>

              {/* Glow on hover */}
              <div
                className={styles.cardGlow}
                style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}18, transparent 60%)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
