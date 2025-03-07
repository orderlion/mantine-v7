'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ProgressRoot = require('./ProgressRoot/ProgressRoot.js');
var ProgressSection = require('./ProgressSection/ProgressSection.js');
var ProgressLabel = require('./ProgressLabel/ProgressLabel.js');
var Progress_module = require('./Progress.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useResolvedStylesApi = require('../../core/styles-api/use-resolved-styles-api/use-resolved-styles-api.js');

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
  size: "md"
};
const Progress = factory.factory((_props, ref) => {
  const props = useProps.useProps("Progress", defaultProps, _props);
  const _a = props, {
    value,
    classNames,
    styles,
    vars,
    color,
    striped,
    animated,
    "aria-label": label
  } = _a, others = __objRest(_a, [
    "value",
    "classNames",
    "styles",
    "vars",
    "color",
    "striped",
    "animated",
    "aria-label"
  ]);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi.useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ React__default.createElement(
    ProgressRoot.ProgressRoot,
    __spreadValues({
      ref,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      vars
    }, others),
    /* @__PURE__ */ React__default.createElement(
      ProgressSection.ProgressSection,
      {
        value,
        color,
        striped,
        animated,
        "aria-label": label
      }
    )
  );
});
Progress.classes = Progress_module['default'];
Progress.displayName = "@mantine/core/Progress";
Progress.Section = ProgressSection.ProgressSection;
Progress.Root = ProgressRoot.ProgressRoot;
Progress.Label = ProgressLabel.ProgressLabel;

exports.Progress = Progress;
//# sourceMappingURL=Progress.js.map
