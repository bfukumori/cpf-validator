export class CpfTestBuilder {
  #cpf;

  constructor() {
    this.#cpf = '';
  }

  static aCPF() {
    return new CpfTestBuilder();
  }

  withCheckDigitAboveOrEqualTen() {
    this.#cpf = '987654321';
    return this;
  }

  withCheckDigitBelowTen() {
    this.#cpf = '224542313';
    return this;
  }

  withLeadingZerosInCpfPart() {
    this.#cpf = '012345678';
    return this;
  }

  withInvalidLength() {
    this.#cpf = '1234567890';
    return this;
  }

  withInvalidInput() {
    this.#cpf = '1234567890a';
    return this;
  }

  withAllDigitsEqual() {
    this.#cpf = '00000000000';
    return this;
  }

  withInvalidFirstCheckDigit() {
    this.#cpf = '86446422799';
    return this;
  }

  withInvalidSecondCheckDigit() {
    this.#cpf = '12345678908';
    return this;
  }

  withValidCPF() {
    this.#cpf = '17595158257';
    return this;
  }

  withFormattedCPF() {
    this.#cpf = '175.951.582-57';
    return this;
  }

  build() {
    return this.#cpf;
  }
}
