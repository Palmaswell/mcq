import { getNumericalScale, NumericScale } from '../theme';

describe('Theme Data', () => {
  describe('getScaleEl', () => {
    let numericalScale: NumericScale;

    beforeEach(() => {
      numericalScale = [12, 14, 16, 20, 24, 32];
    });

    afterEach(() => {
      numericalScale = (undefined as unknown) as [];
    });

    it('should return an empty NaN if the idx is larger than the array length', () => {
      expect(getNumericalScale(6, numericalScale)).toBeNaN();
    });

    it('should return the entry of the numericalScale', () => {
      expect(getNumericalScale(0, numericalScale)).toBe(12);
      expect(getNumericalScale(2, numericalScale)).toBe(16);
      expect(getNumericalScale(4, numericalScale)).toBe(24);
    });
  });
});
