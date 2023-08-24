import React from 'react';
import { Switch } from '@mantine/core';
import { SwitchStylesApi } from '@mantine/styles-api';

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
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(
    Switch,
    __spreadProps(__spreadValues({}, props), {
      label: "Switch component",
      description: "Switch description",
      error: "Switch error"
    })
  );
}
const stylesApi = {
  type: "styles-api",
  data: SwitchStylesApi,
  component: Demo,
  centered: true,
  code
};

export { stylesApi };
//# sourceMappingURL=Switch.demo.stylesApi.js.map
