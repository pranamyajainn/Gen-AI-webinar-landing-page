import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RegistrationProvider } from "@/components/RegistrationContext";
import RegistrationModal from "@/components/RegistrationModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Mastery Workshop | Save Time & Supercharge Skills",
  description: "Learn 15+ AI tools to save time, money and stay relevant in 2026. Join the free 90-minute workshop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <RegistrationProvider>
          {children}
          <RegistrationModal />
        </RegistrationProvider>
      </body>
    </html>
  );
}
