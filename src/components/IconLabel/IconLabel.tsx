import { themeTokens } from '@/contexts/AntdContext';

/**
 * Props del componente IconLabel.
 *
 * @interface IconLabelProps
 * @property {React.ReactNode} [icon] - Ícono opcional que se muestra antes del texto.
 * @property {React.ReactNode} title - Texto o contenido principal del label.
 * @property {number} [gap=8] - Espacio entre el icono y el texto.
 * @property {string} [color] - Color del texto y del icono. Por defecto usa el color primario del tema.
 */
type IconLabelProps = {
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  gap?: number;
  colorTitle?: string;
  colorSubtitle?: string;
};

/**
 * Componente que muestra un ícono junto a un label en línea.
 *
 * @component
 * @param {IconLabelProps} props - Propiedades del componente. *
 * @example
 * ```tsx
 * <IconLabel
 *   icon={<MailOutlined />}
 *   title="Correo"
 * />
 * ```
 */
export default function IconLabel({
  icon,
  title,
  subtitle,
  gap = 8,
  colorTitle = themeTokens.primary,
  colorSubtitle = themeTokens.secundary,
}: IconLabelProps) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap,
          color: colorTitle,
          fontSize: 20,
        }}
      >
        {icon}
        <span>{title}</span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          color: colorSubtitle,
          fontSize: 16,
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}
