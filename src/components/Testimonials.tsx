"use client";
import { useEffect, useRef, useState } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Andrews Nii Awuley Lartey",
    title: "Angel Investor | Serial Entrepreneur | Wealth Manager",
    relation: "Managed Gladys directly · Dec 2025",
    initials: "AL",
    color: "#38BDF8",
    quote:
      "Working with Gladys has been one of the most fulfilling moments in my career journey so far. She is dedicated, willing to learn, proactive, creative and full of energy. Gladys can work under pressure and will deliver. Gladys communicates clearly and provides sound advise. Gladys is a team player who manages the expectations of her team, sets goals, and gets everyone to follow through. She is a great blend of technical acumen (coding, software, graphic design, etc) and people person. She is amazing.",
  },
  {
    name: "Kelvin Fosu",
    title: "Learning Engineer | Gemini Certified Educator | GenAi 4 Ed | EdTech | Research",
    relation: "Worked on the same team · Nov 2025",
    initials: "KF",
    color: "#A855F7",
    quote:
      "Gladys has a positive aura, she's hardworking and has an astute personality. She's never disappointed when it comes to projects and her assigned roles. She excels in both technical and theoretical tasks and I would always want to work with her on any project that comes up. Wouldn't you want to use her services? Trust me, you'll love it!",
  },
  {
    name: "Henry Senyegbe Agbemabiese",
    title: "Founder & CEO @ CODE CLUB ACADEMY | Edtech/Healthtech Innovator & Speaker",
    relation: "Gladys's client · Nov 2025",
    initials: "HS",
    color: "#4ADE80",
    quote:
      "I've had the pleasure of working with Gladys Ayebia Ashong at Code Club Academy, where she serves as our Front-End App Developer. Gladys consistently demonstrates creativity, strong technical skills, and a remarkable attention to detail. Her ability to transform ideas into clean, user-friendly interfaces makes her an invaluable member of our team. She is dedicated, reliable, and always eager to learn and improve. I confidently recommend Gladys for any front-end development role.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((idx + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 250);
  };

  // Auto-play
  useEffect(() => {
    const t = setInterval(() => goTo(active + 1), 6000);
    return () => clearInterval(t);
  }, [active]);

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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" ref={sectionRef} className={styles.section}>
      {/* background shapes */}
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />

      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">Kind Words</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Recommendations from colleagues, managers, and clients who have
            worked alongside Gladys.
          </p>
        </div>

        <div className={`${styles.carousel} reveal`}>
          {/* Stars */}
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className={styles.star} />
            ))}
          </div>

          {/* Quote */}
          <div className={`${styles.quoteWrap} ${animating ? styles.fade : ""}`}>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
          </div>

          {/* Author */}
          <div className={styles.author}>
            <div
              className={styles.avatar}
              style={{
                background: `linear-gradient(135deg, ${t.color}40, ${t.color}80)`,
                borderColor: `${t.color}60`,
                color: t.color,
              }}
            >
              {t.initials}
            </div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{t.name}</span>
              <span className={styles.authorTitle}>{t.title}</span>
              <span className={styles.authorRelation}>{t.relation}</span>
            </div>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button
              className={styles.btn}
              onClick={() => goTo(active - 1)}
              aria-label="Previous testimonial"
              id="testimonial-prev"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  id={`testimonial-dot-${i}`}
                  style={i === active ? { background: t.color } : {}}
                />
              ))}
            </div>

            <button
              className={styles.btn}
              onClick={() => goTo(active + 1)}
              aria-label="Next testimonial"
              id="testimonial-next"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
