import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import ProviderSession from '@/providers/session-provider';
import { ModalProvider } from '@/providers/modal-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin E-Commerence Dashboard',
  description: 'Admin E-Commerence Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderSession>
          <main className="h-screen flex flex-col justify-center items-center">
          <ModalProvider />
            <Navbar />
            {children}
          </main>
          <Toaster />
        </ProviderSession>
      </body>
    </html>
  );
}
