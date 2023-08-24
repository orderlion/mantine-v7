'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var stylesApi = require('@mantine/styles-api');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`;
function Demo(props) {
  return /* @__PURE__ */ React__default.createElement(
    core.Input.Wrapper,
    __spreadValues({
      label: "Input label",
      description: "Input description",
      error: "Input error",
      withAsterisk: true
    }, props),
    /* @__PURE__ */ React__default.createElement(core.Input, { placeholder: "Input" })
  );
}
const wrapperStylesApi = {
  type: "styles-api",
  data: stylesApi.InputWrapperStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.wrapperStylesApi = wrapperStylesApi;
//# sourceMappingURL=Input.demo.wrapperStylesApi.js.map
