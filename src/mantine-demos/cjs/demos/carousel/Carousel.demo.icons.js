'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var carousel = require('@mantine/carousel');
var iconsReact = require('@tabler/icons-react');
var _slides = require('./_slides.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
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
      height: 180,
      nextControlIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowRight, { style: { width: core.rem(16), height: core.rem(16) } }),
      previousControlIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowLeft, { style: { width: core.rem(16), height: core.rem(16) } })
    },
    /* @__PURE__ */ React__default.createElement(_slides.Slides, { count: 5 })
  );
}
const icons = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 320
};

exports.icons = icons;
//# sourceMappingURL=Carousel.demo.icons.js.map
