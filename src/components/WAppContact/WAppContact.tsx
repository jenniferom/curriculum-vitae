'use client';

import { useTranslations } from 'next-intl';
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import { PHONE_NUMBER } from '@/config/constants';
/**
 * Componente que renderiza un enlace para descargar el manual de usuario.
 */
const WAppContact = () => {
  const t = useTranslations('WAppContact');

  return (
    <Button
      type="primary"
      href={`https://wa.me/${PHONE_NUMBER}`}
      target="_blank"
      icon={<WhatsAppOutlined style={{ fontSize: 18 }} />}
      className="whatsapp-button"
      style={{
        fontSize: 16,
        padding: '20px 24px',
      }}
    >
      {t('contact')}
    </Button>
  );
};

export default WAppContact;
