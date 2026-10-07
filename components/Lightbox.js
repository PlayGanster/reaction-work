"use client";
import { useEffect, useState } from "react";

export default function Lightbox() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    function onClick(e) {
      const trigger = e.target.closest("[data-lightbox-src]");
      if (!trigger) return;
      e.preventDefault();

      // Собираем триггеры В МОМЕНТ КЛИКА
      const triggers = Array.from(
        document.querySelectorAll("[data-lightbox-src]")
      );
      const collected = triggers
        .map((el) => ({
          src: el.getAttribute("data-lightbox-src"),
          alt: el.getAttribute("data-lightbox-alt") || "",
        }))
        .filter((it) => it.src);

      const src = trigger.getAttribute("data-lightbox-src");
      const index = collected.findIndex((it) => it.src === src);

      setItems(collected);
      setCurrent(index >= 0 ? index : 0);
      setOpen(true);
      document.body.style.overflow = "hidden";
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  function close() {
    setOpen(false);
    document.body.style.overflow = "";
  }

  function go(delta) {
    if (items.length < 2) return;
    setCurrent((c) => (c + delta + items.length) % items.length);
  }

  if (!open || !items[current]) return null;

  return (
    <div
      className="lightbox is-open"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button
        className="lightbox-close"
        onClick={close}
        aria-label="Закрыть"
      >
        ×
      </button>
      <button
        className="lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        aria-label="Предыдущий"
      >
        ←
      </button>
      <button
        className="lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        aria-label="Следующий"
      >
        →
      </button>
      <div
        className="lightbox-stage"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <img
          className="lightbox-img"
          src={items[current].src}
          alt={items[current].alt}
        />
        <div className="lightbox-counter">
          <span>{current + 1}</span> / <span>{items.length}</span>
        </div>
      </div>
    </div>
  );
}