import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { CpfTestBuilder } from '../tests/cpf-test-builder/cpfTestBuilder.js';
import { validationMessages } from './constants/validationMessages.js';
import { validateCPF } from './validateCPF.js';
validationMessages;

describe('#validateCPF', () => {
  it('should return correct response if CPF is valid', () => {
    const cpf = CpfTestBuilder.aCPF().withValidCPF().build();
    const expected = {
      valid: true,
      message: validationMessages.VALID_CPF,
    };
    const result = validateCPF(cpf);

    deepStrictEqual(result, expected);
  });

  it('should return correct response if invalid cpf input', () => {
    const cpf = CpfTestBuilder.aCPF().withInvalidInput().build();
    const expected = {
      valid: false,
      message: validationMessages.INVALID_INPUT,
    };
    const result = validateCPF(cpf);

    deepStrictEqual(result, expected);
  });

  it('should return correct response if all digits are equal', () => {
    const cpf = CpfTestBuilder.aCPF().withAllDigitsEqual().build();
    const expected = {
      valid: false,
      message: validationMessages.ALL_DIGITS_EQUAL,
    };
    const result = validateCPF(cpf);

    deepStrictEqual(result, expected);
  });

  it('should return correct response if invalid first check digit', () => {
    const cpf = CpfTestBuilder.aCPF().withInvalidFirstCheckDigit().build();
    const expected = {
      valid: false,
      message: validationMessages.INVALID_FIRST_CHECK_DIGIT,
    };
    const result = validateCPF(cpf);

    deepStrictEqual(result, expected);
  });

  it('should return correct response if invalid second check digit', () => {
    const cpf = CpfTestBuilder.aCPF().withInvalidSecondCheckDigit().build();
    const expected = {
      valid: false,
      message: validationMessages.INVALID_SECOND_CHECK_DIGIT,
    };
    const result = validateCPF(cpf);

    deepStrictEqual(result, expected);
  });

  it('should return correct response even with invalid cpf length', () => {
    const cpf = CpfTestBuilder.aCPF().withInvalidLength().build();
    const expected = {
      valid: false,
      message: validationMessages.INVALID_LENGTH,
    };
    const result = validateCPF(cpf);

    deepStrictEqual(result, expected);
  });
});
