import Link from "next/link";
import { getFeatured, getWorks } from "@/data/works";

export const metadata = {
  title: "reaction.work — Full-stack разработчик",
  description: "Собираю сайты, магазины и веб-приложения. 6 лет в разработке.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const featured = getFeatured(3);
  const total = getWorks().length;
  const showMore = total > featured.length;

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Full-stack<br />разработчик<br /><em>для Вас</em></h1>
            <div className="hero-foot">
              <p>Собираю сайты, интернет-магазины и веб-приложения. 6 лет в разработке. Работаю один — без менеджеров и долгой бюрократии.</p>
              <div className="hero-actions">
                <Link href="/contacts" className="btn-accent">Связаться со мной</Link>
                <a href="https://t.me/reaction_work" className="btn-icon" target="_blank" rel="noopener" aria-label="Telegram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></svg>
                </a>
                <a href="mailto:reactionwork0@gmail.com" className="btn-icon" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/assets/img/hero.webp" alt="REACTION.WORK" />
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="container strip-inner">
          <span className="item"><span className="dot"></span>свободен для проектов</span>
          <span className="item">ответ в течение часа</span>
          <span className="item">от 20% до 50% предоплата</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Услуги</span>
          <div className="services-list">
            <div className="service-row">
              <span className="service-num">01</span>
              <div className="service-body">
                <h3>Сайты под ключ</h3>
                <p>Одностраничники с аналитикой, интеграцией с CRM и адаптивом. Оптимизация скорости загрузки.</p>
              </div>
              <div className="service-price">
                <span className="price-label">от</span>
                <span className="price-value">40 000 ₽</span>
              </div>
            </div>
            <div className="service-row">
              <span className="service-num">02</span>
              <div className="service-body">
                <h3>E-commerce</h3>
                <p>Каталог, корзина, оплата, доставка. Интеграции с 1С, складом и службами доставки.</p>
              </div>
              <div className="service-price">
                <span className="price-label">от</span>
                <span className="price-value">120 000 ₽</span>
              </div>
            </div>
            <div className="service-row">
              <span className="service-num">03</span>
              <div className="service-body">
                <h3>Веб-приложения</h3>
                <p>Личные кабинеты, дашборды, внутренние инструменты и CRM. Сложная логика и безопасность.</p>
              </div>
              <div className="service-price">
                <span className="price-label">по задаче</span>
                <span className="price-value">индивидуально</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Мои работы</span>
          <div className="work-grid">
            {featured.map((w, i) => (
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
            {showMore && (
              <Link href="/works" className="work-card work-card-more">
                <span className="more-label">Все проекты</span>
                <span className="more-value">{total}</span>
                <span className="more-arrow">→</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Обо мне</span>
          <p className="statement">Работаю один, потому что вам нужен <em>человек</em>, а не отдел продаж</p>
          <div className="about-body">
            <p>Мне 18, занимаюсь веб-разработкой с 2019 года. Начинал с учебных проектов, с 2020 беру заказы. Работаю в основном на PHP и JavaScript-стеке: Laravel, Node.js, Express, NestJS, React и Next.js. Делаю лендинги, интернет-магазины, CRM, ботов для Telegram и MAX, PWA-приложения.</p>
            <p>В разработке ценю скорость, доступность и чистый код. Проект всегда веду лично от начала до конца — вы знаете, кто и что делает. Даю гарантию 3 месяца после сдачи. <Link href="/about" className="link-more">подробнее →</Link></p>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <span className="eyebrow">Связаться</span>
          <div className="contact-top">
            <div className="contact-top-left">
              <a href="https://t.me/reaction.work" className="big-email">@reaction.work</a>
              <p className="contact-lead">Пишите на email или в мессенджер — отвечаю в течение часа в рабочее время. Работаю по договору, оплата по факту сдачи.</p>
            </div>
            <div className="contact-actions">
              <a href="https://t.me/reaction_work" className="btn-accent" target="_blank" rel="noopener">Написать в Telegram</a>
              <a href="mailto:reactionwork0@gmail.com" className="btn-icon" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
              </a>
            </div>
          </div>
          <div className="connect-meta">
            <div className="item"><h4>Статус</h4><p><span className="status-dot"></span>Свободен для проектов</p></div>
            <div className="item"><h4>Время ответа</h4><p>В течение часа</p></div>
            <div className="item"><h4>Предоплата</h4><p>От 20% до 50%</p></div>
          </div>
        </div>
      </section>
    </>
  );
}