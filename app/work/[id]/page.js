import Link from "next/link";
import { notFound } from "next/navigation";
import { findWork, getNeighbors, getWorks } from "@/data/works";

export async function generateStaticParams() {
  return getWorks().map((w) => ({ id: w.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const work = findWork(id);
  if (!work) return {};
  return {
    title: work.seo?.title || work.title,
    description: work.seo?.description || work.description,
    alternates: { canonical: `/work/${work.id}` },
    openGraph: {
      images: [work.seo?.og_image || work.cover || work.image],
    },
  };
}

export default async function WorkPage({ params }) {
  const { id } = await params;
  const work = findWork(id);
  if (!work) notFound();

  const [prev, next] = getNeighbors(id);
  const stack = Array.isArray(work.stack) ? work.stack : work.stack.split(",");
  const hasCover = Boolean(work.cover);

  return (
    <article className="work-page">
      <section className="work-hero">
        <div className="container">
          <Link href="/works" className="back-link">← Все работы</Link>
          <div className="work-hero-meta">
            <span>{work.year}</span>
            <span className="dot"></span>
            <span>{work.role || "Full-stack разработчик"}</span>
            {work.duration && (<><span className="dot"></span><span>{work.duration}</span></>)}
          </div>
          <h1 className="work-hero-title">{work.title}</h1>
          {work.subtitle && <p className="work-hero-subtitle">{work.subtitle}</p>}
        </div>
      </section>

      {hasCover && (
        <section className="work-cover-section">
          <div className="container">
            <button
              type="button"
              className="work-cover lightbox-trigger"
              data-lightbox-src={work.cover}
              data-lightbox-alt={work.title}
            >
              <img src={work.cover} alt={work.title} />
            </button>
          </div>
        </section>
      )}

      <section className="work-body-section">
        <div className="container work-body">
          <aside className="work-sidebar">
            <div className="work-fact">
              <span className="work-fact-label">Клиент</span>
              <span className="work-fact-value">{work.client || "—"}</span>
            </div>
            <div className="work-fact">
              <span className="work-fact-label">Год</span>
              <span className="work-fact-value">{work.year}</span>
            </div>
            {work.role && (
              <div className="work-fact">
                <span className="work-fact-label">Роль</span>
                <span className="work-fact-value">{work.role}</span>
              </div>
            )}
            {work.duration && (
              <div className="work-fact">
                <span className="work-fact-label">Срок</span>
                <span className="work-fact-value">{work.duration}</span>
              </div>
            )}
            {stack.length > 0 && (
              <div className="work-fact">
                <span className="work-fact-label">Стек</span>
                <div className="work-tags">
                  {stack.map((t) => (
                    <span key={t} className="work-tag">{t.trim()}</span>
                  ))}
                </div>
              </div>
            )}
            {work.links?.demo && (
              <div className="work-fact">
                <span className="work-fact-label">Ссылка</span>
                <a href={work.links.demo} target="_blank" rel="noopener" className="work-fact-link">Открыть ↗</a>
              </div>
            )}
          </aside>

          <div
            className="work-content"
            dangerouslySetInnerHTML={{ __html: work.content }}
          />
        </div>
      </section>

      {work.gallery && work.gallery.length > 0 && (
        <section className="work-gallery-section">
          <div className="container">
            <span className="eyebrow">Скриншоты</span>
            <div className="work-gallery">
              {work.gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`work-gallery-item lightbox-trigger ${i === 0 ? "is-wide" : ""}`}
                  data-lightbox-src={src}
                  data-lightbox-alt={`${work.title} — скриншот ${i + 1}`}
                >
                  <img src={src} alt={`${work.title} — скриншот ${i + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {(prev || next) && (
        <section className="work-nav-section">
          <div className="container">
            <span className="eyebrow">Другие работы</span>
            <div className="work-nav">
              {prev ? (
                <Link href={`/work/${prev.id}`} className="work-nav-card">
                  <div className="work-nav-media"><img src={prev.image} alt={prev.title} loading="lazy" /></div>
                  <div className="work-nav-label">← Предыдущая</div>
                  <div className="work-nav-title">{prev.title}</div>
                </Link>
              ) : <div></div>}
              {next && (
                <Link href={`/work/${next.id}`} className="work-nav-card work-nav-card-right">
                  <div className="work-nav-media"><img src={next.image} alt={next.title} loading="lazy" /></div>
                  <div className="work-nav-label">Следующая →</div>
                  <div className="work-nav-title">{next.title}</div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}