import Link from "next/link";
import { getWorks } from "@/data/works";

export const metadata = {
  title: "Мои работы",
  description: "Портфолио: лендинги, CRM, боты, PWA-приложения.",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  const works = getWorks();

  return (
    <>
      <section className="works-hero">
        <div className="container works-hero-inner">
          <div className="works-hero-left">
            <h1>Мои <em>работы</em></h1>
            <p className="works-hero-desc">Реальные проекты: от лендингов для локального бизнеса до CRM-систем с real-time, ботами и интеграциями.</p>
          </div>
          <div className="works-hero-meta">
            <div className="meta-row"><span className="label">Проектов</span><span className="value">{works.length}</span></div>
            <div className="meta-row"><span className="label">Период</span><span className="value">2019 — 2026</span></div>
            <div className="meta-row"><span className="label">Направления</span><span className="value">Веб · CRM · Боты</span></div>
            <div className="meta-row"><span className="label">Статус</span><span className="value"><span className="status-dot"></span>Свободен</span></div>
          </div>
        </div>
      </section>

      <section className="section works-list-section">
        <div className="container">
          <div className="work-grid">
            {works.map((w, i) => (
              <Link key={w.id} href={`/work/${w.id}`} className="work-card">
                <div className="work-card-media">
                  <img src={w.image} alt={w.title} loading="lazy" />
                </div>
                <div className="work-card-meta">
                  <span className="num">{String(i + 1).padStart(3, "0")}</span>
                  <span className="year">{w.year}</span>
                </div>
                <h3>{w.title}</h3>
                <p className="desc">{w.description}</p>
                <span className="stack">
                  {Array.isArray(w.stack) ? w.stack.join(" · ") : w.stack}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}