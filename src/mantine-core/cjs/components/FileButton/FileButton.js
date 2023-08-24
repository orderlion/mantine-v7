'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');

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
  multiple: false
};
const FileButton = React.forwardRef(
  (props, ref) => {
    const _a = useProps.useProps("FileButton", defaultProps, props), {
      onChange,
      children,
      multiple,
      accept,
      name,
      form,
      resetRef,
      disabled,
      capture,
      inputProps
    } = _a, others = __objRest(_a, [
      "onChange",
      "children",
      "multiple",
      "accept",
      "name",
      "form",
      "resetRef",
      "disabled",
      "capture",
      "inputProps"
    ]);
    const inputRef = React.useRef();
    const onClick = () => {
      var _a2;
      !disabled && ((_a2 = inputRef.current) == null ? void 0 : _a2.click());
    };
    const handleChange = (event) => {
      if (multiple) {
        onChange(Array.from(event.currentTarget.files));
      } else {
        onChange(event.currentTarget.files[0] || null);
      }
    };
    const reset = () => {
      inputRef.current.value = "";
    };
    hooks.assignRef(resetRef, reset);
    return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, children(__spreadValues({ onClick }, others)), /* @__PURE__ */ React__default.createElement(
      "input",
      __spreadValues({
        style: { display: "none" },
        type: "file",
        accept,
        multiple,
        onChange: handleChange,
        ref: hooks.useMergedRef(ref, inputRef),
        name,
        form,
        capture
      }, inputProps)
    ));
  }
);
FileButton.displayName = "@mantine/core/FileButton";

exports.FileButton = FileButton;
//# sourceMappingURL=FileButton.js.map
