'use client';

import { Grid } from 'antd';
import { useTranslations } from 'next-intl';
import Section from './Section';
import ExperienceCard from '../Cards/ExperienceCard';

const { useBreakpoint } = Grid;

const jobs = [
  {
    id: 'datys',
    title: 'jobs.datys.title',
    period: 'jobs.datys.period',
    type: 'jobs.datys.type',
    achievements: 'jobs.datys.achievements',
  },
];

export default function ExperienceSection() {
  const t = useTranslations('PublicPage');
  const screens = useBreakpoint();

  return (
    <Section id="jobs" title={t('experience.title')}>
      <div
        style={{
          width: '100%',
          maxWidth: 900,
          padding: screens.xs ? '0 10px' : '0 30px',
        }}
      >
        {jobs.map((job) => (
          <ExperienceCard
            key={job.id}
            title={t(job.title)}
            period={t(job.period)}
            type={t(job.type)}
            achievements={t(job.achievements)
              .split('. ')
              .map((achievement) => achievement.trim())
              .filter(Boolean)}
          />
        ))}
      </div>
    </Section>
  );
}
