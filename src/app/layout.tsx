import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ReactToastProvider from "@/providers/ReactToastProvider";

const cairo = Cairo({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Al-Naisr For Immagiration And Consulting",
  description: "Your First Step Start With US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className={cairo.className}>
      <body>
        <ReactToastProvider>
          <Header />

          {children}
        </ReactToastProvider>
      </body>
    </html>
  );
}
