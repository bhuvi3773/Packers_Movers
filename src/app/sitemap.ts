import type { MetadataRoute } from "next";
import { services } from "@/config/content";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = (path: string) => `${siteConfig.url}${path}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: url("/services"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/get-a-quote"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/about"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: url("/contact"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: url("/privacy-policy"), lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: url("/terms-and-conditions"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: url(`/services/${service.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
