import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { CpfTestBuilder } from '../../tests/cpf-test-builder/cpfTestBuilder.js';
import { calculateCheckDigit } from './calculateCheckDigit.js';

describe('#calculateCheckDigit', () => {
  it('should return 0 if checkDigit >= 10', () => {
    const cpfPart = CpfTestBuilder.aCPF()
      .withCheckDigitAboveOrEqualTen()
      .build();
    const weight = 10;
    const expected = 0;
    const result = calculateCheckDigit(cpfPart, weight);

    deepStrictEqual(result, expected);
  });

  it('should return the calculated check digit if checkDigit < 10', () => {
    const cpfPart = CpfTestBuilder.aCPF().withCheckDigitBelowTen().build();
    const weight = 10;
    const expected = 5;
    const result = calculateCheckDigit(cpfPart, weight);

    deepStrictEqual(result, expected);
  });

  it('should handle leading zeros in CPF part', () => {
    const cpfPart = CpfTestBuilder.aCPF().withLeadingZerosInCpfPart().build();
    const weight = 10;
    const expected = 9;
    const result = calculateCheckDigit(cpfPart, weight);

    deepStrictEqual(result, expected);
  });
});
