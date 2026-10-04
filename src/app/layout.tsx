import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cinzel = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Delhi Heritage World School | Excellence in Education & Character",
  description: "A premier CBSE affiliated institution nurturing future leaders through holistic education, academic excellence, Indian values, and world-class infrastructure.",
  keywords: ["CBSE School", "Delhi School", "Best Indian School", "Admissions 2026-27", "Vidyadhara", "Heritage World School"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${cinzel.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
