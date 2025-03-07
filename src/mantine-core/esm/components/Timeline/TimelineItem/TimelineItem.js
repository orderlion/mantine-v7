import React from 'react';
import { useTimelineContext } from '../Timeline.context.js';
import classes from '../Timeline.module.css.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { useMantineTheme } from '../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { Box } from '../../../core/Box/Box.js';
import { getRadius } from '../../../core/utils/get-size/get-size.js';
import { getThemeColor } from '../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';

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
const defaultProps = {};
const TimelineItem = factory((_props, ref) => {
  const props = useProps("TimelineItem", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __active,
    __align,
    __lineActive,
    __vars,
    bullet,
    radius,
    color,
    lineVariant,
    children,
    title
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "__active",
    "__align",
    "__lineActive",
    "__vars",
    "bullet",
    "radius",
    "color",
    "lineVariant",
    "children",
    "title"
  ]);
  const ctx = useTimelineContext();
  const theme = useMantineTheme();
  const stylesApiProps = { classNames, styles };
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("item", __spreadProps(__spreadValues({}, stylesApiProps), { className, style }))), {
      mod: { "line-active": __lineActive, active: __active },
      ref,
      __vars: {
        "--tli-radius": radius ? getRadius(radius) : void 0,
        "--tli-color": color ? getThemeColor(color, theme) : void 0,
        "--tli-border-style": lineVariant || void 0
      }
    }), others),
    /* @__PURE__ */ React.createElement(
      Box,
      __spreadProps(__spreadValues({}, ctx.getStyles("itemBullet", stylesApiProps)), {
        mod: { "with-child": !!bullet, align: __align, active: __active }
      }),
      bullet
    ),
    /* @__PURE__ */ React.createElement("div", __spreadValues({}, ctx.getStyles("itemBody", stylesApiProps)), title && /* @__PURE__ */ React.createElement("div", __spreadValues({}, ctx.getStyles("itemTitle", stylesApiProps)), title), /* @__PURE__ */ React.createElement("div", __spreadValues({}, ctx.getStyles("itemContent", stylesApiProps)), children))
  );
});
TimelineItem.classes = classes;
TimelineItem.displayName = "@mantine/core/TimelineItem";

export { TimelineItem };
//# sourceMappingURL=TimelineItem.js.map
