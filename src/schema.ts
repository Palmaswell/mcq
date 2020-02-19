import { buildSchema } from 'graphql';
import { fontSizes, getNumericalScale } from './theme';

export interface RootResolver {
  readonly fontSizes: ({ idx }: IntArg) => number;
}

export interface IntArg {
  idx: number;
}

export const resolve: RootResolver = {
  fontSizes: ({ idx }: IntArg): number =>
    getNumericalScale(idx, fontSizes /** TODO set array dynamically or default to built in */),
};

export const schema = buildSchema(`
  type Query {
    fontSizes(idx: Int): Int
  }
`);
