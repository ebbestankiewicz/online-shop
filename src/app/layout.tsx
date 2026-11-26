import type { Metadata } from "next";
import { DM_Serif_Display, Karla } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

const sans = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "Sunday Market",
  description: "Good things, found slowly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="page-container flex-1 py-8">{children}</main>
        <Footer />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "var(--color-ink)",
              color: "var(--color-cream)",
              border: "none",
              fontFamily: "var(--font-karla)",
            },
          }}
        />
      </body>
    </html>
  );
}
