'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var stylesApi$1 = require('@mantine/styles-api');
var core = require('@mantine/core');
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
import { Badge, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
`;
function Demo(props) {
  const icon = /* @__PURE__ */ React__default.createElement(iconsReact.IconAt, { style: { width: core.rem(12), height: core.rem(12) } });
  return /* @__PURE__ */ React__default.createElement(core.Badge, __spreadValues({ leftSection: icon, rightSection: icon }, props), "Badge component");
}
const stylesApi = {
  type: "styles-api",
  data: stylesApi$1.BadgeStylesApi,
  component: Demo,
  centered: true,
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Badge.demo.stylesApi.js.map
