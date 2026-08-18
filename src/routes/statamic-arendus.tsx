import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES, type ServiceItem } from "@/content/site";
import { abs, breadcrumbLd, canonical, ldScript, pageMeta } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "statamic-arendus") as ServiceItem;
const PATH = "/statamic-arendus";

export const Route = createFileRoute("/statamic-arendus")({
  head: () => ({
    meta: pageMeta({
      title: service.metaTitle,
      description: service.metaDescription,
      path: PATH,
    }),
    links: canonical(PATH),
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@graph": [
          breadcrumbLd([
            { name: "Avaleht", path: "/" },
            { name: "Teenused", path: "/teenused" },
            { name: service.title, path: PATH },
          ]),
          {
            "@type": "Service",
            "@id": `${abs(PATH)}#service`,
            name: service.title,
            serviceType: service.title,
            description: service.metaDescription,
            url: abs(PATH),
            provider: { "@id": `${abs("/")}#organization` },
            areaServed: { "@type": "Country", name: "Estonia" },
            availableLanguage: ["Estonian", "English"],
          },
          {
            "@type": "FAQPage",
            mainEntity: service.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ],
      }),
    ],
  }),
  component: () => <ServicePage service={service} />,
});
