import type { Metadata } from "next";
import { League_Gothic, Black_Ops_One } from "next/font/google";
import "./globals.css";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
});

const blackOpsOne = Black_Ops_One({
  weight: "400",
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
        <div className="flex flex-col items-center">
          <div className="flex justify-center m-7 p-4">
            <header className={`font-bold text-3xl ${blackOpsOne.className}`}>
              Third Space
            </header>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
