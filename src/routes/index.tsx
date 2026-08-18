import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import {
  AboutSection,
  Capabilities,
  ContactSection,
  FaqSection,
  Intro,
  ProcessSection,
  ProjectLead,
  ProjectsSection,
  ServicesSection,
  WhyKreatech,
} from "@/components/site/sections";
import { FAQ, SERVICES, SITE } from "@/content/site";
import { abs, canonical, ldScript, organizationLd, pageMeta, websiteLd } from "@/lib/seo";

const TITLE = "Kreatech — tarkvaraarendus, veebilahendused ja tehniline projektijuhtimine";
const DESCRIPTION = SITE.description;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESCRIPTION, path: "/" }),
    links: canonical("/"),
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@graph": [
          organizationLd,
          websiteLd,
          {
            "@type": "WebPage",
            "@id": `${abs("/")}#webpage`,
            url: abs("/"),
            name: TITLE,
            description: DESCRIPTION,
            inLanguage: "et",
            isPartOf: { "@id": `${abs("/")}#website` },
            about: { "@id": `${abs("/")}#organization` },
          },
          {
            "@type": "ItemList",
            name: "Kreatechi teenused",
            itemListElement: SERVICES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.title,
                description: s.short,
                url: abs(s.href),
                serviceType: s.title,
                provider: { "@id": `${abs("/")}#organization` },
                areaServed: { "@type": "Country", name: "Estonia" },
              },
            })),
          },
          {
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ],
      }),
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <ServicesSection />
        <WhyKreatech />
        <ProjectsSection />
        <ProjectLead />
        <ProcessSection />
        <Capabilities />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
