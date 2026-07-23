'use client';
import { Footer } from 'antd/es/layout/layout';
import { useTranslations } from 'next-intl';
import { Row, Col, Divider, Grid, Button } from 'antd';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import { themeTokens } from '@/contexts/AntdContext';
import { Facebook, WhatsApp } from '@mui/icons-material';

const { useBreakpoint } = Grid;

/**
 * Componente de pie de página principal.
 *
 * @component
 *
 *
 * @example
 * <MainFooter />
 */
const MainFooter = () => {
  const tc = useTranslations('Contact');
  const t = useTranslations('MainLayout');
  const screens = useBreakpoint();

  return (
    <>
      {/* Barra superior con degradado estático */}
      <div
        style={{
          height: '4px',
          width: '100%',
          background:
            'linear-gradient(to right, #722ed1, #5d1f8c,  #00eed0, #5d1f8c ,#722ed1)',
          top: 0,
          left: 0,
        }}
      />
      <Footer
        style={{
          color: themeTokens.secundary,
          background: themeTokens.bgSecundary,
        }}
      >
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          {/* Columna 1: datos de contacto */}
          <Col xs={24} md={12} style={{ textAlign: 'left' }}>
            <h5 className="font-bold text-base">{tc('title')}</h5>
            <div>{tc('name')}</div>
            <div>{tc('email')}</div>
            <div>{tc('mobile')}</div>
          </Col>

          {/* Columna 2: Redes */}
          <Col xs={24} md={12} style={{ display: 'flex', gap: 10 }}>
            <Button type="text" icon={<WhatsApp />}></Button>
            <Button type="text" icon={<Facebook />}></Button>
          </Col>
        </Row>
        <Divider
          style={{ borderColor: themeTokens.secundary2, marginInline: 8 }}
        />
        <div style={{ textAlign: 'right' }}>
          <div style={{ textAlign: 'center' }}>
            <b>{t('footer', { currentYear: new Date().getFullYear() })}</b>
          </div>
          {screens.xs && <LocaleSwitcher suffix={true} />}
        </div>
      </Footer>
    </>
  );
};
export default MainFooter;
