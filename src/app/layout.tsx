import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Grain } from "@/components/Grain";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pepsinogen — Enter the ecosystem",
  description:
    "Pepsinogen is not an educational institute. It is an ecosystem built on learning science, designed to help students evolve — not just academically, but as human beings.",
  keywords: [
    "Pepsinogen",
    "Pepsino Lab",
    "learning science",
    "student ecosystem",
    "education reimagined",
  ],
  authors: [{ name: "Pepsinogen" }],
  openGraph: {
    title: "Pepsinogen — Enter the ecosystem",
    description:
      "Grades are temporary. Character stays forever. Enter Pepsinogen.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#03040A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable}`}
    >
      <body className="bg-void text-chalk antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Grain />
      </body>
    </html>
  );
}
