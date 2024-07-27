/**
 * Checks if CPF has correct length.
 *
 * @param {string} cpf - The CPF to be checked.
 * @returns {boolean} True if cpf has 11 digits, otherwise False.
 */

export function hasCorrectLength(cpf) {
  return cpf.length === 11;
}
