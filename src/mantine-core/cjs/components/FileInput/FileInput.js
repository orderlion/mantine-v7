'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var InputBase = require('../InputBase/InputBase.js');
var CloseButton = require('../CloseButton/CloseButton.js');
var FileButton = require('../FileButton/FileButton.js');
var Input = require('../Input/Input.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');

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
const DefaultValue = ({ value }) => /* @__PURE__ */ React__default.createElement("div", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, Array.isArray(value) ? value.map((file) => file.name).join(", ") : value == null ? void 0 : value.name);
const defaultProps = {
  size: "sm",
  valueComponent: DefaultValue
};
const _FileInput = factory.factory((_props, ref) => {
  const props = useProps.useProps("FileInput", defaultProps, _props);
  const _a = props, {
    unstyled,
    vars,
    onChange,
    value,
    defaultValue,
    multiple,
    accept,
    name,
    form,
    valueComponent,
    clearable,
    clearButtonProps,
    readOnly,
    capture,
    fileInputProps,
    rightSection,
    size,
    placeholder
  } = _a, others = __objRest(_a, [
    "unstyled",
    "vars",
    "onChange",
    "value",
    "defaultValue",
    "multiple",
    "accept",
    "name",
    "form",
    "valueComponent",
    "clearable",
    "clearButtonProps",
    "readOnly",
    "capture",
    "fileInputProps",
    "rightSection",
    "size",
    "placeholder"
  ]);
  const resetRef = React.useRef(null);
  const [_value, setValue] = hooks.useUncontrolled({
    value,
    defaultValue,
    onChange,
    finalValue: multiple ? [] : null
  });
  const hasValue = Array.isArray(_value) ? _value.length !== 0 : _value !== null;
  const _rightSection = rightSection || (clearable && hasValue && !readOnly ? /* @__PURE__ */ React__default.createElement(
    CloseButton.CloseButton,
    __spreadProps(__spreadValues({}, clearButtonProps), {
      variant: "subtle",
      onClick: () => setValue(multiple ? [] : null),
      size,
      unstyled
    })
  ) : null);
  React.useEffect(() => {
    var _a2;
    if (Array.isArray(_value) && _value.length === 0 || _value === null) {
      (_a2 = resetRef.current) == null ? void 0 : _a2.call(resetRef);
    }
  }, [_value]);
  const ValueComponent = valueComponent;
  return /* @__PURE__ */ React__default.createElement(
    FileButton.FileButton,
    {
      onChange: setValue,
      multiple,
      accept,
      name,
      form,
      resetRef,
      disabled: readOnly,
      capture,
      inputProps: fileInputProps
    },
    (fileButtonProps) => /* @__PURE__ */ React__default.createElement(
      InputBase.InputBase,
      __spreadProps(__spreadValues(__spreadValues({
        component: "button",
        ref,
        rightSection: _rightSection
      }, fileButtonProps), others), {
        __staticSelector: "FileInput",
        multiline: true,
        type: "button",
        pointer: true,
        __stylesApiProps: props,
        unstyled,
        size
      }),
      !hasValue ? /* @__PURE__ */ React__default.createElement(Input.Input.Placeholder, null, placeholder) : /* @__PURE__ */ React__default.createElement(ValueComponent, { value: _value })
    )
  );
});
_FileInput.classes = InputBase.InputBase.classes;
_FileInput.displayName = "@mantine/core/FileInput";
const FileInput = _FileInput;

exports.FileInput = FileInput;
//# sourceMappingURL=FileInput.js.map
