export function capitalizeFirstLetter(value: string) {
  if (typeof value !== 'string' || value.length === 0) {
    return '';
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}