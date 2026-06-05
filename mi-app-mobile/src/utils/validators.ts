export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isFilled(value: string) {
  return value.trim().length > 0;
}

export function clampValue(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
