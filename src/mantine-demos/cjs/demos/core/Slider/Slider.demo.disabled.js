'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={60} disabled />
      <RangeSlider
        mt="xl"
        mb="xl"
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.Slider, { defaultValue: 60, disabled: true }), /* @__PURE__ */ React__default.createElement(
    core.RangeSlider,
    {
      mt: "xl",
      mb: "xl",
      disabled: true,
      defaultValue: [25, 75],
      marks: [
        { value: 0, label: "xs" },
        { value: 25, label: "sm" },
        { value: 50, label: "md" },
        { value: 75, label: "lg" },
        { value: 100, label: "xl" }
      ]
    }
  ));
}
const disabled = {
  type: "code",
  component: Demo,
  code
};

exports.disabled = disabled;
//# sourceMappingURL=Slider.demo.disabled.js.map
