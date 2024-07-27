import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { CpfTestBuilder } from '../../tests/cpf-test-builder/cpfTestBuilder.js';
import { isSecondCheckDigitValid } from './isSecondCheckDigitValid.js';

describe('#isSecondCheckDigitValid', () => {
  it('should return true if second check digit is correct', () => {
    const cpf = CpfTestBuilder.aCPF().withValidCPF().build();
    const expected = true;
    const result = isSecondCheckDigitValid(cpf);

    deepStrictEqual(result, expected);
  });

  it('should return false if second check digit is incorrect', () => {
    const cpf = CpfTestBuilder.aCPF().withInvalidSecondCheckDigit().build();
    const expected = false;
    const result = isSecondCheckDigitValid(cpf);

    deepStrictEqual(result, expected);
  });
});
