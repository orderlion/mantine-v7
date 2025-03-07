'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var CardSection = require('./CardSection/CardSection.js');
var Card_context = require('./Card.context.js');
var Card_module = require('./Card.module.css.js');
var Paper = require('../Paper/Paper.js');
var polymorphicFactory = require('../../core/factory/polymorphic-factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const defaultProps = {
  padding: "md"
};
const varsResolver = createVarsResolver.createVarsResolver((_, { padding }) => ({
  root: {
    "--card-padding": getSize.getSpacing(padding)
  }
}));
const Card = polymorphicFactory.polymorphicFactory((_props, ref) => {
  const props = useProps.useProps("Card", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, children, padding } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "children", "padding"]);
  const getStyles = useStyles.useStyles({
    name: "Card",
    props,
    classes: Card_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const _children = React.Children.toArray(children);
  const content = _children.map((child, index) => {
    if (typeof child === "object" && child && "type" in child && child.type === CardSection.CardSection) {
      return React.cloneElement(child, {
        "data-first-section": index === 0 || void 0,
        "data-last-section": index === _children.length - 1 || void 0
      });
    }
    return child;
  });
  return /* @__PURE__ */ React__default.createElement(Card_context.CardProvider, { value: { getStyles } }, /* @__PURE__ */ React__default.createElement(Paper.Paper, __spreadValues(__spreadValues({ ref }, getStyles("root")), others), content));
});
Card.classes = Card_module['default'];
Card.displayName = "@mantine/core/Card";
Card.Section = CardSection.CardSection;

exports.Card = Card;
//# sourceMappingURL=Card.js.map
