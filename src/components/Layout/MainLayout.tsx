'use client';

import { Layout } from 'antd';
import { useTranslations } from 'next-intl';
import MainHeader from './MainHeader';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations('MainLayout');

  return (
    <Layout
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MainHeader />

      <Layout style={{ flex: 1, display: 'flex', height: '100%' }}>
        {children}
      </Layout>

      {/* <Layout.Footer
        style={{
          color: 'white',
          textAlign: 'center',
          padding: '2px 0',
        }}
      >
        {t('footer', { currentYear: new Date().getFullYear() })}
      </Layout.Footer>*/}
    </Layout>
  );
}
