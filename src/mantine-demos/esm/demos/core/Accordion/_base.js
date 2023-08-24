import React from 'react';
import { Accordion } from '@mantine/core';

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
const groceries = [
  {
    emoji: "\u{1F34E}",
    value: "Apples",
    description: "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."
  },
  {
    emoji: "\u{1F34C}",
    value: "Bananas",
    description: "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking."
  },
  {
    emoji: "\u{1F966}",
    value: "Broccoli",
    description: "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries."
  }
];
const baseDemoItems = groceries.map((item) => /* @__PURE__ */ React.createElement(Accordion.Item, { key: item.value, value: item.value }, /* @__PURE__ */ React.createElement(Accordion.Control, { icon: item.emoji }, item.value), /* @__PURE__ */ React.createElement(Accordion.Panel, null, item.description)));
function BaseDemo(props) {
  return /* @__PURE__ */ React.createElement(Accordion, __spreadValues({}, props), baseDemoItems);
}

export { BaseDemo, baseDemoItems, groceries };
//# sourceMappingURL=_base.js.map
