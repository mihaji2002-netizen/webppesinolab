import type { Metadata, Viewport } from "next";
import { Vazirmatn, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Grain } from "@/components/Grain";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "پپسینوژن — وارد اکوسیستم شو",
  description:
    "پپسینوژن یک مؤسسه‌ی آموزشی نیست؛ یک اکوسیستمه که روی علمِ یادگیری ساخته شده تا کمک کنه دانش‌آموز رشد کنه — نه فقط درسی، بلکه به‌عنوان یک آدم.",
  keywords: [
    "پپسینوژن",
    "آزمایشگاه پپسینو",
    "علم یادگیری",
    "اکوسیستم دانش‌آموز",
    "آموزش از نو",
    "Pepsinogen",
  ],
  authors: [{ name: "پپسینوژن" }],
  openGraph: {
    title: "پپسینوژن — وارد اکوسیستم شو",
    description:
      "نمره‌ها موقتی‌ان. آدم بودنت برای همیشه می‌مونه. وارد پپسینوژن شو.",
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
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${jetbrains.variable}`}
    >
      <body className="bg-void text-chalk antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Grain />
      </body>
    </html>
  );
}
