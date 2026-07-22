import { themeTokens } from '@/contexts/AntdContext';
import { Button, Divider, Flex, Grid, Layout } from 'antd';
import { useTranslations } from 'next-intl';

export default function MainHeader() {
  const screens = Grid.useBreakpoint();
  const t = useTranslations('HomePage');

  return (
    <Layout.Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 48,
        padding: '0 10px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
      }}
    >
      <Flex
        gap={screens.xs ? 0.5 : 'small'}
        align="center"
        justify="flex-end"
        style={{ width: '100%', height: '100%' }}
      >
        <Button type="text" href="#home">
          {t('home')}
        </Button>

        <Button type="text" href="#jobs">
          {t('experience')}
        </Button>

        <Button type="text" href="#projects">
          {t('projects')}
        </Button>

        <Button type="text" href="#education">
          {t('education')}
        </Button>

        <Divider
          orientation="vertical"
          style={{
            height: 24,
            borderColor: themeTokens.secundary2,
            marginInline: 8,
          }}
        />
      </Flex>
    </Layout.Header>
  );
}
