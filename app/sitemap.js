import { getWorks } from "@/data/works";

export const dynamic = 'force-static';

export default function sitemap() {
  const base = "https://reaction-work.ru";
  const now = new Date();

  const staticPages = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/works`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contacts`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const works = getWorks().map((w) => ({
    url: `${base}/work/${w.id}`,
    lastModified: new Date(w.date || `${w.year}-01-01`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...works];
}