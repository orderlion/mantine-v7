import React, { Children, cloneElement } from 'react';
import { CardSection } from './CardSection/CardSection.js';
import { CardProvider } from './Card.context.js';
import classes from './Card.module.css.js';
import { Paper } from '../Paper/Paper.js';
import { polymorphicFactory } from '../../core/factory/polymorphic-factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSpacing } from '../../core/utils/get-size/get-size.js';

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
const varsResolver = createVarsResolver((_, { padding }) => ({
  root: {
    "--card-padding": getSpacing(padding)
  }
}));
const Card = polymorphicFactory((_props, ref) => {
  const props = useProps("Card", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, children, padding } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "children", "padding"]);
  const getStyles = useStyles({
    name: "Card",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const _children = Children.toArray(children);
  const content = _children.map((child, index) => {
    if (typeof child === "object" && child && "type" in child && child.type === CardSection) {
      return cloneElement(child, {
        "data-first-section": index === 0 || void 0,
        "data-last-section": index === _children.length - 1 || void 0
      });
    }
    return child;
  });
  return /* @__PURE__ */ React.createElement(CardProvider, { value: { getStyles } }, /* @__PURE__ */ React.createElement(Paper, __spreadValues(__spreadValues({ ref }, getStyles("root")), others), content));
});
Card.classes = classes;
Card.displayName = "@mantine/core/Card";
Card.Section = CardSection;

export { Card };
//# sourceMappingURL=Card.js.map
