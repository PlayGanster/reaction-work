"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">REACTION.WORK</Link>
        <nav className={`nav ${open ? "open" : ""}`}>
          <Link href="/works" onClick={() => setOpen(false)}>Работы</Link>
          <Link href="/about" onClick={() => setOpen(false)}>Обо мне</Link>
          <Link href="/contacts" onClick={() => setOpen(false)}>Контакты</Link>
        </nav>
        <button
          className="burger"
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}