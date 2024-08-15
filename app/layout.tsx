"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReduxProvider } from "@/components/ReduxProvider";
import { useSelectedLayoutSegment } from 'next/navigation';
import { AuthProvider } from '@/authcontext/authContext';

const inter = Inter({ subsets: ["latin"] });

const noHeaderSegments = ['signin', 'checkout'];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ReduxProvider>
            {!noHeaderSegments.includes(segment || '') && <Header />}
            {children}
            {!noHeaderSegments.includes(segment || '') && <Footer />}
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
