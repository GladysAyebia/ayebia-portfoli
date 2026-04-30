"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiCode } from "react-icons/fi";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={() => handleNav("#home")}>
          <span className={styles.logoIcon}>
            <FiCode />
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoG}>G</span>ladys
            <span className={styles.logoDot}>.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${active === link.href ? styles.navLinkActive : ""}`}
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className={`btn-primary ${styles.cta}`}
          onClick={() => handleNav("#contact")}
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`${styles.drawerLink} ${active === link.href ? styles.drawerLinkActive : ""}`}
            onClick={() => handleNav(link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className={`btn-primary ${styles.drawerCta}`}
          onClick={() => handleNav("#contact")}
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
