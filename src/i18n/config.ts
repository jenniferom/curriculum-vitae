/**
 * Lista de códigos de idioma soportados por la aplicación. Deben de coincidir con los coderKeys de los mismos en la BD
 *
 * Cada código sigue el formato estándar de localización (`idioma-REGIÓN`).
 *
 * @constant
 * @type {readonly ["es-ES", "en-EN"]}
 */
export const locales = ['es-ES', 'en-EN'] as const;

/**
 * Tipo que representa uno de los valores definidos en `locales`.
 *
 * Se utiliza para restringir el uso de idiomas a los permitidos por la aplicación.
 *
 * @type {"es-ES" | "en-EN"} Locale
 */
export type Locale = (typeof locales)[number];

/**
 * Idioma por defecto utilizado en la aplicación.
 *
 * Se toma el primer valor definido en `locales`.
 *
 * @constant
 * @type {Locale}
 */
export const defaultLocale: Locale = locales[0];
