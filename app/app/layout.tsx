import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zarina Global Gnostic — Book Platform",
  description: "AI + Audio + Video kitoblar platformasi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
