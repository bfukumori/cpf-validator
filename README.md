# Validação de CPF

Este projeto fornece uma função para validar números de CPF (Cadastro de Pessoas Físicas) brasileiros. A validação inclui verificação de comprimento, formato, dígitos iguais e dígitos de verificação.

## Função `validateCPF`

A função `validateCPF` é responsável por validar um CPF com base nas seguintes regras:

1. O CPF deve ter exatamente 11 dígitos.
2. O CPF deve conter apenas números.
3. Todos os dígitos não podem ser iguais.
4. O CPF deve passar na verificação dos dois dígitos de verificação.

### Parâmetros

- **cpf** (`string`): O CPF a ser validado.

### Retorno

Retorna um objeto com as seguintes propriedades:

- **valid** (`boolean`): Indica se o CPF é válido ou não.
- **message** (`string`): Mensagem de validação correspondente ao status do CPF.

### Exemplo

```javascript
import { validateCPF } from '@bfukumori/cpf-validator';

const resultado = validateCPF('12345678901');
console.log(resultado);
// Exemplo de saída: { valid: false, message: 'The second check digit is invalid.' }
```

## Função `formatCPF`

A função `formatCPF` é responsável por formatar um CPF no padrão ###.###.###-##:

### Parâmetros

- **cpf** (`string`): O CPF a ser formatado.

### Retorno

Retorna uma string caso sucesso ou lança uma exceção, caso o cpf seja inválido.

### Exemplo

```javascript
import { formatCPF } from '@bfukumori/cpf-validator';

const resultado = formatCPF('12345678901');
console.log(resultado);
// Exemplo de saída: "123.456.789-01"
```

## Contribuindo

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, por favor, abra uma _issue_ ou envie um _pull request_.
