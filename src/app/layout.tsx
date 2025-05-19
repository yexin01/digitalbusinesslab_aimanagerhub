import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import DashboardLayout from "@/components/DashboardLayout";
import { SearchProvider } from "./context/SearchContext";
import SearchResults from "@/components/SearchResults";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Manager Hub",
  description: "AI-powered dashboard for managers to overview employee information and performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-[#F6F6F3]`}
      >
        <SearchProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
          <SearchResults />
        </SearchProvider>
      </body>
    </html>
  );
}
