'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Button_demo_disabledStyles_module = require('./Button.demo.disabledStyles.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
`;
const cssCode = `
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Button, { className: Button_demo_disabledStyles_module['default'].button, disabled: true }, "Disabled with styles");
}
const disabledStyles = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

exports.disabledStyles = disabledStyles;
//# sourceMappingURL=Button.demo.disabledStyles.js.map
