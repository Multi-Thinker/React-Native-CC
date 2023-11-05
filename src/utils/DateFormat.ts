export function normalizeMMYYFormat(date: string): string {
  const parts = date.split('/');
  if (parts.length === 2) {
    const month = parts[0].padStart(2, '0');
    const year = parts[1].padStart(2, '0');
    return `${month}/${year}`;
  }
  return date;
}
