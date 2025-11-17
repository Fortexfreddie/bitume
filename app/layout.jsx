import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NewsToday - Bitume Africa Task",
  description: "News feed built with Next.js for Bitume Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
