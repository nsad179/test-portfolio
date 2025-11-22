import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neeraj Kumar - Senior SEO Strategist & PPC Consultant",
  description: "Helping brands grow with data-driven SEO, PPC, and content strategies. 50+ campaigns managed. View my portfolio to see how I scale growth engines.",
  openGraph: {
    title: "Neeraj Kumar - Senior SEO Strategist & PPC Consultant",
    description: "Helping brands grow with data-driven SEO, PPC, and content strategies. 50+ campaigns managed. View my portfolio to see how I scale growth engines.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.neerajkumarseo.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.neerajkumarseo.com/#person",
                  name: "Neeraj Kumar",
                  url: "https://www.neerajkumarseo.com/",
                  image:
                    "https://www.neerajkumarseo.com/images/home/banner/banner-img.png",
                  jobTitle: "SEO & PPC Expert",
                  description:
                    "I build SEO and growth systems that drive qualified traffic, boost conversions, and deliver long-term impact for SaaS and E-commerce brands.",
                  worksFor: {
                    "@type": "Organization",
                    name: "Taazaa",
                  },
                  alumniOf: [
                    {
                      "@type": "Organization",
                      name: "Appy Pie",
                    },
                    {
                      "@type": "Organization",
                      name: "Neuherbs",
                    },
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/neeraj179",
                    "https://medium.com/@neerajkumar1792000",
                    "https://www.crunchbase.com/person/neeraj-kumar-e62a",
                  ],
                  knowsAbout: [
                    "SEO",
                    "PPC",
                    "SaaS Marketing",
                    "E-commerce Growth",
                    "Technical SEO",
                  ],
                },
                {
                  "@type": "Product",
                  name: "SEO & PPC Consulting Services",
                  description:
                    "Expert SEO auditing, PPC management, and growth strategy for SaaS and E-commerce.",
                  image:
                    "https://www.neerajkumarseo.com/images/home/banner/banner-img.png",
                  brand: {
                    "@id": "https://www.neerajkumarseo.com/#person",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.7",
                    reviewCount: "99",
                    bestRating: "5",
                    worstRating: "1",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
