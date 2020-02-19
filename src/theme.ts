/**
 * This defines a built-in set of data according to
 * System UI theme specification. https://system-ui.com/theme/
 * You can provide your own System UI theme for using mcq.
 */
export interface ThemeProps {
  readonly fontSizes: NumericScale;
}
export type NumericScale = number[];
export type StringScale<T> = T[];

export const fontSizes: NumericScale = [12, 14, 16, 20, 24, 32];

export const getNumericalScale = (idx: number, sizes: number[]): number => (idx < sizes.length ? sizes[idx] : NaN);
