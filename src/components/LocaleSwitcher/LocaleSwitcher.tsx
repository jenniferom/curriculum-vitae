'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Flex, Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { Locale } from '@/i18n/config';
import { startTransition } from 'react';
import { setUserLocale } from '@/i18n/service';

/**
 * Props del componente LocaleSwitcher
 * @type
 * @property {boolean} suffix - Indica si se muestra el ícono de select desplegable o no.
 */
interface Props {
  suffix?: boolean;
}

/**
 * Componente que renderiza un menú con los idiomas disponibles en la aplicación
 *
 * @component
 * @param {Props} - Propiedades del componente
 * @returns {JSX.Element} Render del componente
 *
 * @example
 * ```tsx
 * <LocaleSwitcher />
 * ```
 */
const LocaleSwitcher = ({ suffix = false }: Props) => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const languages = [
    {
      value: 'es-ES',
      label: t('es'),
    },
    {
      value: 'en-EN',
      label: t('en'),
    },
  ];

  /**
   * Cambia el idioma del usuario.
   * Ejecuta la transición de React para evitar bloqueos en el renderizado.
   *
   * @function
   * @param {string} value - Nuevo idioma seleccionado.
   */
  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }
  return (
    <Select
      variant="borderless"
      suffixIcon={suffix ? undefined : null}
      prefix={<GlobalOutlined />}
      defaultValue={locale}
      popupMatchSelectWidth={false}
      onChange={onChange}
      options={languages}
      optionRender={(option) => (
        <Flex gap={'middle'}>
          <span aria-label={option.data.label}>{option.data.label}</span>
        </Flex>
      )}
      labelRender={(option) => <Flex>{option.label}</Flex>}
    />
  );
};

export default LocaleSwitcher;
