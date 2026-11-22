import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jumpupdanang.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}?lang=en`,
          ja: `${baseUrl}?lang=jp`,
          vi: `${baseUrl}?lang=vn`,
        },
      },
    },
    {
      url: `${baseUrl}?lang=en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}?lang=jp`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}?lang=vn`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
