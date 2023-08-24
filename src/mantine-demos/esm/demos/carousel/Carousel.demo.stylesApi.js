import React from 'react';
import { Carousel } from '@mantine/carousel';
import { CarouselStylesApi } from '@mantine/styles-api';
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
const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}{{props}}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(Carousel, __spreadValues({ withIndicators: true, height: 200 }, props), /* @__PURE__ */ React.createElement(Slides, { count: 2 }));
}
const stylesApi = {
  type: "styles-api",
  data: CarouselStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: "100%"
};

export { stylesApi };
//# sourceMappingURL=Carousel.demo.stylesApi.js.map
