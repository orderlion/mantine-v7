'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Input = require('../../Input/Input.js');
var Combobox_context = require('../Combobox.context.js');
var useComboboxTargetProps = require('../use-combobox-target-props/use-combobox-target-props.js');
var Combobox_module = require('../Combobox.module.css.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');

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
  withAriaAttributes: true,
  withKeyboardNavigation: true
};
const ComboboxSearch = factory.factory((_props, ref) => {
  const props = useProps.useProps("ComboboxSearch", defaultProps, _props);
  const _a = props, {
    classNames,
    styles,
    unstyled,
    vars,
    withAriaAttributes,
    onKeyDown,
    withKeyboardNavigation,
    size
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "unstyled",
    "vars",
    "withAriaAttributes",
    "onKeyDown",
    "withKeyboardNavigation",
    "size"
  ]);
  const ctx = Combobox_context.useComboboxContext();
  const _styles = ctx.getStyles("search");
  const targetProps = useComboboxTargetProps.useComboboxTargetProps({
    targetType: "input",
    withAriaAttributes,
    withKeyboardNavigation,
    onKeyDown
  });
  return /* @__PURE__ */ React__default.createElement(
    Input.Input,
    __spreadProps(__spreadValues(__spreadValues({
      ref: hooks.useMergedRef(ref, ctx.store.searchRef),
      classNames: [{ input: _styles.className }, classNames],
      styles: [{ input: _styles.style }, styles],
      size: size || ctx.size
    }, targetProps), others), {
      __staticSelector: "Combobox"
    })
  );
});
ComboboxSearch.classes = Combobox_module['default'];
ComboboxSearch.displayName = "@mantine/core/ComboboxSearch";

exports.ComboboxSearch = ComboboxSearch;
//# sourceMappingURL=ComboboxSearch.js.map
