import React from 'react';
import cx from 'clsx';
import { factory, useProps, useStyles, Box } from '@mantine/core';
import hljs from 'highlight.js';
import _classes from './CodeHighlight.module.css.js';
import themeClasses from './CodeHighlight.theme.module.css.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const classes = __spreadProps(__spreadValues({}, _classes), { code: cx(_classes.code, themeClasses.theme) });
const defaultProps = {
  language: "tsx"
};
const InlineCodeHighlight = factory((_props, ref) => {
  const props = useProps("InlineCodeHighlight", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, code, language } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "code", "language"]);
  const getStyles = useStyles({
    name: "InlineCodeHighlight",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "code"
  });
  const highlighted = hljs.highlight(code.trim(), { language }).value;
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("code")), {
      component: "code",
      ref
    }), others), {
      dangerouslySetInnerHTML: { __html: highlighted }
    })
  );
});
InlineCodeHighlight.displayName = "@mantine/core/InlineCodeHighlight";

export { InlineCodeHighlight };
//# sourceMappingURL=InlineCodeHighlight.js.map
