'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var carousel = require('@mantine/carousel');
var _slides = require('./_slides.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    carousel.Carousel,
    {
      withIndicators: true,
      height: 200,
      slideSize: "33.333333%",
      slideGap: "md",
      loop: true,
      align: "start",
      slidesToScroll: 3
    },
    /* @__PURE__ */ React__default.createElement(_slides.Slides, { count: 12 })
  );
}
const multiple = {
  type: "code",
  component: Demo,
  code
};

exports.multiple = multiple;
//# sourceMappingURL=Carousel.demo.multiple.js.map
