import React from 'react';
import { FileInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { FileInputStylesApi } from '@mantine/styles-api';

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
import { IconAt } from '@tabler/icons-react';
import { FileInput, rem } from '@mantine/core';

function Demo() {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(
    FileInput,
    __spreadValues({
      label: "Label",
      placeholder: "FileInput",
      description: "Description",
      error: "Error",
      withAsterisk: true,
      leftSection: /* @__PURE__ */ React.createElement(IconAt, { style: { width: rem(18), height: rem(18) } }),
      autosize: true
    }, props)
  );
}
const stylesApi = {
  type: "styles-api",
  data: FileInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { stylesApi };
//# sourceMappingURL=FileInput.demo.stylesApi.js.map
