import React, { useState } from 'react';
import { Stack, ColorPicker, Text } from '@mantine/core';

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
  const [value, onChange] = useState("#C5D899");
  return /* @__PURE__ */ React.createElement(Stack, { align: "center" }, /* @__PURE__ */ React.createElement(ColorPicker, __spreadValues({ value, onChange }, props)), /* @__PURE__ */ React.createElement(Text, null, value));
}
const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`;
const formatsConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "format",
      type: "select",
      initialValue: "hex",
      libraryValue: "hex",
      data: [
        { value: "hex", label: "HEX" },
        { value: "hexa", label: "HEXA" },
        { value: "rgb", label: "RGB" },
        { value: "rgba", label: "RGBA" },
        { value: "hsl", label: "HSL" },
        { value: "hsla", label: "HSLA" }
      ]
    }
  ]
};

export { formatsConfigurator };
//# sourceMappingURL=ColorPicker.demo.formatsConfigurator.js.map
