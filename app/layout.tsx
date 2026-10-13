import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

// Closest free match to the reference's Helvetica-style grotesk.
const sans = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "Owais Hassan is a full-stack software engineer building UI and API work for enterprise platforms at Toshiba and formerly Cisco.";

export const metadata: Metadata = {
  title: "Owais Hassan | Software Engineer",
  description,
  openGraph: {
    type: "website",
    title: "Owais Hassan | Software Engineer",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
