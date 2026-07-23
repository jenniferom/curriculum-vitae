'use client';

import { Layout } from 'antd';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        <MainHeader />

        <Layout.Content style={{ flex: 1, display: 'flex', height: '100%' }}>
          {children}
        </Layout.Content>

        <MainFooter />
      </div>
    </Layout>
  );
}
