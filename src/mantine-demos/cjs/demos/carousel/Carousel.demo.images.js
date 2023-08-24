'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var carousel = require('@mantine/carousel');
var core = require('@mantine/core');
var _images = require('./_images.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [/* ... urls of images */];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return <Carousel withIndicators>{slides}</Carousel>;
}
`;
function Demo() {
  const slides = _images.images.map((url) => /* @__PURE__ */ React__default.createElement(carousel.Carousel.Slide, { key: url }, /* @__PURE__ */ React__default.createElement(core.Image, { src: url })));
  return /* @__PURE__ */ React__default.createElement(carousel.Carousel, { withIndicators: true }, slides);
}
const images = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 320,
  centered: true
};

exports.images = images;
//# sourceMappingURL=Carousel.demo.images.js.map
