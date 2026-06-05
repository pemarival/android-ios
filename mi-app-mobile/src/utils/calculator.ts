export function sum(left: number, right: number) {
  return left + right;
}

export function subtract(left: number, right: number) {
  return left - right;
}

export function multiply(left: number, right: number) {
  return left * right;
}

export function divide(left: number, right: number) {
  if (right === 0) {
    return null;
  }

  return left / right;
}

export function formatResult(value: number | null) {
  if (value === null || Number.isNaN(value)) {
    return 'No disponible';
  }

  return Number.isInteger(value) ? value.toString() : value.toFixed(2);
}
