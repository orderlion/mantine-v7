import React from 'react';
import { TextInput } from '@mantine/core';
import { inputControls } from '../../../shared/input-controls.js';

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
const code = `
import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(TextInput, __spreadProps(__spreadValues({}, props), { placeholder: "Input placeholder" }));
}
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls
};

export { usage };
//# sourceMappingURL=TextInput.demo.usage.js.map
