'use client';

import { Card, Grid, Tag, Typography } from 'antd';
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
    image: '/images/projects/biometric-search.png',
    href: '#',
  },
  {
    id: 'commercial-platform',
    title: 'projects.commercialPlatform.title',
    description: 'projects.commercialPlatform.description',
    technologies: 'projects.commercialPlatform.technologies',
    image: '/images/projects/commercial-platform.png',
    href: '#',
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
              padding: screens.xs ? 25 : 40,
            },
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: screens.md ? 'row' : 'column',
              gap: 40,
              alignItems: 'center',
            }}
          >
            {/* Información del proyecto */}
            <div style={{ flex: 1 }}>
              <Typography.Title
                level={2}
                style={{
                  color: '#fff',
                  marginTop: 0,
                }}
              >
                {t('projects.featured.title')}
              </Typography.Title>

              <Typography.Paragraph
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: 16,
                }}
              >
                {t('projects.featured.description')}
              </Typography.Paragraph>

              {/* Tecnologías */}
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
                  .map((technology) => (
                    <Tag
                      style={{
                        backgroundColor: `color-mix(in srgb, ${themeTokens.secundary2} 50%, transparent)`,
                        color: '#fff',
                        //border: 'none',
                      }}
                      key={technology.trim()}
                    >
                      {technology.trim()}
                    </Tag>
                  ))}
              </div>
            </div>

            {/* Imagen / preview */}
            <div
              style={{
                flex: 1,
                width: '100%',
                minHeight: 250,
                borderRadius: 12,
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography.Text
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                Project Preview
              </Typography.Text>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
