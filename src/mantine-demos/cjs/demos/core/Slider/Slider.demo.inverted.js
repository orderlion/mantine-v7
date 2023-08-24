'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Slider, { inverted: true, defaultValue: 80 }), /* @__PURE__ */ React__default.createElement(core.RangeSlider, { inverted: true, defaultValue: [40, 80], mt: "xl" }));
}
const inverted = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400
};

exports.inverted = inverted;
//# sourceMappingURL=Slider.demo.inverted.js.map
