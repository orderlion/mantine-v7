import React from 'react';
import { Skeleton } from '@mantine/core';

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
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Skeleton, __spreadValues({ height: 50, circle: true, mb: "xl" }, props)), /* @__PURE__ */ React.createElement(Skeleton, __spreadValues({ height: 8, radius: "xl" }, props)), /* @__PURE__ */ React.createElement(Skeleton, __spreadValues({ height: 8, mt: 6, radius: "xl" }, props)), /* @__PURE__ */ React.createElement(Skeleton, __spreadValues({ height: 8, mt: 6, width: "70%", radius: "xl" }, props)));
}
const code = (props) => `
  import { Skeleton } from '@mantine/core';

  function Demo() {
    return (
      <>
        <Skeleton${props.animate ? "" : " animate={false}"} height={50} circle mb="xl" />
        <Skeleton${props.animate ? "" : " animate={false}"} height={8} radius="xl" />
        <Skeleton${props.animate ? "" : " animate={false}"} height={8} mt={6} radius="xl" />
        <Skeleton${props.animate ? "" : " animate={false}"} height={8} mt={6} width="70%" radius="xl" />
      </>
    );
  }
  `;
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [{ prop: "animate", type: "boolean", initialValue: true, libraryValue: "__" }]
};

export { configurator };
//# sourceMappingURL=Skeleton.demo.configurator.js.map
