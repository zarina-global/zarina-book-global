import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zarina Global Gnostik — Kitob platformasi",
  description: "Next.js asosida yaratilgan gnostik ong va kitob tizimi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
