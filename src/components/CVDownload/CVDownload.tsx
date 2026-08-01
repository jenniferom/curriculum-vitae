'use client';

import { useTranslations } from 'next-intl';
import { CV_ROUTES } from '@/config/constants';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
/**
 * Componente que renderiza un enlace para descargar el manual de usuario.
 */
const CVDownload = () => {
  const t = useTranslations('CVDownload');

  return (
    <Button
      type="default"
      href={CV_ROUTES}
      target="_blank"
      icon={<DownloadOutlined style={{ fontSize: 18 }} />}
      className="cv-download-button"
      style={{
        fontSize: 16,
        padding: '20px 24px',
      }}
    >
      {t('downloadCV')}
    </Button>
  );
};

export default CVDownload;
