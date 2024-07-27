/**
 * Checks if the input has the correct format.
 *
 * @param {string} cpf - The CPF to be checked.
 * @returns {boolean} True if input format is correct, otherwise False.
 */

export function isInputValid(cpf) {
  const cpfRegex = /^\d{11}$/;

  return cpfRegex.test(cpf);
}
