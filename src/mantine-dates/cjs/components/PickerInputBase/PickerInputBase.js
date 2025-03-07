'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var core = require('@mantine/core');
var PickerInputBase_module = require('./PickerInputBase.module.css.js');
var HiddenDatesInput = require('../HiddenDatesInput/HiddenDatesInput.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
const PickerInputBase = core.factory((_props, ref) => {
  const _a = core.useInputProps("PickerInputBase", defaultProps, _props), {
    inputProps,
    wrapperProps,
    placeholder,
    classNames,
    styles,
    unstyled,
    popoverProps,
    modalProps,
    dropdownType,
    children,
    formattedValue,
    dropdownHandlers,
    dropdownOpened,
    onClick,
    clearable,
    onClear,
    clearButtonProps,
    rightSection,
    shouldClear,
    readOnly,
    disabled,
    value,
    name,
    form,
    type
  } = _a, others = __objRest(_a, [
    "inputProps",
    "wrapperProps",
    "placeholder",
    "classNames",
    "styles",
    "unstyled",
    "popoverProps",
    "modalProps",
    "dropdownType",
    "children",
    "formattedValue",
    "dropdownHandlers",
    "dropdownOpened",
    "onClick",
    "clearable",
    "onClear",
    "clearButtonProps",
    "rightSection",
    "shouldClear",
    "readOnly",
    "disabled",
    "value",
    "name",
    "form",
    "type"
  ]);
  const _rightSection = rightSection || (clearable && shouldClear && !readOnly && !disabled ? /* @__PURE__ */ React__default.createElement(
    core.CloseButton,
    __spreadValues({
      variant: "transparent",
      onClick: onClear,
      unstyled,
      size: inputProps.size
    }, clearButtonProps)
  ) : null);
  const handleClose = () => {
    const isInvalidRangeValue = type === "range" && Array.isArray(value) && value[0] && !value[1];
    if (isInvalidRangeValue) {
      onClear();
    }
    dropdownHandlers.close();
  };
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, dropdownType === "modal" && !readOnly && /* @__PURE__ */ React__default.createElement(
    core.Modal,
    __spreadValues({
      opened: dropdownOpened,
      onClose: handleClose,
      withCloseButton: false,
      size: "auto",
      "data-dates-modal": true,
      unstyled
    }, modalProps),
    children
  ), /* @__PURE__ */ React__default.createElement(core.Input.Wrapper, __spreadValues({}, wrapperProps), /* @__PURE__ */ React__default.createElement(
    core.Popover,
    __spreadValues({
      position: "bottom-start",
      opened: dropdownOpened,
      onClose: handleClose,
      disabled: dropdownType === "modal" || readOnly,
      trapFocus: true,
      returnFocus: true,
      unstyled
    }, popoverProps),
    /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement(
      core.Input,
      __spreadValues(__spreadProps(__spreadValues({
        "data-dates-input": true,
        "data-read-only": readOnly || void 0,
        disabled,
        component: "button",
        type: "button",
        multiline: true,
        onClick: (event) => {
          onClick == null ? void 0 : onClick(event);
          dropdownHandlers.toggle();
        },
        rightSection: _rightSection
      }, inputProps), {
        ref,
        classNames: __spreadProps(__spreadValues({}, classNames), { input: cx__default(PickerInputBase_module['default'].input, classNames == null ? void 0 : classNames.input) })
      }), others),
      formattedValue || /* @__PURE__ */ React__default.createElement(core.Input.Placeholder, { error: inputProps.error }, placeholder)
    )),
    /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, { "data-dates-dropdown": true }, children)
  )), /* @__PURE__ */ React__default.createElement(HiddenDatesInput.HiddenDatesInput, { value, name, form, type }));
});
PickerInputBase.classes = PickerInputBase_module['default'];
PickerInputBase.displayName = "@mantine/dates/PickerInputBase";

exports.PickerInputBase = PickerInputBase;
//# sourceMappingURL=PickerInputBase.js.map
