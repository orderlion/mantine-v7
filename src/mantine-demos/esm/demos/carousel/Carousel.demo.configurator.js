import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Slides } from './_slides.js';

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
  return /* @__PURE__ */ React.createElement(Carousel, __spreadValues({ height: 200, slideSize: "70%" }, props), /* @__PURE__ */ React.createElement(Slides, { count: 5 }));
}
const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel slideSize="70%" height={200}{{props}}>
      {/* ...slides */}
    </Carousel>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: "100%",
  controls: [
    {
      prop: "align",
      type: "segmented",
      initialValue: "center",
      libraryValue: "center",
      data: [
        { label: "Start", value: "start" },
        { label: "Center", value: "center" },
        { label: "End", value: "end" }
      ]
    },
    {
      prop: "orientation",
      type: "segmented",
      initialValue: "horizontal",
      libraryValue: "horizontal",
      data: [
        { label: "Horizontal", value: "horizontal" },
        { label: "Vertical", value: "vertical" }
      ]
    },
    { prop: "slideGap", type: "size", initialValue: "md", libraryValue: "__" },
    { prop: "controlsOffset", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "controlSize", type: "number", min: 14, max: 40, initialValue: 26, libraryValue: 26 },
    { prop: "loop", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "dragFree", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "draggable", type: "boolean", initialValue: true, libraryValue: true },
    { prop: "withControls", type: "boolean", initialValue: true, libraryValue: true },
    { prop: "withIndicators", type: "boolean", initialValue: false, libraryValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=Carousel.demo.configurator.js.map
