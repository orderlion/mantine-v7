'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Spoiler_module = require('./Spoiler.module.css.js');
var Anchor = require('../Anchor/Anchor.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var rem = require('../../core/utils/units-converters/rem.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');

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
  maxHeight: 100,
  initialState: false
};
const varsResolver = createVarsResolver.createVarsResolver((_, { transitionDuration }) => ({
  root: {
    "--spoiler-transition-duration": transitionDuration !== void 0 ? `${transitionDuration}ms` : void 0
  }
}));
const Spoiler = factory.factory((_props, ref) => {
  const props = useProps.useProps("Spoiler", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    initialState,
    maxHeight,
    hideLabel,
    showLabel,
    children,
    controlRef
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "initialState",
    "maxHeight",
    "hideLabel",
    "showLabel",
    "children",
    "controlRef"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Spoiler",
    classes: Spoiler_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const [show, setShowState] = React.useState(initialState);
  const { ref: contentRef, height } = hooks.useElementSize();
  const spoiler = maxHeight < height;
  const spoilerMoreContent = show ? hideLabel : showLabel;
  const s = {
    maxHeight: !show ? rem.rem(maxHeight) : height ? rem.rem(height) : void 0
  };
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { ref }), others), /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, getStyles("content", { style: s })), { "data-reduce-motion": true }), /* @__PURE__ */ React__default.createElement("div", { ref: contentRef }, children)), spoiler && /* @__PURE__ */ React__default.createElement(
    Anchor.Anchor,
    __spreadValues({
      component: "button",
      ref: controlRef,
      onClick: () => setShowState((opened) => !opened)
    }, getStyles("control")),
    spoilerMoreContent
  ));
});
Spoiler.classes = Spoiler_module['default'];
Spoiler.displayName = "@mantine/core/Spoiler";

exports.Spoiler = Spoiler;
//# sourceMappingURL=Spoiler.js.map
