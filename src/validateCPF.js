import { validationMessages } from './constants/validationMessages.js';
import { allDigitsAreEqual, calculateCheckDigit } from './utils/index.js';

/**
 * Validates if a CPF is valid.
 *
 * @param {string} cpf - The CPF to be validated, which may include non-numeric characters.
 * @returns {Object} Returns an object containing the `valid` (boolean) and `message` (string) properties.
 */
export function validateCPF(cpf) {
  // Checks if the CPF has 11 digits
  if (cpf.length !== 11) {
    return {
      valid: false,
      message: validationMessages.INVALID_LENGTH,
    };
  }

  // Checks if the CPF contains only numbers
  const cpfRegex = /^\d{11}$/;
  if (!cpfRegex.test(cpf)) {
    return {
      valid: false,
      message: validationMessages.INVALID_INPUT,
    };
  }

  // Checks if all digits are the same
  if (allDigitsAreEqual(cpf)) {
    return {
      valid: false,
      message: validationMessages.ALL_DIGITS_EQUAL,
    };
  }

  // Calculates and checks the first check digit
  const firstCheckDigit = calculateCheckDigit(cpf.slice(0, 9), 10);
  if (firstCheckDigit !== parseInt(cpf.charAt(9))) {
    return {
      valid: false,
      message: validationMessages.INVALID_FIRST_CHECK_DIGIT,
    };
  }

  // Calculates and checks the second check digit
  const secondCheckDigit = calculateCheckDigit(cpf.slice(0, 10), 11);
  if (secondCheckDigit !== parseInt(cpf.charAt(10))) {
    return {
      valid: false,
      message: validationMessages.INVALID_SECOND_CHECK_DIGIT,
    };
  }

  return {
    valid: true,
    message: validationMessages.VALID_CPF,
  };
}
