'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var getBoxStyle = require('./get-box-style/get-box-style.js');
var useRandomClassname = require('./use-random-classname/use-random-classname.js');
var getBoxMod = require('./get-box-mod/get-box-mod.js');
var MantineThemeProvider = require('../MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var extractStyleProps = require('./style-props/extract-style-props/extract-style-props.js');
var parseStyleProps = require('./style-props/parse-style-props/parse-style-props.js');
var stylePropsData = require('./style-props/style-props-data.js');
var InlineStyles = require('../InlineStyles/InlineStyles.js');
var isNumberLike = require('../utils/is-number-like/is-number-like.js');
var createPolymorphicComponent = require('../factory/create-polymorphic-component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const _Box = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { component, style, __vars, className, variant, mod, size, hiddenFrom, visibleFrom } = _b, others = __objRest(_b, ["component", "style", "__vars", "className", "variant", "mod", "size", "hiddenFrom", "visibleFrom"]);
    const theme = MantineThemeProvider.useMantineTheme();
    const Element = component || "div";
    const { styleProps, rest } = extractStyleProps.extractStyleProps(others);
    const responsiveClassName = useRandomClassname.useRandomClassName();
    const parsedStyleProps = parseStyleProps.parseStyleProps({
      styleProps,
      theme,
      data: stylePropsData.STYlE_PROPS_DATA
    });
    return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ React__default.createElement(
      InlineStyles.InlineStyles,
      {
        selector: `.${responsiveClassName}`,
        styles: parsedStyleProps.styles,
        media: parsedStyleProps.media
      }
    ), /* @__PURE__ */ React__default.createElement(
      Element,
      __spreadValues(__spreadValues({
        ref,
        style: getBoxStyle.getBoxStyle({
          theme,
          style,
          vars: __vars,
          styleProps: parsedStyleProps.inlineStyles
        }),
        className: cx__default(className, {
          [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
          [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
          [`mantine-visible-from-${visibleFrom}`]: visibleFrom
        }),
        "data-variant": variant,
        "data-size": isNumberLike.isNumberLike(size) ? void 0 : size || void 0
      }, getBoxMod.getBoxMod(mod)), rest)
    ));
  }
);
_Box.displayName = "@mantine/core/Box";
const Box = createPolymorphicComponent.createPolymorphicComponent(_Box);

exports.Box = Box;
//# sourceMappingURL=Box.js.map
