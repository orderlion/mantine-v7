'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getThemeStyles = require('./get-theme-styles/get-theme-styles.js');
var resolveStyles = require('./resolve-styles/resolve-styles.js');
var resolveStyle = require('./resolve-style/resolve-style.js');
var resolveVars = require('./resolve-vars/resolve-vars.js');

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function getStyle({
  theme,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver
}) {
  return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, getThemeStyles.getThemeStyles({ theme, themeName, props, stylesCtx, selector })), resolveStyles.resolveStyles({ theme, styles, props, stylesCtx })[selector]), resolveStyles.resolveStyles({ theme, styles: options == null ? void 0 : options.styles, props: (options == null ? void 0 : options.props) || props, stylesCtx })[selector]), resolveVars.resolveVars({ theme, props, stylesCtx, vars, varsResolver, selector, themeName })), rootSelector === selector ? resolveStyle.resolveStyle({ style, theme }) : null), resolveStyle.resolveStyle({ style: options == null ? void 0 : options.style, theme }));
}

exports.getStyle = getStyle;
//# sourceMappingURL=get-style.js.map
