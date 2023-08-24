import React from 'react';
import { Accordion } from '@mantine/core';
import { AccordionStylesApi } from '@mantine/styles-api';
import { groceries } from './_base.js';

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
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" order={2}{{props}}>
      {items}
    </Accordion>
  );
}
`;
function Demo(props) {
  const items = groceries.map((item) => /* @__PURE__ */ React.createElement(Accordion.Item, { key: item.value, value: item.value }, /* @__PURE__ */ React.createElement(Accordion.Control, { icon: item.emoji }, item.value), /* @__PURE__ */ React.createElement(Accordion.Panel, null, item.description)));
  return /* @__PURE__ */ React.createElement(Accordion, __spreadValues({ defaultValue: "Apples", order: 2 }, props), items);
}
const stylesApi = {
  type: "styles-api",
  data: AccordionStylesApi,
  component: Demo,
  centered: true,
  maxWidth: "100%",
  code
};

export { stylesApi };
//# sourceMappingURL=Accordion.demo.stylesApi.js.map
