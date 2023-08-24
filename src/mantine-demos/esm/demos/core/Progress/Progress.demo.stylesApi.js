import React from 'react';
import { Progress } from '@mantine/core';
import { ProgressStylesApi } from '@mantine/styles-api';

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
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl"{{props}}>
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(Progress.Root, __spreadValues({ size: "xl" }, props), /* @__PURE__ */ React.createElement(Progress.Section, { value: 35 }, /* @__PURE__ */ React.createElement(Progress.Label, null, "Documents")));
}
const stylesApi = {
  type: "styles-api",
  data: ProgressStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 400
};

export { stylesApi };
//# sourceMappingURL=Progress.demo.stylesApi.js.map
