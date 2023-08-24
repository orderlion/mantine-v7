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
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
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
      slideSize: { base: "100%", sm: "50%", md: "33.333333%" },
      slideGap: { base: 0, sm: "md" },
      loop: true,
      align: "start"
    },
    /* @__PURE__ */ React__default.createElement(_slides.Slides, { count: 6 })
  );
}
const breakpoints = {
  type: "code",
  component: Demo,
  code
};

exports.breakpoints = breakpoints;
//# sourceMappingURL=Carousel.demo.breakpoints.js.map
