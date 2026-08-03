import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aegis.sivilizecorp.com";

  const routes = [
    "",
    "/layanan",
    "/metode",
    "/tanpa-source-code",
    "/ancaman",
    "/harga",
    "/kepatuhan",
    "/blog",
    "/faq",
    "/kontak",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
