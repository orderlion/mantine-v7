'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Highlight, { highlight: ["this", "that"] }, "Highlight this and also that");
}
const multiple = {
  type: "code",
  code,
  component: Demo
};

exports.multiple = multiple;
//# sourceMappingURL=Highlight.demo.multiple.js.map
