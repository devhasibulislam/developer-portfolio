import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hasibul Islam - Full Stack Developer",
  description:
    "Portfolio of Hasibul Islam, a passionate full-stack developer specializing in modern web technologies, React, Next.js, and innovative digital solutions.",
  keywords:
    "Hasibul Islam, Full Stack Developer, React, Next.js, Web Development, Portfolio",
  authors: [{ name: "Hasibul Islam" }],
  metadataBase: new URL("https://devhasibulislam.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hasibul Islam - Resume of a Passionate Developer",
    description:
      "Facebook Graph APIs & WhatsApp Business Expert | Custom Web & SaaS Solutions Developer",
    type: "website",
    url: "https://devhasibulislam.vercel.app/",
    siteName: "Hasibul Islam - Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hasibul Islam - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasibul Islam - Resume of a Passionate Developer",
    description:
      "Facebook Graph APIs & WhatsApp Business Expert | Custom Web & SaaS Solutions Developer",
    images: ["/opengraph-image.jpg"],
  },
  other: {
    "google-site-verification": "sZPmFgCCG9yDDjVqCsdembcfkOLDihLkjCWdXkxnEVI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
