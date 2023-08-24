import React from 'react';
import { DEFAULT_THEME, ColorPicker } from '@mantine/core';

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
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(
    ColorPicker,
    __spreadValues({
      mx: "auto",
      format: "hex",
      defaultValue: "rgba(50, 151, 194, 1)",
      swatches: Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])
    }, props)
  );
}
const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors).map((color) => `'${DEFAULT_THEME.colors[color][6]}'`).join(", ")}]} />
  );
}
`;
const swatchesConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    { prop: "swatchesPerRow", type: "number", initialValue: 7, libraryValue: 7, min: 5, max: 12 }
  ]
};

export { swatchesConfigurator };
//# sourceMappingURL=ColorPicker.demo.swatchesConfigurator.js.map
