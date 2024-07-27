import { validationMessages } from './constants/validationMessages.js';
import { validateCPF } from './validateCPF.js';

export function formatCPF(cpf) {
  const exp = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  const cpfValidation = validateCPF(cpf);

  if (!cpfValidation.valid) {
    throw new Error(validationMessages.INVALID_INPUT);
  }

  return `${cpf.replace(exp, '$1.$2.$3-$4')}`;
}
