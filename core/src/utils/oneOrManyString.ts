export default function oneOrManyString(count: number, singular: string, plural: string): string {
  if (count === 1) {
    return singular;
  }
  return plural;
}
