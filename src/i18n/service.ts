'use server';

import { cookies } from 'next/headers';
import { Locale, defaultLocale } from '@/i18n/config';

/**
 * Nombre de la cookie utilizada para almacenar el idioma preferido del usuario.
 *
 * @constant
 * @type {string}
 */
const COOKIE_NAME: string = 'NEXT_LOCALE';

/**
 * Obtiene el idioma preferido del usuario desde la cookie `NEXT_LOCALE`.
 * - Si la cookie no está presente, se devuelve el idioma por defecto (`defaultLocale`).
 * @returns {Promise<Locale>} El código de idioma del usuario (por ejemplo, "es-ES" o "en-EN").
 * @example
 * const locale = await getUserLocale(); // "es-ES"
 */
export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

/**
 * Establece el idioma preferido del usuario en la cookie `NEXT_LOCALE`.
 * @param {Locale} locale - El código de idioma a guardar (por ejemplo, "en-EN").
 *
 * @example
 * await setUserLocale("en-EN");
 */
export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
