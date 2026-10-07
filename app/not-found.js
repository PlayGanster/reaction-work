import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="statement">Страница <em>не найдена</em></h1>
        <p className="page-hero-desc">Возможно, ссылка устарела или в адресе ошибка.</p>
        <p><Link href="/" className="link-more">← на главную</Link></p>
      </div>
    </section>
  );
}