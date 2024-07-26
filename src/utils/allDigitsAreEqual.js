/**
 * Checks if all digits in a CPF are the same.
 *
 * @param {string} cpf - The CPF to be checked.
 * @returns {boolean} True if all digits are the same, otherwise False.
 */
export function allDigitsAreEqual(cpf) {
  return /^(\d)\1+$/.test(cpf);
}
