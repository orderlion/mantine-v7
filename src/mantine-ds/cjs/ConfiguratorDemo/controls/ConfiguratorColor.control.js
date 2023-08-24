'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var getControlLabel = require('./get-control-label.js');
var ColorWheelIcon = require('./ColorWheelIcon.js');
var ConfiguratorColor_control_module = require('./ConfiguratorColor.control.module.css.js');

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
function ConfiguratorColorControl(_a) {
  var _b = _a, {
    value,
    onChange,
    prop
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "prop"
  ]);
  const [colorPickerColor, setColorPickerColor] = React.useState("#fff");
  const handleColorPickerChange = (color) => {
    setColorPickerColor(color);
    onChange(color);
  };
  const colors = Object.keys(core.DEFAULT_THEME.colors).filter((color) => color !== "dark").map((color) => /* @__PURE__ */ React__default.createElement(
    core.ColorSwatch,
    {
      color: `var(--mantine-color-${color}-filled)`,
      component: "button",
      key: color,
      onClick: () => onChange(color),
      radius: "sm",
      className: ConfiguratorColor_control_module['default'].swatch
    },
    value === color && /* @__PURE__ */ React__default.createElement(core.CheckIcon, { className: ConfiguratorColor_control_module['default'].check })
  ));
  return /* @__PURE__ */ React__default.createElement(core.Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel.getControlLabel(prop) }, others), /* @__PURE__ */ React__default.createElement(core.Group, { gap: 2, mt: 2, wrap: "wrap" }, colors, /* @__PURE__ */ React__default.createElement(core.Popover, { radius: "md", position: "bottom-end", shadow: "md" }, /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement(core.UnstyledButton, { className: ConfiguratorColor_control_module['default'].colorControl }, /* @__PURE__ */ React__default.createElement(ColorWheelIcon.ColorWheelIcon, null))), /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, { p: 8 }, /* @__PURE__ */ React__default.createElement(
    core.ColorPicker,
    {
      value: colorPickerColor,
      onChange: handleColorPickerChange,
      format: "rgba"
    }
  )))));
}

exports.ConfiguratorColorControl = ConfiguratorColorControl;
//# sourceMappingURL=ConfiguratorColor.control.js.map
