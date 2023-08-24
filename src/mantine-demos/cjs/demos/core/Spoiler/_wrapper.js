'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const content = /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(
  core.Box,
  {
    component: "img",
    h: 150,
    ml: 20,
    mb: 0,
    mt: 5,
    maw: "100%",
    style: { float: "right" },
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Rock_in_caputh-WBTBWB-47.jpg/600px-Rock_in_caputh-WBTBWB-47.jpg",
    alt: "We Butter the Bread with Butter"
  }
), /* @__PURE__ */ React__default.createElement(core.Text, null, `We Butter the Bread with Butter was founded in 2007 by Marcel Neumann, who was originally guitarist for Martin Kesici's band, and Tobias Schultka. The band was originally meant as a joke, but progressed into being a more serious musical duo. The name for the band has no particular meaning, although its origins were suggested from when the two original members were driving in a car operated by Marcel Neumann and an accident almost occurred. Neumann found Schultka "so funny that he briefly lost control of the vehicle." Many of their songs from this point were covers of German folk tales and nursery rhymes.`));
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 520, mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.Spoiler, __spreadValues({ maxHeight: 120, showLabel: "Show more", hideLabel: "Hide" }, props), content));
}

exports.Wrapper = Wrapper;
//# sourceMappingURL=_wrapper.js.map
