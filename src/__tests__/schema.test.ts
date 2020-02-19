import { graphql } from 'graphql';
import { schema, resolve, NumericScale } from '..';

describe('GraphQL schema resolver', () => {
  describe('Fontsizes query', () => {
    let fontSizes: NumericScale;

    beforeEach(() => {
      fontSizes = [12, 14, 16, 20, 24, 32];
    });

    afterEach(() => {
      fontSizes = (undefined as unknown) as [];
    });

    it('should return the six fontsizes values', async done => {
      fontSizes.forEach((font: number, idx: number) => {
        const query = `{ fontSizes(idx: ${idx}) }`;
        graphql(schema, query, resolve).then(result => {
          try {
            expect(result).toEqual({
              data: { fontSizes: font },
            });
          } catch (e) {
            throw new Error(`${e}`);
          }
        });
        done();
      });
    });
  });
});
