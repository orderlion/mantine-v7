import React from 'react';
import { rem, Input } from '@mantine/core';
import { InputStylesApi } from '@mantine/styles-api';
import { IconAt, IconChevronDown } from '@tabler/icons-react';

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
  const at = /* @__PURE__ */ React.createElement(IconAt, { style: { width: rem(16), height: rem(16) }, stroke: 1.5 });
  const chevron = /* @__PURE__ */ React.createElement(IconChevronDown, { style: { width: rem(16), height: rem(16) }, stroke: 1.5 });
  return /* @__PURE__ */ React.createElement(Input, __spreadValues({ placeholder: "Input component", leftSection: at, rightSection: chevron }, props));
}
const stylesApi = {
  type: "styles-api",
  data: InputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { stylesApi };
//# sourceMappingURL=Input.demo.stylesApi.js.map
