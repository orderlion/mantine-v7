'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var carousel = require('@mantine/carousel');
var _slides = require('./_slides.js');
var Carousel_demo_indicatorStyles_module = require('./Carousel.demo.indicatorStyles.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const cssCode = `
.indicator {
  width: rem(12px);
  height: rem(4px);
  transition: width 250ms ease;

  &[data-active] {
    width: rem(40px);
  }
}`;
const code = `
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel withIndicators height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(carousel.Carousel, { withIndicators: true, height: 200, classNames: Carousel_demo_indicatorStyles_module['default'] }, /* @__PURE__ */ React__default.createElement(_slides.Slides, { count: 5 }));
}
const indicatorStyles = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "scss" }
  ],
  centered: true,
  maxWidth: 320
};

exports.indicatorStyles = indicatorStyles;
//# sourceMappingURL=Carousel.demo.indicatorStyles.js.map
