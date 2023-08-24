'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;
function Demo() {
  const { height, width } = hooks.useViewportSize();
  return /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center" }, "Width: ", width, ", height: ", height);
}
const useViewportSizeDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useViewportSizeDemo = useViewportSizeDemo;
//# sourceMappingURL=use-viewport-size.demo.js.map
