'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var carousel = require('@mantine/carousel');
var _slides = require('./_slides.js');
var Carousel_demo_controlsStyles_module = require('./Carousel.demo.controlsStyles.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const cssCode = `
.control {
  &[data-inactive] {
    opacity: 0;
    cursor: default;
  }
}
`;
const code = `
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(carousel.Carousel, { height: 200, classNames: Carousel_demo_controlsStyles_module['default'] }, /* @__PURE__ */ React__default.createElement(_slides.Slides, { count: 5 }));
}
const controlsStyles = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "scss" }
  ],
  centered: true,
  maxWidth: 320
};

exports.controlsStyles = controlsStyles;
//# sourceMappingURL=Carousel.demo.controlsStyles.js.map
