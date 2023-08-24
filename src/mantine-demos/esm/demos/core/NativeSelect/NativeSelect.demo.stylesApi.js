import React from 'react';
import { NativeSelect } from '@mantine/core';
import { NativeSelectStylesApi } from '@mantine/styles-api';

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
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(
    NativeSelect,
    __spreadProps(__spreadValues({}, props), {
      data: ["React", "Angular"],
      label: "NativeSelect label",
      description: "NativeSelect description",
      error: "NativeSelect error",
      withAsterisk: true
    })
  );
}
const stylesApi = {
  type: "styles-api",
  data: NativeSelectStylesApi,
  component: Demo,
  centered: true,
  maxWidth: 340,
  code
};

export { stylesApi };
//# sourceMappingURL=NativeSelect.demo.stylesApi.js.map
