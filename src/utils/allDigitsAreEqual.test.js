import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { CpfTestBuilder } from '../../tests/cpf-test-builder/cpfTestBuilder.js';
import { allDigitsAreEqual } from './allDigitsAreEqual.js';
CpfTestBuilder;

describe('#allDigitsAreEqual', () => {
  it('should return true when all digits are the same', () => {
    const cpf = CpfTestBuilder.aCPF().withAllDigitsEqual().build();
    const expected = true;
    const result = allDigitsAreEqual(cpf);

    deepStrictEqual(result, expected);
  });

  it('should return false when all digits are not the same', () => {
    const cpf = CpfTestBuilder.aCPF().withValidCPF().build();
    const expected = false;
    const result = allDigitsAreEqual(cpf);

    deepStrictEqual(result, expected);
  });
});
