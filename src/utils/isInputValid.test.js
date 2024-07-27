import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { CpfTestBuilder } from '../../tests/cpf-test-builder/cpfTestBuilder.js';
import { isInputValid } from './isInputValid.js';

describe('#isInputValid', () => {
  it('should return true if cpf has correct format', () => {
    const cpf = CpfTestBuilder.aCPF().withValidCPF().build();
    const expected = true;
    const result = isInputValid(cpf);

    deepStrictEqual(result, expected);
  });

  it("should return false if cpf doesn't have correct format", () => {
    const cpf = CpfTestBuilder.aCPF().withInvalidInput().build();
    const expected = false;
    const result = isInputValid(cpf);

    deepStrictEqual(result, expected);
  });
});
