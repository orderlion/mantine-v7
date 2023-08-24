import React from 'react';
import { Pill } from '@mantine/core';
import { PillStylesApi } from '@mantine/styles-api';
import classes from './_demo.module.css.js';

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
import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement("div", { className: classes.demoWrapper }, /* @__PURE__ */ React.createElement(Pill, __spreadProps(__spreadValues({}, props), { withRemoveButton: true, style: { flex: 0 } }), "Test pill"));
}
const stylesApi = {
  type: "styles-api",
  data: PillStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 200
};

export { stylesApi };
//# sourceMappingURL=Pill.demo.stylesApi.js.map
