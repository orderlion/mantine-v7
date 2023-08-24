import React from 'react';
import { Slider } from '@mantine/core';
import { SliderStylesApi } from '@mantine/styles-api';

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
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(
    Slider,
    __spreadValues({
      marks: [
        { value: 20, label: "20%" },
        { value: 80, label: "80%" }
      ],
      defaultValue: 40,
      labelAlwaysOn: true
    }, props)
  );
}
const stylesApi = {
  type: "styles-api",
  data: SliderStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 400
};

export { stylesApi };
//# sourceMappingURL=Slider.demo.stylesApi.js.map
