import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { CpfTestBuilder } from '../../tests/cpf-test-builder/cpfTestBuilder.js';
import { isFirstCheckDigitValid } from './isFirstCheckDigitValid.js';

describe('#isFirstCheckDigitValid', () => {
  it('should return true if first check digit is correct', () => {
    const cpf = CpfTestBuilder.aCPF().withValidCPF().build();
    const expected = true;
    const result = isFirstCheckDigitValid(cpf);

    deepStrictEqual(result, expected);
  });

  it('should return false if first check digit is incorrect', () => {
    const cpf = CpfTestBuilder.aCPF().withInvalidFirstCheckDigit().build();
    const expected = false;
    const result = isFirstCheckDigitValid(cpf);

    deepStrictEqual(result, expected);
  });
});
