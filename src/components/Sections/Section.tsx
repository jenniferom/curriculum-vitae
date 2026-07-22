'use client';

import { themeTokens } from '@/contexts/AntdContext';
import { Divider, Typography } from 'antd';

interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}
/**
 * Componente base para una sección en la página pública
 * @component
 */
const Section = ({ id, title, description, children }: SectionProps) => {
  return (
    <section
      id={id}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 20,
      }}
    >
      <div style={{ padding: '50px 20px' }}>
        <div>
          <Typography.Title level={2} style={{ color: themeTokens.primary }}>
            {title && (
              <Divider
                orientation="vertical"
                size="large"
                style={{
                  height: 40,
                  borderInlineStart: '4px solid',
                  borderColor: themeTokens.secundary,
                }}
              />
            )}
            {title}
          </Typography.Title>
          <Typography.Paragraph style={{ color: themeTokens.secundary }}>
            {description}
          </Typography.Paragraph>
        </div>

        {children}
      </div>
    </section>
  );
};
export default Section;
