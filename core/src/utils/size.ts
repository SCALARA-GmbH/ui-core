/**
 * Calculates the perfect size to fit in IconButton sizes
 * @param d - diameter of IconButton
 */
export function largestSquareInCircle(d: number): number {
  return d / Math.sqrt(2);
}
