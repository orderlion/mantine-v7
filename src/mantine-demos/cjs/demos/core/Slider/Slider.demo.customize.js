'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Slider_demo_customize_module = require('./Slider.demo.customize.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
      size={2}
      classNames={classes}
    />
  );
}
`;
const cssCode = `
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: rem(6px);
  height: rem(6px);
  border-radius: rem(6px);
  transform: translateX(rem(-3px)) translateY(rem(-2px));
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: rem(5px);
  margin-top: 0;
}

.thumb {
  height: rem(16px);
  width: rem(16px);
  background-color: var(--mantine-color-white);
  border-width: rem(1px);
  box-shadow: var(--mantine-shadow-sm);
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, pt: 15, pb: 20, mx: "auto" }, /* @__PURE__ */ React__default.createElement(
    core.Slider,
    {
      defaultValue: 40,
      marks: [
        { value: 20, label: "20%" },
        { value: 50, label: "50%" },
        { value: 80, label: "80%" }
      ],
      size: 2,
      classNames: Slider_demo_customize_module['default']
    }
  ));
}
const customize = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

exports.customize = customize;
//# sourceMappingURL=Slider.demo.customize.js.map
