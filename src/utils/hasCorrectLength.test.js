import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { CpfTestBuilder } from '../../tests/cpf-test-builder/cpfTestBuilder.js';
import { hasCorrectLength } from './hasCorrectLength.js';

describe('#hasCorrectLength', () => {
  it('should return true when cpf has correct length', () => {
    const cpf = CpfTestBuilder.aCPF().withValidCPF().build();
    const expected = true;
    const result = hasCorrectLength(cpf);

    deepStrictEqual(result, expected);
  });

  it("should return false when cpf doesn't have correct length", () => {
    const cpf = CpfTestBuilder.aCPF().withInvalidLength().build();
    const expected = false;
    const result = hasCorrectLength(cpf);

    deepStrictEqual(result, expected);
  });
});
