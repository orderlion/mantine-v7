import React, { forwardRef } from 'react';
import classes from './InlineInput.module.css.js';
import { Input } from '../Input/Input.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { getFontSize, getSize } from '../../core/utils/get-size/get-size.js';

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
const InlineInputClasses = classes;
const InlineInput = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      __staticSelector,
      __stylesApiProps,
      className,
      classNames,
      styles,
      unstyled,
      children,
      label,
      description,
      id,
      disabled,
      error,
      size = "sm",
      labelPosition = "left",
      variant,
      style,
      vars
    } = _b, others = __objRest(_b, [
      "__staticSelector",
      "__stylesApiProps",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "children",
      "label",
      "description",
      "id",
      "disabled",
      "error",
      "size",
      "labelPosition",
      "variant",
      "style",
      "vars"
    ]);
    const getStyles = useStyles({
      name: __staticSelector,
      props: __stylesApiProps,
      className,
      style,
      classes,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React.createElement(
      Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
        ref,
        __vars: {
          "--label-fz": getFontSize(size),
          "--label-lh": getSize(size, "label-lh")
        },
        mod: { "label-position": labelPosition },
        variant,
        size
      }), others),
      /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("body")), children, /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("labelWrapper")), label && /* @__PURE__ */ React.createElement("label", __spreadProps(__spreadValues({}, getStyles("label")), { "data-disabled": disabled || void 0, htmlFor: id }), label), description && /* @__PURE__ */ React.createElement(Input.Description, __spreadValues({ size }, getStyles("description")), description), error && error !== "boolean" && /* @__PURE__ */ React.createElement(Input.Error, __spreadValues({ size }, getStyles("error")), error)))
    );
  }
);
InlineInput.displayName = "@mantine/core/InlineInput";

export { InlineInput, InlineInputClasses };
//# sourceMappingURL=InlineInput.js.map
