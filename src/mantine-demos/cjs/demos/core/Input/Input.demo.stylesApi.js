'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var stylesApi$1 = require('@mantine/styles-api');
var iconsReact = require('@tabler/icons-react');

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
import { Input, rem } from '@mantine/core';

function Demo() {
  const at = <IconAt style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`;
function Demo(props) {
  const at = /* @__PURE__ */ React__default.createElement(iconsReact.IconAt, { style: { width: core.rem(16), height: core.rem(16) }, stroke: 1.5 });
  const chevron = /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronDown, { style: { width: core.rem(16), height: core.rem(16) }, stroke: 1.5 });
  return /* @__PURE__ */ React__default.createElement(core.Input, __spreadValues({ placeholder: "Input component", leftSection: at, rightSection: chevron }, props));
}
const stylesApi = {
  type: "styles-api",
  data: stylesApi$1.InputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Input.demo.stylesApi.js.map
