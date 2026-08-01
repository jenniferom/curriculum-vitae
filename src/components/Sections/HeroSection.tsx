'use client';
import { Col, Typography, Tag, Space, Grid, Image } from 'antd';
import { useTranslations } from 'next-intl';
import Section from './Section';
import { themeTokens } from '@/contexts/AntdContext';
import CVDownload from '../CVDownload/CVDownload';
import WAppContact from '../WAppContact/WAppContact';

const { useBreakpoint } = Grid;

export default function HeroSection() {
  const t = useTranslations('PublicPage.hero');
  const screens = useBreakpoint();

  return (
    <Section id="home">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <div
          style={{ maxWidth: screens.xl ? '50%' : screens.xs ? '100%' : '80%' }}
        >
          <Space orientation="vertical" size="large">
            <Tag
              style={{
                backgroundColor: themeTokens.bgSecundary,
                color: themeTokens.secundary,
                borderRadius: 50,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: themeTokens.details,
                  marginRight: 6,
                  display: 'inline-block',
                }}
              />
              {t('commissions')}
            </Tag>

            <Typography.Title level={1} style={{ color: themeTokens.primary }}>
              {t('title')}
            </Typography.Title>

            <Typography.Title
              level={3}
              style={{ color: themeTokens.secundary }}
            >
              {t('subtitle')}
            </Typography.Title>

            <Typography.Text style={{ fontSize: 16 }}>
              {t('descriptions')}
            </Typography.Text>
          </Space>
          <Space
            size="middle"
            style={{
              marginTop: 24,
              flexWrap: 'wrap',
            }}
          >
            <WAppContact />
            <CVDownload />
          </Space>
        </div>
        {screens.xl && (
          <Col>
            <Image
              src="/personal-profile.jpg"
              alt=""
              width={400}
              preview={false}
            />
          </Col>
        )}
      </div>
    </Section>
  );
}
