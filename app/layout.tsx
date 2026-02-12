import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RegistrationProvider } from "@/components/RegistrationContext";
import RegistrationModal from "@/components/RegistrationModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Namyah - GenAI Mastery Workshop',
  description: 'Join the premier GenAI workshop by Namyah. Master the tools of the future.',
  icons: {
    icon: '/namyah_logo.png', // Fallback to logo.png if favicon.ico is missing
    shortcut: '/namyah_logo.png',
    apple: '/namyah_logo.png',
  }
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
