export const metadata = {
  title: "Контакты",
  description: "Связаться с reaction.work: Telegram, email. Москва, GMT+3.",
  alternates: { canonical: "/contacts" },
};

export default function ContactsPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow">Контакты</span>
          <h1>Напишите — и я <em>отвечу</em> в течение часа</h1>
          <p className="contact-hero-desc">Опишите задачу в двух-трёх предложениях: что нужно сделать, в какие сроки, есть ли бюджет.</p>
        </div>
      </section>

      <section className="section contact-channels">
        <div className="container">
          <div className="channels-grid">
            <a href="https://t.me/reaction_work" className="channel" target="_blank" rel="noopener">
              <div className="channel-head"><span className="channel-label">Telegram</span><span className="channel-arrow">↗</span></div>
              <div className="channel-value">@reaction_work</div>
              <p className="channel-desc">Самый быстрый способ. Отвечаю в течение часа в рабочее время.</p>
            </a>
            <a href="mailto:reactionwork0@gmail.com" className="channel">
              <div className="channel-head"><span className="channel-label">Email</span><span className="channel-arrow">↗</span></div>
              <div className="channel-value">reactionwork0@gmail.com</div>
              <p className="channel-desc">Для формальных запросов, ТЗ и документов.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-meta-section">
        <div className="container">
          <div className="contact-meta-grid">
            <div className="meta-item"><span className="meta-label">Локация</span><span className="meta-value">Москва · GMT+3</span></div>
            <div className="meta-item"><span className="meta-label">Время ответа</span><span className="meta-value">В течение часа</span></div>
            <div className="meta-item"><span className="meta-label">Формат</span><span className="meta-value">Предоплата</span></div>
            <div className="meta-item"><span className="meta-label">Статус</span><span className="meta-value"><span className="status-dot"></span>Свободен</span></div>
          </div>
          <div className="contact-cta">
            <p>Не хотите писать первым? Оставьте заявку — я напишу сам.</p>
            <div className="cta-right">
              <a href="https://t.me/reaction_work" className="btn-accent" target="_blank" rel="noopener">Написать в Telegram</a>
              <a href="mailto:reactionwork0@gmail.com" className="btn-icon" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}