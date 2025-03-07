'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var TimelineItem = require('./TimelineItem/TimelineItem.js');
var Timeline_context = require('./Timeline.context.js');
var Timeline_module = require('./Timeline.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var rem = require('../../core/utils/units-converters/rem.js');
var getSize = require('../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');

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
const defaultProps = {
  active: -1,
  radius: "xl",
  bulletSize: 20,
  align: "left",
  lineWidth: 4,
  reverseActive: false
};
const varsResolver = createVarsResolver.createVarsResolver(
  (theme, { bulletSize, lineWidth, radius, color }) => ({
    root: {
      "--tl-bullet-size": rem.rem(bulletSize),
      "--tl-line-width": rem.rem(lineWidth),
      "--tl-radius": getSize.getRadius(radius),
      "--tl-color": getThemeColor.getThemeColor(color, theme)
    }
  })
);
const Timeline = factory.factory((_props, ref) => {
  const props = useProps.useProps("Timeline", defaultProps, _props);
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
  const getStyles = useStyles.useStyles({
    name: "Timeline",
    classes: Timeline_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const _children = React.Children.toArray(children);
  const items = _children.map(
    (item, index) => {
      var _a2, _b;
      return React.cloneElement(item, {
        unstyled,
        __align: align,
        __active: ((_a2 = item.props) == null ? void 0 : _a2.active) || (reverseActive ? active >= _children.length - index - 1 : active >= index),
        __lineActive: ((_b = item.props) == null ? void 0 : _b.lineActive) || (reverseActive ? active >= _children.length - index - 1 : active - 1 >= index)
      });
    }
  );
  return /* @__PURE__ */ React__default.createElement(Timeline_context.TimelineProvider, { value: { getStyles } }, /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { mod: { align }, ref }), others), items));
});
Timeline.classes = Timeline_module['default'];
Timeline.displayName = "@mantine/core/Timeline";
Timeline.Item = TimelineItem.TimelineItem;

exports.Timeline = Timeline;
//# sourceMappingURL=Timeline.js.map
