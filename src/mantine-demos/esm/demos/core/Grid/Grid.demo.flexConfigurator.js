import React from 'react';
import { Grid, rem } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

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
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Grid, __spreadProps(__spreadValues({}, props), { id: "grid-configurator" }), /* @__PURE__ */ React.createElement(ColWrapper, { span: 3, style: { minHeight: rem(80) } }, "1"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 3, style: { minHeight: rem(120) } }, "2"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 3 }, "3"));
}
const code = `
import { Grid, rem } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={3} style={{ minHeight: rem(80) }}>1</Grid.Col>
      <Grid.Col span={3} style={{ minHeight: rem(120) }}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
    </Grid>
  );
}
`;
const flexConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "justify",
      type: "select",
      initialValue: "flex-start",
      libraryValue: "__",
      data: [
        { label: "flex-start", value: "flex-start" },
        { label: "flex-end", value: "flex-end" },
        { label: "center", value: "center" },
        { label: "space-between", value: "space-between" },
        { label: "space-around", value: "space-around" }
      ]
    },
    {
      prop: "align",
      type: "select",
      initialValue: "stretch",
      libraryValue: "__",
      data: [
        { label: "flex-start", value: "flex-start" },
        { label: "flex-end", value: "flex-end" },
        { label: "center", value: "center" },
        { label: "stretch", value: "stretch" }
      ]
    }
  ]
};

export { flexConfigurator };
//# sourceMappingURL=Grid.demo.flexConfigurator.js.map
