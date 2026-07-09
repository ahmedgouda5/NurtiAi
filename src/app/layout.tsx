import type { Metadata } from "next";
import { Outfit, Syne, Geist } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/styles/StyledComponentsRegistry";
import { ChatbotLoader } from "@/AppFeature/chatbot/ChatbotLoader";
import { cn } from "@/lib/utils";
import I18nProvider from "@/providers/I18nProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
  icons: {
    icon: [{ url: "/LogoLeaf.ico", sizes: "192x192", type: "image/x-icon" }],
    shortcut: { url: "/LogoLeaf.ico", sizes: "196x196" },
    apple: { url: "/LogoLeaf.ico", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        outfit.variable,
        syne.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>
        <I18nProvider>
          <StyledComponentsRegistry>
            {children}
            <ChatbotLoader />
          </StyledComponentsRegistry>
        </I18nProvider>
      </body>
    </html>
  );
}
