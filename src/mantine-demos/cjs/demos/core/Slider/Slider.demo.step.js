'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`;
const marks = [
  { value: 0, label: "xs" },
  { value: 25, label: "sm" },
  { value: 50, label: "md" },
  { value: 75, label: "lg" },
  { value: 100, label: "xl" }
];
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, null, "Decimal step"), /* @__PURE__ */ React__default.createElement(
    core.Slider,
    {
      defaultValue: 0,
      min: -10,
      max: 10,
      label: (value) => value.toFixed(1),
      step: 0.1,
      styles: { markLabel: { display: "none" } }
    }
  ), /* @__PURE__ */ React__default.createElement(core.Text, { mt: "md" }, "Step matched with marks"), /* @__PURE__ */ React__default.createElement(
    core.Slider,
    {
      defaultValue: 50,
      label: (val) => marks.find((mark) => mark.value === val).label,
      step: 25,
      marks,
      styles: { markLabel: { display: "none" } }
    }
  ));
}
const step = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400
};

exports.step = step;
//# sourceMappingURL=Slider.demo.step.js.map
