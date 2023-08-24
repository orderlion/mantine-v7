import React from 'react';
import { Pagination } from '@mantine/core';
import { PaginationStylesApi } from '@mantine/styles-api';

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
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(Pagination, __spreadValues({ total: 10 }, props));
}
const stylesApi = {
  type: "styles-api",
  data: PaginationStylesApi,
  component: Demo,
  code,
  centered: true
};

export { stylesApi };
//# sourceMappingURL=Pagination.demo.stylesApi.js.map
