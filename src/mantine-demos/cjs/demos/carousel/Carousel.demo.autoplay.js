'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var carousel = require('@mantine/carousel');
var Autoplay = require('embla-carousel-autoplay');
var _slides = require('./_slides.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Autoplay__default = /*#__PURE__*/_interopDefaultLegacy(Autoplay);

const code = `
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
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
  const autoplay2 = React.useRef(Autoplay__default({ delay: 2e3 }));
  return /* @__PURE__ */ React__default.createElement(
    carousel.Carousel,
    {
      withIndicators: true,
      height: 200,
      plugins: [autoplay2.current],
      onMouseEnter: autoplay2.current.stop,
      onMouseLeave: autoplay2.current.reset
    },
    /* @__PURE__ */ React__default.createElement(_slides.Slides, { count: 5 })
  );
}
const autoplay = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 320
};

exports.autoplay = autoplay;
//# sourceMappingURL=Carousel.demo.autoplay.js.map
