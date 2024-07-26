/**
 * Calculates the check digit of the CPF.
 *
 * @param {string} cpf - The CPF to be checked.
 * @param {number} weight - The initial weight for the calculation.
 * @returns {number} The calculated check digit.
 */
export function calculateCheckDigit(cpf, weight) {
  let sum = 0;

  for (let i = 0; i < cpf.length; i++) {
    sum += parseInt(cpf.charAt(i)) * (weight - i);
  }

  let checkDigit = 11 - (sum % 11);

  return checkDigit >= 10 ? 0 : checkDigit;
}
