import { Card, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';
import { themeTokens } from '@/contexts/AntdContext';

interface EducationCardProps {
  title: string;
  subtitle: string;
  description?: string;
  period?: string;
  icon?: ReactNode;
}

export default function EducationCard({
  title,
  subtitle,
  period,
  description,
  icon,
}: EducationCardProps) {
  return (
    <Card
      style={{
        flex: '1 1 350px',
        maxWidth: 500,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 15,
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: themeTokens.secundary2,
            paddingTop: 3,
          }}
        >
          {icon ?? <CheckCircleOutlined />}
        </div>

        <div>
          <Typography.Title level={4} style={{ margin: 0 }}>
            {title}
          </Typography.Title>

          <Typography.Text type="secondary">{subtitle}</Typography.Text>

          <Typography.Text>{period}</Typography.Text>

          {description && (
            <Typography.Paragraph style={{ marginTop: 10 }}>
              {description}
            </Typography.Paragraph>
          )}
        </div>
      </div>
    </Card>
  );
}
