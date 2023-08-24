import React, { useState } from 'react';
import { DEFAULT_THEME, ColorSwatch, CheckIcon, Input, Group, Popover, UnstyledButton, ColorPicker } from '@mantine/core';
import { getControlLabel } from './get-control-label.js';
import { ColorWheelIcon } from './ColorWheelIcon.js';
import classes from './ConfiguratorColor.control.module.css.js';

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
  const [colorPickerColor, setColorPickerColor] = useState("#fff");
  const handleColorPickerChange = (color) => {
    setColorPickerColor(color);
    onChange(color);
  };
  const colors = Object.keys(DEFAULT_THEME.colors).filter((color) => color !== "dark").map((color) => /* @__PURE__ */ React.createElement(
    ColorSwatch,
    {
      color: `var(--mantine-color-${color}-filled)`,
      component: "button",
      key: color,
      onClick: () => onChange(color),
      radius: "sm",
      className: classes.swatch
    },
    value === color && /* @__PURE__ */ React.createElement(CheckIcon, { className: classes.check })
  ));
  return /* @__PURE__ */ React.createElement(Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel(prop) }, others), /* @__PURE__ */ React.createElement(Group, { gap: 2, mt: 2, wrap: "wrap" }, colors, /* @__PURE__ */ React.createElement(Popover, { radius: "md", position: "bottom-end", shadow: "md" }, /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(UnstyledButton, { className: classes.colorControl }, /* @__PURE__ */ React.createElement(ColorWheelIcon, null))), /* @__PURE__ */ React.createElement(Popover.Dropdown, { p: 8 }, /* @__PURE__ */ React.createElement(
    ColorPicker,
    {
      value: colorPickerColor,
      onChange: handleColorPickerChange,
      format: "rgba"
    }
  )))));
}

export { ConfiguratorColorControl };
//# sourceMappingURL=ConfiguratorColor.control.js.map
