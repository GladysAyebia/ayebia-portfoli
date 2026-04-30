"use client";
import { useEffect, useRef } from "react";
import { FiBriefcase, FiHeart } from "react-icons/fi";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "STEM Educator & Web Developer",
    company: "Bountiful Technologies Co. Ltd.",
    period: "June 2025 – September 2025",
    type: "Full-time",
    icon: <FiBriefcase />,
    desc: "Work on frontend development for a variety of projects including internal initiatives, newsletters, website updates and training tools. Design and implement user interfaces that improve usability, functionality, and overall UX across multiple platforms.",
    tags: ["WordPress", "Newsletter Design", "Frontend", "VEX Robotics", "STEM tutor", "HTML/CSS"],
    color: "#38BDF8",
  },
  {
    role: "Frontend Developer (Volunteer)",
    company: "MentorXi",
    period: "March 2025 – Present",
    type: "Volunteer",
    icon: <FiHeart />,
    desc: "Volunteering as a frontend developer helping build mentor-mentee platform features, ensuring clean and accessible UI for students and professionals connecting through the platform.",
    tags: ["React", "UI/UX", "Community"],
    color: "#A855F7",
  },
  {
    role: "Frontend Developer",
    company: "ShapezMpier",
    period: "Nov 2024 – February 2026",
    type: "Part-Time",
    icon: <FiBriefcase />,
    isWinner: true,
    desc: "Focused on frontend development for hackathons and client contracts, designing and implementing user interfaces that improve both functionality and user experience. Won the Software Education Hacks hackathon with a 3D Interactive project.",
    tags: ["React", "3D", "Hackathon"],
    color: "#F59E0B",
  },
  {
    role: "Web & App Developer",
    company: "Freelancing",
    period: "Sept 2024 – Present",
    type: "Freelance",
    icon: <FiBriefcase />,
    desc: "Providing frontend development services for clients, building responsive, backend ready, dynamic web and mobile applications. Specialising in, Flutter, React, JavaScript, and modern frontend frameworks.",
    tags: ["React", "Node.js", "Front-stack"],
    color: "#4ADE80",
  },
  {
    role: "Community Manager Intern",
    company: "Nadital",
    period: "Nov 2024 – Jan 2025",
    type: "Internship",
    icon: <FiBriefcase />,
    desc: "Responsible for web design and development, managing website content, and creating digital marketing strategies to boost brand visibility. Also designed social media visuals and content calendars.",
    tags: ["Community management", "Social Media strategist", "Web Design", "Graphic Design", "Social Media Content manager"],
    color: "#F43F5E",
  },
  {
    role: "Graphic Designer & Progression Mentor",
    company: "African Science Academy",
    period: "Sept 2023 – Jan 2024",
    type: "Part-time",
    icon: <FiBriefcase />,
    desc: "Developed visual assets including promotional materials, infographics, and presentation designs. Mentored students in STEM subjects and supervised robotics projects, providing feedback on critical thinking and problem-solving skills.",
    tags: ["Mentoring", "Design", "Robotics"],
    color: "#6366F1",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) =>
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
    <section id="experience" ref={sectionRef} className={`${styles.exp} dot-bg`}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            A timeline of roles that have shaped my skills, perspective, and
            passion for impactful technology.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`${styles.item} ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Timeline line dot */}
              <div className={styles.lineDot} style={{ background: exp.color, boxShadow: `0 0 16px ${exp.color}80` }} />

              <div className={`glass-card ${styles.card}`}>
                {/* Header */}
                <div className={styles.cardTop}>
                  <span
                    className={styles.cardIcon}
                    style={{ color: exp.color, background: `${exp.color}18` }}
                  >
                    {exp.icon}
                  </span>
                  <div className={styles.cardMeta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span
                      className={styles.typeBadge}
                      style={{ color: exp.color, borderColor: `${exp.color}40`, background: `${exp.color}10` }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company} style={{ color: exp.color }}>
                  {exp.company}
                  {exp.isWinner && (
                    <span className={styles.winnerBadge}>🏆 Hackathon Winner</span>
                  )}
                </p>
                <p className={styles.desc}>{exp.desc}</p>

                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className={styles.tag}
                      style={{ color: exp.color, borderColor: `${exp.color}30`, background: `${exp.color}0a` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Vertical line */}
          <div className={styles.vertLine} />
        </div>
      </div>
    </section>
  );
}
