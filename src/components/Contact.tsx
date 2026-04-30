"use client";
import { useEffect, useRef, useState } from "react";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import styles from "./Contact.module.css";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto with form data pre-filled
    const mailto = `mailto:gladysashong17@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Enquiry")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="contact" ref={sectionRef} className={`${styles.contact} dot-bg`}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind, or just want to say hi? I&apos;d love to
            hear from you — let&apos;s build something great.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Info */}
          <div className={`${styles.infoCol} reveal-left`}>
            <div className={`glass-card ${styles.infoCard}`}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <p className={styles.infoText}>
                Open to frontend & mobile development roles, freelance projects,
                and community / team collaboration.
              </p>

              <div className={styles.infoItems}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}><FiMail /></span>
                  <a href="mailto:gladysashong17@gmail.com" className={styles.infoLink}>
                    gladysashong17@gmail.com
                  </a>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}><FiMapPin /></span>
                  <span>Accra, Ghana</span>
                </div>
              </div>

              <div className={styles.socials}>
                <a
                  href="https://www.linkedin.com/in/gladys-ayebia-ashong-44a73b248/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialBtn}
                  aria-label="LinkedIn"
                  id="contact-linkedin"
                >
                  <FiLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/gladysayebia"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialBtn}
                  aria-label="GitHub"
                  id="contact-github"
                >
                  <FiGithub size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:gladysashong17@gmail.com"
                  className={styles.socialBtn}
                  aria-label="Email"
                  id="contact-email"
                >
                  <FiMail size={18} />
                  <span>Email</span>
                </a>
              </div>

              {/* Decorative glow */}
              <div className={styles.infoGlow} />
            </div>
          </div>

          {/* Right: Form */}
          <div className={`${styles.formCol} reveal-right`}>
            <form className={`glass-card ${styles.form}`} onSubmit={handleSubmit} id="contact-form">
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className={styles.input}
                    value={form.name}
                    onChange={update("name")}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email-field" className={styles.label}>Email Address</label>
                  <input
                    id="contact-email-field"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className={styles.input}
                    value={form.email}
                    onChange={update("email")}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-subject" className={styles.label}>Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="Project Collaboration"
                  className={styles.input}
                  value={form.subject}
                  onChange={update("subject")}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${styles.input} ${styles.textarea}`}
                  value={form.message}
                  onChange={update("message")}
                />
              </div>

              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                id="contact-submit"
              >
                {sent ? "✓ Message Sent!" : (
                  <><FiSend /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
