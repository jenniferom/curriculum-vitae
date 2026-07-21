import { App, ConfigProvider, ThemeConfig } from 'antd';
import { getLocale } from 'next-intl/server';
import enUS from 'antd/locale/en_US';
import esES from 'antd/locale/es_ES';
import { JSX } from 'react';
import { Locale } from 'antd/es/locale';

/**
 * Constante para centralizar la paleta de colores, se utiliza en Table.tsx
 * @constant
 */
export const themeTokens = {
  primary: '#1c87c7',
  secundary: '#bcbcbc',
  hover: '#d2e7f4',
  bg: '#fff',
  ligthDetails: '#fff',
  bgSecundary: '#d2e7f4ab',
  border: '1px solid rgba(0, 0, 0, 0.08)',
};

/**Objeto de configuración de tema para Ant Design. */
const theme: ThemeConfig = {
  token: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue, Arial, Noto Sans, sans-serif',
    colorPrimary: themeTokens.primary,
    colorPrimaryHover: themeTokens.hover,
    colorError: '#f42c2e',
    colorInfo: themeTokens.primary,
    colorSuccess: '#52c426',
    colorWarning: '#fa8c16',
  },
  components: {
    Layout: {
      headerBg: themeTokens.bg,
      headerColor: themeTokens.ligthDetails,
      footerBg: themeTokens.bg,
    },
    Menu: {
      itemBg: themeTokens.bg,
      itemColor: '#333',
      itemHoverBg: themeTokens.hover,
      itemHoverColor: themeTokens.primary,
      itemSelectedBg: themeTokens.primary,
      itemSelectedColor: themeTokens.bg,
      itemActiveBg: '#91caff',
    },
    Card: {
      bodyPadding: 14,
    },
    Collapse: {
      fontSize: 14,
      headerPadding: 10,
      contentPadding: 10,
    },
    Steps: {
      fontSize: 14,
    },
    Modal: {
      titleColor: themeTokens.primary,
    },
    Descriptions: {
      labelBg: themeTokens.bgSecundary,
    },
  },
};

/**
 * Proveedor de Ant Design que aplica tema y localización.
 *
 * @param {{ children: import('react').ReactNode }} props - Props del componente.
 */
export default async function AntdProvider({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const locale: string = await getLocale();
  const antDesignLocale: Locale = locale === 'es-ES' ? esES : enUS;

  return (
    <App>
      <ConfigProvider theme={theme} locale={antDesignLocale}>
        {children}
      </ConfigProvider>
    </App>
  );
}
