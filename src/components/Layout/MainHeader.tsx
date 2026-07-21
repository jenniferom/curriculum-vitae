import { themeTokens } from '@/contexts/AntdContext';
import { Divider, Flex, Grid, Layout } from 'antd';

export default function MainHeader() {
  const screens = Grid.useBreakpoint();

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
        <Divider
          orientation="vertical"
          style={{
            height: 24,
            borderColor: themeTokens.ligthDetails,
            marginInline: 8,
          }}
        />
      </Flex>
    </Layout.Header>
  );
}
