import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  alternates: {
    canonical: "/ochrana-osobnych-udajov"
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: "Vodoinštalatérske práce Piešťany a okolie - MaPeX Belica s.r.o",
    title: "Ochrana osobných údajov - MaPeX Belica s.r.o",
    description: site.description,
    url: `${site.url}/ochrana-osobnych-udajov`,
    images: [
      {
        url: site.ogImage,
        width: 952,
        height: 226,
        alt: "MaPeX Belica s.r.o"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ochrana osobných údajov - MaPeX Belica s.r.o",
    description: site.description,
    images: [site.ogImage]
  }
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="site-frame legal-frame" data-animate>
          <h1>Ochrana osobných údajov</h1>
          <div className="legal-content">
            <p>
              <strong>MaPeX Belica s.r.o</strong>
              <br />
              Žiacka 3704/19 Piešťany – Banka 92101
              <br />
              IČO: 44424990, DIČ: 2022698414
              <br />
              E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              Tel.: {site.phone}
            </p>
            <p>
              Tieto Zásady ochrany osobných údajov (ďalej len „Zásady“)
              popisujú, aké osobné údaje spracúvame v súvislosti s používaním
              našej webovej stránky a kontaktných formulárov.
            </p>
            <p>—</p>
            <h2>I. Kontaktný formulár</h2>
            <p>
              Na stránke www.mapexbelica.sk prevádzkujeme kontaktný formulár na
              dvoch samostatných stránkach, ktorého účelom je umožniť vám:
            </p>
            <ul>
              <li>Položiť otázku k našim produktom a službám</li>
              <li>Požiadať o cenovú ponuku</li>
            </ul>
            <p>
              <strong>Rozsah spracúvaných údajov:</strong>
            </p>
            <ul>
              <li>Meno a priezvisko</li>
              <li>E-mailová adresa</li>
              <li>Telefónne číslo</li>
            </ul>
            <p>
              <strong>Účel spracovania:</strong>
              <br />
              Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a
              reagovať na váš dopyt.
            </p>
            <p>
              <strong>Právny základ:</strong>
              <br />
              Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím
              zmluvy na žiadosť dotknutej osoby.
            </p>
            <p>
              <strong>Doba uchovávania:</strong>
              <br />
              Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš
              dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.
            </p>
            <p>—</p>
            <h2>II. Súbory cookies</h2>
            <p>
              Na našej webovej stránke používame <strong>cookies</strong>{" "}
              výlučne na nasledujúce účely:
            </p>
            <ol>
              <li>
                Nevyhnutné cookies – zabezpečujú základnú funkčnosť stránky
                (napr. ukladanie relácie, nastavení prehliadača).
              </li>
              <li>
                Štatistické (analytické) cookies – pomáhajú nám pochopiť, ako
                návštevníci stránku používajú (nasadzujeme ich len so súhlasom
                používateľa).
              </li>
            </ol>
            <p>
              <strong>Správa súhlasov:</strong>
              <br />
              Používateľ môže kedykoľvek odvolať súhlas s využívaním
              štatistických cookies prostredníctvom nastavení cookie lišty alebo
              priamo v prehliadači.
            </p>
            <p>—</p>
            <h2>III. Práva dotknutej osoby</h2>
            <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
            <ul>
              <li>Prístup k osobným údajom, ktoré spracúvame</li>
              <li>Oprava nepresných alebo neúplných údajov</li>
              <li>
                Vymazanie („právo zabudnutia“), ak na spracovanie už nie je
                právny základ
              </li>
              <li>Obmedzenie spracovania</li>
              <li>Prenosnosť údajov</li>
              <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
              <li>
                Podanie sťažnosti u Úradu na ochranu osobných údajov SR
                (Hraničná 12, 820 07 Bratislava,{" "}
                <a href="http://www.dataprotection.gov.sk/">
                  www.dataprotection.gov.sk
                </a>
                )
              </li>
            </ul>
            <p>
              V prípade otázok alebo uplatnenia Vašich práv nás môžete
              kontaktovať na {site.email} alebo telefónnom čísle {site.phone}
            </p>
            <p>—</p>
            <p>Tieto Zásady nadobúdajú účinnosť dňom 16. 6. 2025.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
