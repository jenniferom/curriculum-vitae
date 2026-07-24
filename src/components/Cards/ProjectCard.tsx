import { Card, Image, Tag, Typography } from 'antd';
import { ReactNode } from 'react';
import { themeTokens } from '@/contexts/AntdContext';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  icon?: ReactNode;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  icon,
}: ProjectCardProps) {
  return (
    <Card
      hoverable
      style={{
        flex: '1 1 400px',
        maxWidth: 500,
        overflow: 'hidden',
        padding: 0,
      }}
      styles={{
        body: {
          padding: 20,
        },
      }}
      cover={
        image ? (
          <Image
            src={image}
            alt={title}
            preview={false}
            style={{
              width: '100%',
              height: 200,
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
            }}
          />
        ) : (
          <div
            style={{
              height: 180,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: themeTokens.primary,
            }}
          >
            {icon}
          </div>
        )
      }
    >
      <Typography.Title
        level={4}
        style={{ marginTop: 0, color: themeTokens.primary }}
      >
        {title}
      </Typography.Title>

      <Typography.Paragraph type="secondary">
        {description}
      </Typography.Paragraph>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          marginBottom: 16,
        }}
      >
        {technologies.map((technology) => (
          <Tag color={themeTokens.secundary2} key={technology}>
            {technology}
          </Tag>
        ))}
      </div>
    </Card>
  );
}
