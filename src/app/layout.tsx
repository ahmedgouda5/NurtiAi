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
      <head>
        <Script
          id="newrelic"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
;window.NREUM||(NREUM={});NREUM.init={session_replay:{enabled:true,block_selector:'',mask_text_selector:'*',sampling_rate:10.0,error_sampling_rate:100.0,mask_all_inputs:true,collect_fonts:true,inline_images:false,inline_stylesheet:true,fix_stylesheets:true,preload:false,mask_input_options:{}},distributed_tracing:{enabled:true},performance:{capture_measures:true},browser_consent_mode:{enabled:false},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"],capture_payloads:'none'}};
;NREUM.loader_config={accountID:"8121317",trustKey:"8121317",agentID:"1589234619",licenseKey:"NRJS-8feb9182f564a21a6ee",applicationID:"1589234619"};
;NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-8feb9182f564a21a6ee",applicationID:"1589234619",sa:1};
            `,
          }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
          <Chatbot />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
