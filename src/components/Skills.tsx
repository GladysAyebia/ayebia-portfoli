"use client";
import { useEffect, useRef, useState } from "react";
import {
  FiCode, FiSmartphone, FiServer, FiStar, FiUsers,
} from "react-icons/fi";
import styles from "./Skills.module.css";

const categories = [
  {
    icon: <FiCode />,
    label: "Frontend",
    color: "#38BDF8",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    icon: <FiSmartphone />,
    label: "Mobile",
    color: "#A855F7",
    skills: [
      { name: "Flutter", level: 80 },
      { name: "Expo", level: 78 },
      { name: "React Native", level: 75 },
    ],
  },
  {
    icon: <FiServer />,
    label: "Backend & Data",
    color: "#F59E0B",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 75 },
      { name: "SQL", level: 72 },
    ],
  },
  {
    icon: <FiStar />,
    label: "Other Tech",
    color: "#4ADE80",
    skills: [
      { name: "Python", level: 70 },
      { name: "Machine Learning", level: 60 },
      { name: "VEX Robotics", level: 75 },
      { name: "Canva / Design", level: 85 },
    ],
  },
  {
    icon: <FiUsers />,
    label: "Soft Skills",
    color: "#F43F5E",
    skills: [
      { name: "Community Management", level: 92 },
      { name: "Team Leadership", level: 88 },
      { name: "Social Media", level: 85 },
      { name: "Mentoring", level: 90 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className={styles.skillItem} ref={barRef}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPct} style={{ color }}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 12px ${color}60`,
            transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className={styles.skills}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A versatile toolkit built across frontend, mobile, backend, and
            beyond — with a human-centric approach to every project.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`glass-card ${styles.catCard} reveal`}
              style={{ transitionDelay: `${ci * 0.1}s` }}
            >
              <div className={styles.catHeader}>
                <span
                  className={styles.catIcon}
                  style={{
                    color: cat.color,
                    background: `${cat.color}18`,
                    boxShadow: `0 0 20px ${cat.color}20`,
                  }}
                >
                  {cat.icon}
                </span>
                <span className={styles.catLabel} style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>

              <div className={styles.skillList}>
                {cat.skills.map((s) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    color={cat.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
