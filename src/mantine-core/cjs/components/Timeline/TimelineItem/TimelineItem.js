'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Timeline_context = require('../Timeline.context.js');
var Timeline_module = require('../Timeline.module.css.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var MantineThemeProvider = require('../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var Box = require('../../../core/Box/Box.js');
var getSize = require('../../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const TimelineItem = factory.factory((_props, ref) => {
  const props = useProps.useProps("TimelineItem", defaultProps, _props);
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
  const ctx = Timeline_context.useTimelineContext();
  const theme = MantineThemeProvider.useMantineTheme();
  const stylesApiProps = { classNames, styles };
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("item", __spreadProps(__spreadValues({}, stylesApiProps), { className, style }))), {
      mod: { "line-active": __lineActive, active: __active },
      ref,
      __vars: {
        "--tli-radius": radius ? getSize.getRadius(radius) : void 0,
        "--tli-color": color ? getThemeColor.getThemeColor(color, theme) : void 0,
        "--tli-border-style": lineVariant || void 0
      }
    }), others),
    /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadProps(__spreadValues({}, ctx.getStyles("itemBullet", stylesApiProps)), {
        mod: { "with-child": !!bullet, align: __align, active: __active }
      }),
      bullet
    ),
    /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, ctx.getStyles("itemBody", stylesApiProps)), title && /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, ctx.getStyles("itemTitle", stylesApiProps)), title), /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, ctx.getStyles("itemContent", stylesApiProps)), children))
  );
});
TimelineItem.classes = Timeline_module['default'];
TimelineItem.displayName = "@mantine/core/TimelineItem";

exports.TimelineItem = TimelineItem;
//# sourceMappingURL=TimelineItem.js.map
