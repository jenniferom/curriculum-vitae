'use client';

import { Grid } from 'antd';

import { useTranslations } from 'next-intl';
import Section from './Section';
import EducationCard from '../Cards/EducationCard';
import { SchoolOutlined, VerifiedOutlined } from '@mui/icons-material';

const { useBreakpoint } = Grid;

const education = [
  {
    id: 'uci',
    title: 'education.uci.title',
    period: 'education.uci.period',
    subtitle: 'education.uci.subtitle',
    description: 'education.uci.description',
    icon: <SchoolOutlined />,
  },
  {
    id: 'cypress',
    title: 'education.cypress.title',
    period: 'education.cypress.period',
    subtitle: 'education.cypress.subtitle',
    description: 'education.cypress.description',
    icon: <VerifiedOutlined />,
  },
];

export default function EducationSection() {
  const t = useTranslations('PublicPage');
  const screens = useBreakpoint();

  return (
    <Section
      id="education"
      title={t('education.title')}
      description={t('education.description')}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: screens.xs ? 20 : 30,
          width: '100%',
        }}
      >
        {education.map((item) => (
          <EducationCard
            key={item.id}
            title={t(item.title)}
            period={t(item.period)}
            subtitle={t(item.subtitle)}
            description={t(item.description)}
            icon={item.icon}
          />
        ))}
      </div>
    </Section>
  );
}
