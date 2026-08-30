import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Oak Ridge Conference on Science & Intelligent Design",
  description:
    "A proposed scientific conference convening rigorous dialogue on information, origins, and design in nature. Oak Ridge, Tennessee — Spring 2027.",
  openGraph: {
    title: "Oak Ridge Conference on Science & Intelligent Design",
    description: "Exploring truth. Discovering design. Advancing science.",
    images: ["/images/cosmic-cliffs.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oak Ridge Conference on Science & Intelligent Design",
    description: "Exploring truth. Discovering design. Advancing science.",
    images: ["/images/cosmic-cliffs.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
