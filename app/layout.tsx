import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import "./globals.css";

import AnimatedBackground from "@/components/background/AnimatedBackground";
import SupportBanner from "@/components/SupportBanner";

export const metadata: Metadata = {
  title: "Learn Chinese Free Online | 100% Free AI Mandarin Tutor",
  description: "Stop paying for expensive courses. Learn Chinese free from zero to fluent (HSK 1-4). Master thousands of words with our interactive AI tutor, spaced repetition, and real-life dialogue simulator.",
  keywords: "learn chinese free, free mandarin courses, learn chinese online, free chinese app, AI chinese tutor, HSK practice, learn mandarin free",
  metadataBase: new URL('https://learnmandarinfree.vercel.app'),
  openGraph: {
    title: 'Learn Chinese Free Online | 100% Free AI Mandarin Tutor',
    description: 'Learn Chinese from zero to fluent with interactive dialogues, AI roleplay, and spaced repetition flashcards. No subscriptions, 100% free.',
    url: 'https://learnmandarinfree.vercel.app',
    siteName: 'LearnMandarinFree',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Chinese Free Online | 100% Free AI Mandarin Tutor',
    description: 'Master Mandarin with our immersive AI tutor, sentence builder, and spaced repetition system.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "LearnMandarinFree",
              "description": "A completely free, AI-powered platform for learning Chinese language and Mandarin pronunciation from HSK 1 to HSK 4.",
              "url": "https://learnmandarinfree.vercel.app",
              "sameAs": [
                "https://twitter.com/learnmandarinfree",
                "https://youtube.com/learnmandarinfree"
              ],
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD",
                "category": "Educational Course"
              }
            })
          }}
        />
        <AnimatedBackground />
        <NavBar />
        <main className="max-w-container" style={{ paddingTop: '6rem' }}>
          {children}
        </main>
        <SupportBanner />
      </body>
    </html>
  );
}
