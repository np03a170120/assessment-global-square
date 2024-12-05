import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Global Square Assessment",
    template: "%s | Global Square Assessment",
  },
  description: "Assessment of Global Square IT",
  metadataBase: new URL("https://assessment-global-square.vercel.app/"),
  keywords: ["assessment", "global square it"],
  openGraph: {
    description: "Assessment of Global Square IT ",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="mx-4">{children}</div>
      </body>
    </html>
  );
}
