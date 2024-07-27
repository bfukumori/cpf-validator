import { calculateCheckDigit } from './calculateCheckDigit.js';
/**
 * Validates the second check digit of a CPF (Cadastro de Pessoas Físicas).
 *
 * @param {string} cpf - The CPF number as a string. It should be 11 digits long.
 * @returns {boolean} - Returns `true` if the second check digit is valid, otherwise `false`.
 */

export function isSecondCheckDigitValid(cpf) {
  const secondCheckDigit = calculateCheckDigit(cpf.slice(0, 10), 11);

  return secondCheckDigit === parseInt(cpf.charAt(10));
}
