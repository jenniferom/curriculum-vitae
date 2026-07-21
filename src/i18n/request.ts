import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './service';

/**
 * Configuración de internacionalización (i18n) para peticiones del servidor.
 *
 * Esta función obtiene dinámicamente el idioma del usuario (`locale`) y carga
 * el archivo de mensajes correspondiente desde la carpeta `./messages`.
 *
 * @returns {Promise<{ locale: string, messages: Record<string, string> }>} Objeto con el código de idioma y los mensajes traducidos.
 *
 * @example
 * // Resultado esperado para un usuario con idioma "es-ES":
 * {
 *   locale: "es-ES",
 *   messages: {
 *     "greeting": "Hola",
 *     "farewell": "Adiós"
 *   }
 * }
 */
export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
