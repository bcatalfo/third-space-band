import type { Metadata } from "next";
import { League_Gothic } from "next/font/google";
import "./globals.css";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Third Space",
  description: "Performing live at Portside",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueGothic.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
