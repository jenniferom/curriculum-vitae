'use client';

import { Card, Grid, Image, Tag, Typography } from 'antd';
import { useTranslations } from 'next-intl';
import { themeTokens } from '@/contexts/AntdContext';
import Section from './Section';
import ProjectCard from '../Cards/ProjectCard';

const { useBreakpoint } = Grid;

const projects = [
  {
    id: 'biometric-search',
    title: 'projects.biometricSearch.title',
    description: 'projects.biometricSearch.description',
    technologies: 'projects.biometricSearch.technologies',
    image: '/biometric-search.png',
  },
  {
    id: 'commercial-platform',
    title: 'projects.commercialPlatform.title',
    description: 'projects.commercialPlatform.description',
    technologies: 'projects.commercialPlatform.technologies',
    image: '/commercial-platform.png',
  },
  {
    id: 'sip',
    title: 'projects.sip.title',
    description: 'projects.sip.description',
    technologies: 'projects.sip.technologies',
    image: '/sip.png',
  },
  {
    id: 'toca-toca',
    title: 'projects.tocaToca.title',
    description: 'projects.tocaToca.description',
    technologies: 'projects.tocaToca.technologies',
    image: '/toca-toca.png',
    href: 'https://toca-toca-two.vercel.app/',
  },
];

export default function FeaturedProjectsSection() {
  const t = useTranslations('PublicPage');
  const screens = useBreakpoint();

  return (
    <Section
      id="projects"
      title={t('projects.title')}
      description={t('projects.description')}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: screens.md ? 'repeat(2, 1fr)' : '1fr',
          gap: 20,
          width: '100%',
          maxWidth: 1020,
          margin: '0 auto',
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={t(project.title)}
            description={t(project.description)}
            technologies={t(project.technologies)
              .split(',')
              .map((technology) => technology.trim())}
            image={project.image}
            href={project.href}
          />
        ))}

        <Card
          style={{
            gridColumn: screens.md ? '1 / -1' : 'auto',
            width: '100%',
            backgroundColor: themeTokens.primary,
            color: '#fff',
          }}
          styles={{
            body: {
              padding: screens.xs ? 20 : 40,
            },
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: screens.sm ? '1fr 0.7fr' : '1fr',
              gap: screens.xs ? 24 : 40,
              alignItems: 'center',
            }}
          >
            <div>
              <Typography.Title
                level={2}
                style={{ color: '#fff', marginTop: 0 }}
              >
                {t('projects.featured.title')}
              </Typography.Title>

              <Typography.Paragraph style={{ color: '#fff' }}>
                {t('projects.featured.description')}
              </Typography.Paragraph>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  marginTop: 20,
                }}
              >
                {t('projects.featured.technologies')
                  .split(',')
                  .map((technology) => technology.trim())
                  .map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
              </div>
            </div>

            <div
              style={{
                width: '100%',
                maxWidth: screens.xs ? 220 : 360,
                justifySelf: 'center',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              <Image
                src="/qr.png"
                alt={t('projects.featured.title')}
                preview={false}
                width="100%"
                style={{
                  display: 'block',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
