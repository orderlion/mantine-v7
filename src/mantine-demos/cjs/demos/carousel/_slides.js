'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var carousel = require('@mantine/carousel');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Slide({ children }) {
  return /* @__PURE__ */ React__default.createElement(
    core.Box,
    {
      style: {
        backgroundColor: "var(--mantine-color-blue-filled)",
        color: "var(--mantine-color-white)",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: core.rem(50),
        fontWeight: "bold"
      }
    },
    children
  );
}
function Slides({ count }) {
  const slides = Array(count).fill(0).map((_, index) => /* @__PURE__ */ React__default.createElement(carousel.Carousel.Slide, { key: index }, /* @__PURE__ */ React__default.createElement(Slide, null, index + 1)));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, slides);
}

exports.Slides = Slides;
//# sourceMappingURL=_slides.js.map
