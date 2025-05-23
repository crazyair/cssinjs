import extractStyle from './extractStyle';
import useCacheToken, { getComputedToken } from './hooks/useCacheToken';
import useCSSVarRegister from './hooks/useCSSVarRegister';
import type { CSSInterpolation, CSSObject } from './hooks/useStyleRegister';
import useStyleRegister from './hooks/useStyleRegister';
import Keyframes from './Keyframes';
import type { Linter } from './linters';
import {
  legacyNotSelectorLinter,
  logicalPropertiesLinter,
  NaNLinter,
  parentSelectorLinter,
} from './linters';
import type { StyleProviderProps } from './StyleContext';
import StyleContext, { createCache, StyleProvider } from './StyleContext';
import type { AbstractCalculator, DerivativeFunc, TokenType } from './theme';
import { createTheme, genCalc, Theme } from './theme';
import type { Transformer } from './transformers/interface';
import legacyLogicalPropertiesTransformer from './transformers/legacyLogicalProperties';
import px2remTransformer from './transformers/px2rem';
import { supportLogicProps, supportWhere, unit } from './util';
import { token2CSSVar } from './util/css-variables';

export {
  Theme,
  createTheme,
  useStyleRegister,
  useCSSVarRegister,
  useCacheToken,
  createCache,
  StyleProvider,
  StyleContext,
  Keyframes,
  extractStyle,
  getComputedToken,

  // Transformer
  legacyLogicalPropertiesTransformer,
  px2remTransformer,

  // Linters
  logicalPropertiesLinter,
  legacyNotSelectorLinter,
  parentSelectorLinter,
  NaNLinter,

  // util
  token2CSSVar,
  unit,
  genCalc,
};
export type {
  TokenType,
  CSSObject,
  CSSInterpolation,
  DerivativeFunc,
  Transformer,
  Linter,
  StyleProviderProps,
  AbstractCalculator,
};

export const _experimental = {
  supportModernCSS: () => supportWhere() && supportLogicProps(),
};
