import { deepStrictEqual, throws } from 'node:assert';
import { describe, it } from 'node:test';
import { CpfTestBuilder } from '../tests/cpf-test-builder/cpfTestBuilder.js';
import { validationMessages } from './constants/validationMessages.js';
import { formatCPF } from './formatCPF.js';

describe('#formatCPF', () => {
  it('should format CPF with dots and hyphen', () => {
    const cpf = CpfTestBuilder.aCPF().withValidCPF().build();
    const expected = CpfTestBuilder.aCPF().withFormattedCPF().build();
    const result = formatCPF(cpf);

    deepStrictEqual(result, expected);
  });

  it('should return an error if cpf is not valid', () => {
    const cpf = CpfTestBuilder.aCPF().withInvalidInput().build();

    throws(() => formatCPF(cpf), new Error(validationMessages.INVALID_INPUT));
  });
});
