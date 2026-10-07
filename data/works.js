export const works = [
  {
    id: "funeralflow",
    title: "Лендинг для FuneralFlow",
    subtitle: "SaaS-платформа для ритуальных агентств",
    description: "Лендинг для CRM ритуальных агентств: 8 проблемных ситуаций, блок функций, экономика, тарифы и FAQ.",
    content: `
      <p>FuneralFlow — SaaS-платформа для ритуальных агентств: CRM, учёт заказов, документы, агенты, подписки. Задача — сделать лендинг, который продаёт подписку директорам агентств, а не просто рассказывает «мы умеем».</p>
      <p>Ключевая аудитория — директора ритуальных агентств, у которых 5–30 сотрудников и учёт ведётся в Excel, WhatsApp и бумажных блокнотах. Они не ищут «CRM», они ищут способ перестать терять заказы.</p>
      <p>Как устроен лендинг:</p>
      <ul>
        <li><strong>Hero с демо интерфейса.</strong> Вместо абстрактного текста — скриншот реальной формы заказа.</li>
        <li><strong>«Знакомые ситуации?»</strong> — 8 типовых болей директора агентства.</li>
        <li><strong>«Как FuneralFlow решает эти проблемы»</strong> — 8 функций.</li>
        <li><strong>«Как это работает»</strong> — 4 шага от настройки до контроля.</li>
        <li><strong>Экономика.</strong> Визуальное сравнение: слева — во сколько обходится работа без системы, справа — стоимость подписки.</li>
        <li><strong>Безопасность данных</strong> — SSL, серверы в РФ, резервное копирование, 2FA.</li>
        <li><strong>Тарифы</strong> — три плана с чёткой разницей.</li>
        <li><strong>FAQ</strong> — 4 вопроса, которые реально задают.</li>
      </ul>
      <p>Стек: Next.js + React + Tailwind CSS. Лендинг собран как SPA с серверным рендерингом.</p>
    `,
    year: 2026,
    date: "2026-04-15",
    client: "FuneralFlow",
    role: "Front-end разработчик",
    duration: "2 недели",
    stack: ["NextJS", "React", "Tailwind CSS"],
    image: "/assets/img/works/funeralflow/funeralflow-thumb.webp",
    cover: "/assets/img/works/funeralflow/funeralflow-cover.webp",
    gallery: [
      "/assets/img/works/funeralflow/funeralflow-landing1.webp",
      "/assets/img/works/funeralflow/funeralflow-landing2.webp",
      "/assets/img/works/funeralflow/funeralflow-landing3.webp",
    ],
    links: { demo: "https://funeralflow-landing.vercel.app/" },
    featured: true,
    seo: {
      title: "Лендинг для FuneralFlow — кейс · reaction.work",
      description: "Разработка лендинга для SaaS-платформы ритуальных агентств.",
      og_image: "/assets/img/works/funeralflow/funeralflow-landing1.webp",
    },
  },
  {
    id: "funeralflow-crm",
    title: "CRM FuneralFlow",
    subtitle: "SaaS-платформа для управления ритуальными агентствами",
    description: "CRM для ритуальных агентств: дашборд директора, заказы, агенты, карта в реальном времени, отчёты.",
    content: `
      <p>FuneralFlow — SaaS-платформа для ритуальных агентств. Помимо лендинга я делал сам продукт: CRM, в которой директор агентства видит все заказы, агентов, выручку и активность в одном окне.</p>
      <p>До этого клиенты работали в Excel, WhatsApp и бумажных блокнотах. Задача — собрать дашборд, который отвечает на вопросы за 3 секунды.</p>
      <ul>
        <li><strong>Дашборд директора.</strong> Четыре ключевые метрики.</li>
        <li><strong>Таблица заказов в реальном времени.</strong></li>
        <li><strong>Панель агентов.</strong> Онлайн-статус и локация.</li>
        <li><strong>Агенты на карте.</strong> Реальное время.</li>
        <li><strong>Активность за неделю.</strong> Мини-график.</li>
        <li><strong>Лента событий.</strong> Кто что сделал с точным временем.</li>
        <li><strong>Модуль отчётов.</strong> Экспорт в Excel.</li>
        <li><strong>Роли и доступы.</strong> Директор, менеджер, агент.</li>
      </ul>
      <p>Стек: React, NestJS + PostgreSQL, Redis, WebSocket.</p>
    `,
    year: 2026,
    date: "2026-04-01",
    client: "FuneralFlow",
    role: "Full-stack разработчик",
    duration: "3 месяца",
    stack: ["React", "NestJS", "PostgreSQL", "Redis", "WebSocket"],
    image: "/assets/img/works/funeralflow/funeralflow-crm-thumb.webp",
    cover: "/assets/img/works/funeralflow/funeralflow-crm-cover.webp",
    gallery: [
      "/assets/img/works/funeralflow/funeralflow-crm1.webp",
      "/assets/img/works/funeralflow/funeralflow-crm2.webp",
      "/assets/img/works/funeralflow/funeralflow-crm3.webp",
    ],
    links: {},
    featured: true,
    seo: {
      title: "CRM FuneralFlow — кейс разработки SaaS · reaction.work",
      description: "Разработка CRM для ритуальных агентств.",
      og_image: "/assets/img/works/funeralflow/funeralflow-crm1.webp",
    },
  },
  {
    id: "papa-gruzchik",
    title: "Редизайн сайта ПАПА ГРУЗЧИК",
    subtitle: "Сайт для службы грузчиков и грузоперевозок",
    description: "Полный редизайн сайта службы грузчиков: новая структура, мобильная версия, блоки услуг и районов обслуживания.",
    content: `
      <p>«ПАПА ГРУЗЧИК» — служба грузчиков и разнорабочих. Компания оказывает услуги под ключ: квартирные и офисные переезды, вывоз мусора, сборка мебели, такелажные работы, подъём крупногабаритных грузов.</p>
      <p>Задача — сделать сайт, который нормально работает на мобильных, быстро грузится и понятно доносит весь список услуг.</p>
      <ul>
        <li>Переработал структуру страницы.</li>
        <li>Полностью переписал блок «Наши услуги».</li>
        <li>Сделал акцент на преимуществах: аккуратность, техника безопасности, прозрачные цены.</li>
        <li>Добавил блок с районами обслуживания: 39 районов Москвы.</li>
        <li>Переверстал мобильную версию.</li>
        <li>Ускорил загрузку: без фреймворков.</li>
      </ul>
      <p>Отдельно проработал блок для юрлиц — полный комплект документов для бухгалтерии.</p>
    `,
    year: 2026,
    date: "2026-09-25",
    client: "ПАПА ГРУЗЧИК",
    role: "Full-stack разработчик",
    duration: "4 дня",
    stack: ["HTML", "CSS", "PHP", "JavaScript"],
    image: "/assets/img/works/papa/papa-gruzchik-thumb.webp",
    cover: "/assets/img/works/papa/papa-gruzchik-cover.webp",
    gallery: [
      "/assets/img/works/papa/papagruzchik1.webp",
      "/assets/img/works/papa/papagruzchik2.webp",
      "/assets/img/works/papa/papagruzchik3.webp",
    ],
    links: { demo: "https://papagruzchik.ru" },
    featured: true,
    seo: {
      title: "Редизайн сайта ПАПА ГРУЗЧИК — кейс · reaction.work",
      description: "Редизайн сайта службы грузчиков.",
      og_image: "/assets/img/works/papa/papagruzchik1.webp",
    },
  },
  {
    id: "papa-gruzchik-bots",
    title: "Боты для исполнителей ПАПА ГРУЗЧИК",
    subtitle: "Telegram и MAX боты для грузчиков",
    description: "Боты в Telegram и MAX: регистрация исполнителей, привязка к задачам, интеграция с Яндекс.Картами.",
    content: `
      <p>«ПАПА ГРУЗЧИК» — служба грузчиков. Помимо сайта, у компании есть база исполнителей. Заказы распределяются через диспетчера, а исполнители получают задачи в мессенджерах.</p>
      <p>Задача — сделать ботов, которые автоматизируют весь цикл: регистрация, привязка к задачам, детали заказа, ежедневные выплаты. Одинаково в Telegram и MAX.</p>
      <ul>
        <li><strong>Регистрация в 8 шагов.</strong></li>
        <li><strong>Единая кодовая база для двух мессенджеров.</strong></li>
        <li><strong>Привязка к задаче.</strong> Пуш с адресом, датой, контактом.</li>
        <li><strong>Детали задачи.</strong> Со ссылкой на Яндекс.Карты.</li>
        <li><strong>Интеграция с Яндекс.Картами.</strong></li>
        <li><strong>Мотивация через выплаты.</strong></li>
      </ul>
      <p>Стек: Node.js + Telegram Bot API + MAX Bot API, PostgreSQL.</p>
    `,
    year: 2026,
    date: "2026-01-10",
    client: "ПАПА ГРУЗЧИК",
    role: "Full-stack разработчик",
    duration: "3 недели",
    stack: ["NodeJS", "Telegram Bot API", "MAX Bot API", "PostgreSQL", "Я.Карты API", "CRM API"],
    image: "/assets/img/works/papa/papa-gruzchik-bots-thumb.webp",
    cover: "/assets/img/works/papa/papa-gruzchik-bots-cover.webp",
    gallery: [
      "/assets/img/works/papa/bot1.webp",
      "/assets/img/works/papa/bot2.webp",
      "/assets/img/works/papa/bot3.webp",
    ],
    links: {},
    featured: true,
    seo: {
      title: "Боты для ПАПА ГРУЗЧИК — Telegram и MAX · reaction.work",
      description: "Разработка ботов для службы грузчиков.",
      og_image: "/assets/img/works/papa/bot1.webp",
    },
  },
  {
    id: "papa-gruzchik-app",
    title: "Приложение для исполнителей ПАПА ГРУЗЧИК",
    subtitle: "Личный кабинет грузчика: задачи, выплаты, уведомления",
    description: "Веб-приложение для исполнителей: лента задач, отклик, выплаты, история, уведомления.",
    content: `
      <p>После запуска ботов стало понятно: мессенджер — хорошо для пушей, но не для выбора заказов. Грузчику нужно видеть все доступные задачи, сравнивать ставки.</p>
      <p>Приложение работает в связке с ботами: авторизация по номеру телефона.</p>
      <ul>
        <li><strong>Лента заявок.</strong></li>
        <li><strong>Отклик в один клик.</strong></li>
        <li><strong>В работе.</strong></li>
        <li><strong>Бригады.</strong></li>
        <li><strong>Выплаты.</strong></li>
        <li><strong>История.</strong></li>
        <li><strong>Уведомления.</strong></li>
        <li><strong>Профиль и поддержка.</strong></li>
      </ul>
      <p>Стек: Next.js + Tailwind, Express.js + PostgreSQL, WebSocket.</p>
    `,
    year: 2026,
    date: "2026-01-10",
    client: "ПАПА ГРУЗЧИК",
    role: "Full-stack разработчик",
    duration: "6 недель",
    stack: ["NextJS", "ExpressJS", "Tailwind", "PostgreSQL", "WebSocket", "Telegram Bot API", "MAX Bot API", "Я.Карты API", "CRM API"],
    image: "/assets/img/works/papa/papa-gruzchik-app-thumb.webp",
    cover: "/assets/img/works/papa/papa-gruzchik-app-cover.webp",
    gallery: [
      "/assets/img/works/papa/app1.webp",
      "/assets/img/works/papa/app2.webp",
      "/assets/img/works/papa/app3.webp",
    ],
    links: {},
    featured: true,
    seo: {
      title: "Приложение для исполнителей ПАПА ГРУЗЧИК — кейс · reaction.work",
      description: "Личный кабинет грузчика.",
      og_image: "/assets/img/works/papa/app1.webp",
    },
  },
  {
    id: "papa-gruzchik-crm",
    title: "CRM для ПАПА ГРУЗЧИК",
    subtitle: "Центр управления заказами, исполнителями и выплатами",
    description: "CRM для службы грузчиков: заказы, исполнители, бригады, выплаты, интеграция с ботами и приложением.",
    content: `
      <p>CRM для «ПАПА ГРУЗЧИК» — центральный узел всей системы. К ней подключены боты в Telegram и MAX, приложение для исполнителей, сайт с формой заявки и телефония.</p>
      <p>До внедрения заказы принимались по телефону, диспетчер вручную заполнял таблицу.</p>
      <ul>
        <li><strong>Единая база заказов.</strong></li>
        <li><strong>Приём заявок из всех каналов.</strong></li>
        <li><strong>Распределение исполнителей.</strong></li>
        <li><strong>Управление бригадами.</strong></li>
        <li><strong>Выплаты.</strong> Автоматический расчёт.</li>
        <li><strong>Клиентская база.</strong></li>
        <li><strong>Отчёты.</strong> Экспорт в Excel.</li>
        <li><strong>Роли и права доступа.</strong></li>
      </ul>
      <p>Стек: React + Tailwind, Express.js + PostgreSQL, Redis, WebSocket, Bot API, Я.Карты API.</p>
    `,
    year: 2026,
    date: "2026-01-10",
    client: "ПАПА ГРУЗЧИК",
    role: "Full-stack разработчик",
    duration: "4 месяца",
    stack: ["React", "ExpressJS", "Tailwind", "PostgreSQL", "Redis", "WebSocket", "Telegram Bot API", "MAX Bot API", "Я.Карты API"],
    image: "/assets/img/works/papa/papa-gruzchik-crm-thumb.webp",
    cover: "/assets/img/works/papa/papa-gruzchik-crm-cover.webp",
    gallery: ["/assets/img/works/papa/crm1.webp"],
    links: {},
    featured: true,
    seo: {
      title: "CRM для ПАПА ГРУЗЧИК — кейс разработки · reaction.work",
      description: "CRM для службы грузчиков.",
      og_image: "/assets/img/works/papa/crm1.webp",
    },
  },
  {
    id: "musor-net-23",
    title: "Лендинг Мусор Нет 23",
    subtitle: "Сайт службы вывоза мусора в Краснодаре",
    description: "Лендинг для вывоза мусора: калькулятор по типам отходов, форма заявки за 2 минуты, карта районов Краснодара.",
    content: `
      <p>Мусор Нет 23 — служба вывоза мусора в Краснодаре. Частный бизнес с одной машиной и двумя грузчиками.</p>
      <p>Задача — сделать лендинг, который сам продаёт: клиент открывает, за 10 секунд понимает цену и оставляет номер.</p>
      <ul>
        <li><strong>Hero с формой заявки.</strong></li>
        <li><strong>Пять ключевых преимуществ.</strong></li>
        <li><strong>Прайс с типами отходов.</strong> Шесть категорий.</li>
        <li><strong>Как я работаю.</strong> Четыре шага.</li>
        <li><strong>Отзывы.</strong> Три реальных отзыва.</li>
        <li><strong>CTA с повторной формой.</strong></li>
        <li><strong>Карта районов.</strong></li>
        <li><strong>Контакты в шапке.</strong></li>
      </ul>
      <p>Стек: чистый HTML, CSS и JavaScript.</p>
    `,
    year: 2026,
    date: "2026-09-05",
    client: "Мусор Нет 23",
    role: "Front-end разработчик",
    duration: "5 дней",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/assets/img/works/musor-net-23/musora-net-23-thumb.webp",
    cover: "/assets/img/works/musor-net-23/musora-net-23-cover.webp",
    gallery: [
      "/assets/img/works/musor-net-23/musora-net-23-1.webp",
      "/assets/img/works/musor-net-23/musora-net-23-2.webp",
      "/assets/img/works/musor-net-23/musora-net-23-3.webp",
    ],
    links: { demo: "https://musora-net-23.vercel.app/" },
    featured: false,
    seo: {
      title: "Лендинг Мусор Нет 23 — кейс · reaction.work",
      description: "Разработка лендинга для службы вывоза мусора.",
      og_image: "/assets/img/works/musor-net-23/musora-net-23-1.webp",
    },
  },
  {
    id: "ritual-agents-pwa",
    title: "PWA-приложение для ритуальных агентов",
    subtitle: "Мобильная CRM для агентов ритуальных услуг",
    description: "PWA-приложение и CRM: каталог услуг и товаров, оформление заказов, админ-панель.",
    content: `
      <p>Проект для ритуального агентства: PWA-приложение, которым агенты пользуются с телефона на выезде, и одновременно — CRM с админ-панелью для офиса.</p>
      <p>До этого заказы оформлялись на бумаге или по телефону. На согласование уходило 40–60 минут.</p>
      <ul>
        <li><strong>PWA вместо нативного приложения.</strong></li>
        <li><strong>Каталог услуг.</strong></li>
        <li><strong>Каталог товаров.</strong></li>
        <li><strong>Корзина и оформление заказа.</strong></li>
        <li><strong>Раздел «Заказы».</strong></li>
        <li><strong>Админ-панель.</strong></li>
        <li><strong>Навигация как в мобильном приложении.</strong></li>
      </ul>
      <p>Стек: PWA на чистом JavaScript + Service Worker, PHP + Laravel, MySQL.</p>
    `,
    year: 2024,
    date: "2024-08-03",
    client: "Ритуальное агентство",
    role: "Full-stack разработчик",
    duration: "3 месяца",
    stack: ["PWA", "JavaScript", "PHP", "Laravel", "MySQL"],
    image: "/assets/img/works/ritual-one/ritual-agents-pwa-thumb.webp",
    cover: "/assets/img/works/ritual-one/ritual-agents-pwa-cover.webp",
    gallery: [
      "/assets/img/works/ritual-one/pwa1.webp",
      "/assets/img/works/ritual-one/pwa2.webp",
      "/assets/img/works/ritual-one/pwa3.webp",
    ],
    links: {},
    featured: true,
    seo: {
      title: "PWA-приложение для ритуальных агентов — кейс · reaction.work",
      description: "Разработка PWA и CRM для ритуального агентства.",
      og_image: "/assets/img/works/ritual-one/pwa1.webp",
    },
  },
];

export function getWorks() {
  return [...works].sort((a, b) => {
    const da = a.date || `${a.year}-01-01`;
    const db = b.date || `${b.year}-01-01`;
    return db.localeCompare(da);
  });
}

export function getFeatured(limit = 0) {
  const filtered = getWorks().filter((w) => w.featured);
  return limit > 0 ? filtered.slice(0, limit) : filtered;
}

export function findWork(id) {
  return works.find((w) => w.id === id) || null;
}

export function getNeighbors(id) {
  const items = getWorks();
  const idx = items.findIndex((w) => w.id === id);
  if (idx === -1) return [null, null];
  return [items[idx - 1] || null, items[idx + 1] || null];
}