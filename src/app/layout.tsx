import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neeraj Kumar - Senior SEO Strategist & PPC Consultant",
  description: "Helping brands grow with data-driven SEO, PPC, and content strategies. 50+ campaigns managed. View my portfolio to see how I scale growth engines.",
  openGraph: {
    title: "Neeraj Kumar - Senior SEO Strategist & PPC Consultant",
    description: "Helping brands grow with data-driven SEO, PPC, and content strategies. 50+ campaigns managed. View my portfolio to see how I scale growth engines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
