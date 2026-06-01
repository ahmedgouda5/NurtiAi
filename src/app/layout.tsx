import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/styles/StyledComponentsRegistry";
import { Chatbot } from "@/components/chatbot";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NutriAI",
  description:
    "AI-powered health, nutrition, and fitness platform for the MENA region.",
  metadataBase: new URL("https://nutri.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <body>
        <StyledComponentsRegistry>
          {children}
          <Chatbot />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
