import { themeTokens } from '@/contexts/AntdContext';
import { CalendarOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Card, Tag, Typography } from 'antd';

interface ExperienceCardProps {
  title: string;
  period: string;
  type?: string;
  achievements: string[];
}

export default function ExperienceCard({
  title,
  period,
  type,
  achievements,
}: ExperienceCardProps) {
  return (
    <div
      style={{
        position: 'relative',
        borderLeft: '3px solid ',
        paddingLeft: 30,
        borderColor: themeTokens.primary,
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: 750,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Cabecera */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 20,
          }}
        >
          <div>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {title}
            </Typography.Title>

            <Typography.Text style={{ color: themeTokens.secundary }}>
              <CalendarOutlined /> {period}
            </Typography.Text>
          </div>

          {type && <Tag>{type}</Tag>}
        </div>

        {/* Logros */}
        <div style={{ marginTop: 20 }}>
          {achievements.map((achievement) => (
            <div
              key={achievement}
              style={{
                display: 'flex',
                gap: 10,
                marginBottom: 12,
              }}
            >
              <CheckCircleOutlined
                style={{
                  color: '#722ed1',
                  marginTop: 4,
                }}
              />

              <Typography.Text>{achievement}</Typography.Text>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
