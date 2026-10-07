import Link from "next/link";
import { getWorks } from "@/data/works";

export const metadata = {
  title: "Обо мне",
  description: "Веб-разработчик. Пишу код с 2019, работаю на заказ с 2020.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const count = getWorks().length;

  return (
    <>
      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-hero-left">
            <h1>Мне <em>18</em>. Семь лет пишу код, четыре — делаю это на заказ.</h1>
            <p className="about-hero-desc">Веб-разработчик из Москвы. Начинал с учебных проектов в 2019, с 2020 беру заказы — сначала мелкие лендинги, сейчас делаю CRM, ботов, PWA и веб-приложения. Работаю один, без посредников.</p>
          </div>
          <div className="about-hero-meta">
            <div className="meta-row"><span className="label">Локация</span><span className="value">Москва · GMT+3</span></div>
            <div className="meta-row"><span className="label">Опыт</span><span className="value">с 2019</span></div>
            <div className="meta-row"><span className="label">Стек</span><span className="value">PHP · Node · React</span></div>
            <div className="meta-row"><span className="label">Проектов</span><span className="value">{count}</span></div>
            <div className="meta-row"><span className="label">Статус</span><span className="value"><span className="status-dot"></span>Свободен</span></div>
          </div>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container about-intro-grid">
          <div className="about-intro-text">
            <span className="eyebrow">Подход</span>
            <p>Не беру проекты, в которых не разбираюсь. Если задача не моя — скажу сразу и подскажу, к кому обратиться.</p>
            <p>В работе ценю скорость и понятность: клиент всегда знает, на каком этапе проект. Пишу код так, чтобы его можно было поддерживать.</p>
          </div>
          <div className="about-intro-text">
            <span className="eyebrow">Что делаю</span>
            <ul className="about-list">
              <li>Лендинги и промо-сайты</li>
              <li>Интернет-магазины и каталоги</li>
              <li>CRM-системы и внутренние инструменты</li>
              <li>Telegram и MAX боты</li>
              <li>PWA-приложения для сотрудников</li>
              <li>Интеграции: 1С, CRM, карты, платёжки</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="container">
          <span className="eyebrow">Стек</span>
          <h2 className="skills-heading">Чем <em>работаю</em> каждый день</h2>
          <div className="skills-grid">
            <div className="skills-col"><h3>Frontend</h3><ul><li>JavaScript</li><li>React</li><li>Next.js</li><li>HTML / CSS</li><li>Tailwind CSS</li><li>PWA / Service Worker</li></ul></div>
            <div className="skills-col"><h3>Backend</h3><ul><li>PHP</li><li>Laravel</li><li>Node.js</li><li>Express.js</li><li>NestJS</li></ul></div>
            <div className="skills-col"><h3>Данные</h3><ul><li>PostgreSQL</li><li>MySQL</li><li>Redis</li><li>WebSocket</li><li>REST API</li></ul></div>
            <div className="skills-col"><h3>Интеграции</h3><ul><li>Telegram Bot API</li><li>MAX Bot API</li><li>Яндекс.Карты API</li><li>Платёжные системы</li></ul></div>
            <div className="skills-col"><h3>Инструменты</h3><ul><li>Git</li><li>Docker</li><li>Figma</li><li>Nginx</li></ul></div>
            <div className="skills-col"><h3>Учу сейчас</h3><ul><li>TypeScript</li><li>Микросервисы</li><li>Тестирование</li></ul></div>
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="container">
          <span className="eyebrow">Опыт</span>
          <h2 className="skills-heading">Путь от <em>первой строчки</em> к продакшену</h2>
          <div className="timeline">
            {[
              { year: "2019", meta: "старт", title: "Первые шаги в вебе", text: "Начал с HTML и CSS — вёрстка простых страниц, учебные макеты. Дальше — JavaScript: калькуляторы, todo-листы, мелкие игры в браузере." },
              { year: "2020", meta: "первый заказ", title: "Первый фриланс", text: "Взял первый заказ — лендинг для локального бизнеса. Дальше — PHP, WordPress, типовые магазины на готовых CMS. Учился работать с клиентом." },
              { year: "2021", meta: "PHP / Laravel", title: "Переход с CMS на фреймворки", text: "Собрал несколько проектов на чистом PHP, потом перешёл на Laravel. Делал интернет-магазины с каталогом, корзиной и оплатой." },
              { year: "2022", meta: "первые CRM", title: "Внутренние системы для бизнеса", text: "CRM для отдела продаж, дашборды, админки для менеджеров. Разобрался с ролями и правами, экспортом в Excel, отчётами." },
              { year: "2023", meta: "React / Next.js", title: "Современный фронтенд", text: "Перешёл с jQuery и ванильного JS на React. Дальше — Next.js: SSR, оптимизация, сборка." },
              { year: "2024", meta: "PWA + CRM", title: "PWA-приложение для ритуальных агентов", text: "Первый крупный проект полного цикла: PWA для сотрудников + CRM с админ-панелью. Laravel, JavaScript, MySQL, Service Worker." },
              { year: "2025", meta: "Node.js / real-time", title: "Уход в JavaScript-стек", text: "Express, NestJS, PostgreSQL, Redis, WebSocket. Возможность писать весь проект на одном языке." },
              { year: "2026", meta: "флагманские проекты", title: "CRM, боты и приложения под ключ", text: "Экосистема для службы грузчиков: сайт, боты, приложение, CRM. Два SaaS-продукта для ритуальных агентств." },
            ].map((item) => (
              <div className="timeline-item" key={item.year}>
                <div className="timeline-year">
                  <span className="year">{item.year}</span>
                  <span className="meta">{item.meta}</span>
                </div>
                <div className="timeline-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <span className="eyebrow">Связаться</span>
          <div className="contact-top">
            <div className="contact-top-left">
              <a href="https://t.me/reaction.work" className="big-email">@reaction.work</a>
              <p className="contact-lead">Пишите на email или в мессенджер — отвечаю в течение часа в рабочее время.</p>
            </div>
            <div className="contact-actions">
              <a href="https://t.me/reaction_work" className="btn-accent" target="_blank" rel="noopener">Написать в Telegram</a>
              <a href="mailto:reactionwork0@gmail.com" className="btn-icon" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
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