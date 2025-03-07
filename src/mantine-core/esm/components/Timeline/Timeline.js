import React, { Children, cloneElement } from 'react';
import { TimelineItem } from './TimelineItem/TimelineItem.js';
import { TimelineProvider } from './Timeline.context.js';
import classes from './Timeline.module.css.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { rem } from '../../core/utils/units-converters/rem.js';
import { getRadius } from '../../core/utils/get-size/get-size.js';
import { getThemeColor } from '../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';

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
const defaultProps = {
  active: -1,
  radius: "xl",
  bulletSize: 20,
  align: "left",
  lineWidth: 4,
  reverseActive: false
};
const varsResolver = createVarsResolver(
  (theme, { bulletSize, lineWidth, radius, color }) => ({
    root: {
      "--tl-bullet-size": rem(bulletSize),
      "--tl-line-width": rem(lineWidth),
      "--tl-radius": getRadius(radius),
      "--tl-color": getThemeColor(color, theme)
    }
  })
);
const Timeline = factory((_props, ref) => {
  const props = useProps("Timeline", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    active,
    color,
    radius,
    bulletSize,
    align,
    lineWidth,
    reverseActive
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "active",
    "color",
    "radius",
    "bulletSize",
    "align",
    "lineWidth",
    "reverseActive"
  ]);
  const getStyles = useStyles({
    name: "Timeline",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const _children = Children.toArray(children);
  const items = _children.map(
    (item, index) => {
      var _a2, _b;
      return cloneElement(item, {
        unstyled,
        __align: align,
        __active: ((_a2 = item.props) == null ? void 0 : _a2.active) || (reverseActive ? active >= _children.length - index - 1 : active >= index),
        __lineActive: ((_b = item.props) == null ? void 0 : _b.lineActive) || (reverseActive ? active >= _children.length - index - 1 : active - 1 >= index)
      });
    }
  );
  return /* @__PURE__ */ React.createElement(TimelineProvider, { value: { getStyles } }, /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { mod: { align }, ref }), others), items));
});
Timeline.classes = classes;
Timeline.displayName = "@mantine/core/Timeline";
Timeline.Item = TimelineItem;

export { Timeline };
//# sourceMappingURL=Timeline.js.map
