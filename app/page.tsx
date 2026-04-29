import Image from "next/image";
import { CheckSquare } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RollingButton } from "@/components/RollingButton";
import { galleryImages, materials, services, site } from "@/data/site";

const uploadBase = "/wp-content/uploads/2025/06/";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    telephone: "+421903843786",
    email: site.email,
    image: `${site.url}${site.ogImage}`,
    logo: `${site.url}${site.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Žiacka 3704/19",
      addressLocality: "Piešťany – Banka",
      postalCode: "92101",
      addressCountry: "SK"
    },
    openingHoursSpecification: [
      "Mo 08:00-17:00",
      "Tu 08:00-17:00",
      "We 08:00-17:00",
      "Th 08:00-17:00",
      "Fr 08:00-17:00"
    ],
    areaServed: ["Piešťany", "Banka", "okolie Piešťan"],
    sameAs: [site.facebook]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: "Vodoinštalatérske práce Piešťany a okolie - MaPeX Belica s.r.o",
    inLanguage: "sk-SK",
    publisher: {
      "@id": `${site.url}/#organization`
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Vodoinštalatérske, kúrenárske a plynárenské práce",
    provider: {
      "@id": `${site.url}/#organization`
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Piešťany a okolie"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Služby MaPeX Belica",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.text
        }
      }))
    }
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero-section">
          <div className="hero-bg" aria-hidden="true">
            <Image
              src={`${uploadBase}472617390_1153759926753370_3287153295361154705_n-1024x768.jpg`}
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="site-frame hero-frame">
            <div className="hero-grid">
              <div className="hero-copy" data-animate>
                <h1>Vodoinštalatérske, kúrenárske a plynárenské práce</h1>
                <p>
                  Vďaka dlhoročným skúsenostiam sa môžete spoľahnúť na
                  profesionálny prístup a vždy dobre vykonanú prácu.
                </p>
                <div className="button-row">
                  <RollingButton href="#sluzby">Služby</RollingButton>
                  <RollingButton href="#kontakt" variant="outline">
                    Kontakt
                  </RollingButton>
                </div>
              </div>

              <div className="hero-visual" data-animate>
                <Image
                  src={`${uploadBase}472617390_1153759926753370_3287153295361154705_n-1024x768.jpg`}
                  alt="Vodoinštalatérske práce MaPeX Belica"
                  width={1024}
                  height={768}
                  priority
                  className="hero-main-image"
                />
                <Image
                  src={`${uploadBase}63fdd8734486a56a441e2a03_Blue-Bg-Banner.png`}
                  alt=""
                  width={875}
                  height={356}
                  className="hero-blue-shape"
                />
                <Image
                  src={`${uploadBase}63fdda0f6843a973134015ae_Banner-Lines-Figure.png`}
                  alt=""
                  width={894}
                  height={356}
                  className="hero-line-shape"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="o-nas" className="section-overlap about-section">
          <div className="content-grid">
            <div className="about-image" data-animate>
              <Image
                src="/images/about-image0000001.jpg"
                alt="Realizácia inštalatérskych prác"
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </div>
            <div className="about-copy" data-animate>
              <h2>O nás</h2>
              <div className="text-stack">
                <p>
                  Naša spoločnosť MaPex Belica s.r.o je zabehnutá firma ktorá
                  sa zaoberá inštalatérskymi prácami. Rozvody vody, odpadov a
                  kúrenia, aj podlahového kurenia. Robíme tiež výmenu kotlov /
                  plynovych aj na tuhé palivo / bojlerov, rádiatorov a sanity,
                  poradenstvo a cenové ponuky, predaj a dodanie materiálu.
                  Okrem vodoinštalatérskych prác vykonávame aj rekonštrukcie
                  kúpeľní.
                </p>
                <p>
                  Rozsah práce je veľmi široký a robíme aj malé práce a
                  realizujeme tiež zákazky pre firmy a rôzne spoločnosti v
                  malom aj veľkom rozsahu.
                </p>
                <p>
                  Okrem vodoinštatérskych prác vykonávame aj rekonštrukcie
                  kúpelní, a vieme zabezpečit aj nasledovné práce.
                  elektrikárske, murárske, obkladačské a sadrokartonárske práce
                  samozrejme po dohode.
                </p>
              </div>
              <div className="proof-list">
                <div>
                  <CheckSquare aria-hidden="true" />
                  <span>29 rokov skúseností</span>
                </div>
                <div>
                  <CheckSquare aria-hidden="true" />
                  <span>1000 spokojných klientov</span>
                </div>
              </div>
              <RollingButton href="#kontakt">Objednať</RollingButton>
            </div>
          </div>

          <div className="materials site-frame" data-animate>
            <h2>Používame materiály</h2>
            <div className="material-grid">
              {materials.map((material) => (
                <div className="material-card" key={material}>
                  {material}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sluzby" className="services-section">
          <div className="service-grid">
            <div className="service-intro" data-animate>
              <span>Služby</span>
              <h2>S čím Vám vieme pomôcť?</h2>
              <p>
                Postaráme sa o vaše vodovodné a tepelné rozvody spoľahlivo,
                rýchlo a ekonomicky – či už ide o novostavby, rekonštrukcie
                alebo havarijné situácie. Poskytujeme kompletné
                vodoinštalatérske práce vrátane montáže sanitárnych zariadení,
                vykurovania, ohrevu vody, kanalizácie aj ekologických riešení
                ako domáce čističky a úpravu pitnej vody. Zabezpečujeme opravy
                netesností, výmenu batérií, odvzdušnenie radiátorov, čistenie
                sifónov či zapojenie spotrebičov. Vďaka odborným skúsenostiam,
                poradenstvu a pravidelnej údržbe predídete haváriám a ušetríte
                na prevádzkových nákladoch. Naši zmluvní partneri majú
                prednostný servis a individuálny prístup. Spoľahnite sa na
                kvalitu, moderné technológie a rýchle riešenia bez starostí.
              </p>
              <RollingButton href="#kontakt" variant="dark">
                Objednať
              </RollingButton>
            </div>

            <div className="service-cards">
              {services.map((service) => (
                <article className="service-card" data-animate key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="gallery-section">
          <div className="gallery-heading" data-animate>
            <span>Naša práca</span>
            <h2>Galéria</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map(([file, width, height]) => {
              const src = `${uploadBase}${file}`;
              return (
                <a
                  href={src}
                  className="gallery-item"
                  key={file}
                  data-animate
                  aria-label="Otvoriť fotografiu realizácie"
                >
                  <Image
                    src={src}
                    alt="Realizácia MaPeX Belica"
                    width={width}
                    height={height}
                    sizes="(max-width: 768px) 50vw, 18vw"
                  />
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
