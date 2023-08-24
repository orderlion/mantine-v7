import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api.js';
import { ColorPickerStylesApi } from './ColorPicker.styles-api.js';

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
const ColorInputStylesApi = {
  selectors: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors), ColorPickerStylesApi.selectors), {
    dropdown: "Popover dropdown",
    colorPreview: "Color swatch preview in input left section",
    eyeDropperButton: "Eye dropper button",
    eyeDropperIcon: "Default eye dropper icon"
  }),
  vars: {
    colorPreview: {
      "--ci-preview-size": "Controls `width` and `height` of color preview"
    },
    eyeDropperIcon: {
      "--ci-eye-dropper-icon-size": "Controls width and height of the eye dropper icon"
    }
  }
};

export { ColorInputStylesApi };
//# sourceMappingURL=ColorInput.styles-api.js.map
