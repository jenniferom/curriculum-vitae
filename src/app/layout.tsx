import type { Metadata } from 'next';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import AntdProvider from '@/contexts/AntdContext';
import MainLayout from '@/components/Layout/MainLayout';

export const metadata: Metadata = {
  title: 'Jennifer | Frontend Developer & Software Engineer',
  description:
    'Portafolio personal de Jennifer, desarrolladora frontend y especialista en desarrollo de software.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NextIntlClientProvider>
          <AntdProvider>
            <MainLayout>{children}</MainLayout>{' '}
          </AntdProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
