import React from 'react';
import { PinInput } from '@mantine/core';
import { PinInputStylesApi } from '@mantine/styles-api';

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
const code = `
import { PinInput } from '@mantine/core';

function Demo() {
  return (
    <PinInput{{props}} />
  );
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(PinInput, __spreadValues({}, props));
}
const stylesApi = {
  type: "styles-api",
  data: PinInputStylesApi,
  component: Demo,
  code,
  centered: true
};

export { stylesApi };
//# sourceMappingURL=PinInput.demo.stylesApi.js.map
