declare module '@bfukumori/cpf-validator' {
  interface ValidationResult {
    valid: boolean;
    message: string;
  }

  export function validateCPF(cpf: string): ValidationResult;
}
