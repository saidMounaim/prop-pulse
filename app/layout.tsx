import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proppulse Real Estate",
  description:
    "Modern real estate platform built with Next.js 16, shadcn/ui, and Prisma. Browse, list, and manage properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
