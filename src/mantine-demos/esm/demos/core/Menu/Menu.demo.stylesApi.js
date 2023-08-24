import React from 'react';
import { Menu } from '@mantine/core';
import { MenuStylesApi } from '@mantine/styles-api';
import { DemoMenuItems } from './_menu-items.js';

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
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu {...props} opened withArrow position="left">
      {/* ... menu items */}
    </Menu>
  );
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(Menu, __spreadProps(__spreadValues({}, props), { opened: true, withArrow: true, position: "left" }), /* @__PURE__ */ React.createElement(DemoMenuItems, null));
}
const stylesApi = {
  type: "styles-api",
  data: MenuStylesApi,
  component: Demo,
  code,
  centered: true
};

export { stylesApi };
//# sourceMappingURL=Menu.demo.stylesApi.js.map
