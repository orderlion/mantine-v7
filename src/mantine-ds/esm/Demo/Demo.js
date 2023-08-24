import React from 'react';
import { CodeDemo } from '../CodeDemo/CodeDemo.js';
import { ConfiguratorDemo } from '../ConfiguratorDemo/ConfiguratorDemo.js';
import { StylesApiDemo } from '../StylesApiDemo/StylesApiDemo.js';

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
function Demo({ data }) {
  const { component: Component } = data;
  switch (data.type) {
    case "code":
      return /* @__PURE__ */ React.createElement(CodeDemo, __spreadValues({}, data), /* @__PURE__ */ React.createElement(Component, null));
    case "configurator":
      return /* @__PURE__ */ React.createElement(ConfiguratorDemo, __spreadValues({}, data), /* @__PURE__ */ React.createElement(Component, null));
    case "styles-api":
      return /* @__PURE__ */ React.createElement(StylesApiDemo, __spreadValues({}, data), /* @__PURE__ */ React.createElement(Component, null));
    default:
      return null;
  }
}

export { Demo };
//# sourceMappingURL=Demo.js.map
