import { calculateCheckDigit } from './calculateCheckDigit.js';
/**
 * Validates the first check digit of a CPF (Cadastro de Pessoas Físicas).
 *
 * @param {string} cpf - The CPF number as a string. It should be 11 digits long.
 * @returns {boolean} - Returns `true` if the first check digit is valid, otherwise `false`.
 */

export function isFirstCheckDigitValid(cpf) {
  const firstCheckDigit = calculateCheckDigit(cpf.slice(0, 9), 10);

  return firstCheckDigit === parseInt(cpf.charAt(9));
}
