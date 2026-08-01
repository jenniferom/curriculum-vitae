'use client';

import {
  CodeOutlined,
  DeploymentUnitOutlined,
  ProjectOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import { Card, Masonry, Tag, Typography } from 'antd';
import { useTranslations } from 'next-intl';
import { themeTokens } from '@/contexts/AntdContext';
import Section from './Section';

const technologies = [
  {
    id: 'languages',
    icon: <CodeOutlined />,
    title: 'technologies.languages.title',
    items: 'technologies.languages.items',
  },
  {
    id: 'frontend',
    icon: <ProjectOutlined />,
    title: 'technologies.frontend.title',
    items: 'technologies.frontend.items',
  },
  {
    id: 'data',
    icon: <DeploymentUnitOutlined />,
    title: 'technologies.data.title',
    items: 'technologies.data.items',
  },
  {
    id: 'authentication',
    icon: <ToolOutlined />,
    title: 'technologies.authentication.title',
    items: 'technologies.authentication.items',
  },
  {
    id: 'testing',
    icon: <ToolOutlined />,
    title: 'technologies.testing.title',
    items: 'technologies.testing.items',
  },
  {
    id: 'tools',
    icon: <ToolOutlined />,
    title: 'technologies.tools.title',
    items: 'technologies.tools.items',
  },
  {
    id: 'others',
    icon: <DeploymentUnitOutlined />,
    title: 'technologies.others.title',
    items: 'technologies.others.items',
  },
];

export default function TechStackSection() {
  const t = useTranslations('PublicPage');

  return (
    <Section
      id="technologies"
      title={t('technologies.title')}
      description={t('technologies.description')}
    >
      <Masonry
        columns={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
        }}
        gutter={20}
        style={{
          width: 'calc(100vw - 100px)',
          maxWidth: 1020,
          margin: '0 auto',
        }}
        items={technologies.map((category) => ({
          key: category.id,
          data: category,
          children: (
            <Card
              style={{
                width: '100%',
              }}

              styles={{
                body: {
                  padding: 20,
                },
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    color: themeTokens.secundary2,
                    fontSize: 20,
                  }}
                >
                  {category.icon}
                </span>

                <Typography.Title
                  level={4}
                  style={{
                    margin: 0,
                    color: themeTokens.primary,
                  }}
                >
                  {t(category.title)}
                </Typography.Title>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                {t(category.items)
                  .split(',')
                  .map((item) => (
                    <Tag
                      key={item.trim()}
                      style={{
                        margin: 0,
                        width: 'max-content',
                        alignSelf: 'flex-start',
                        backgroundColor: `color-mix(in srgb, ${themeTokens.secundary2} 10%, transparent)`,
                        color: themeTokens.secundary2,
                        border: 'none',
                      }}
                    >
                      {item.trim()}
                    </Tag>
                  ))}
              </div>
            </Card>
          ),
        }))}
      />
    </Section>
  );
}
