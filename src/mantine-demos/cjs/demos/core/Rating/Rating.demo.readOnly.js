'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Rating, { value: 3.5, fractions: 2, readOnly: true });
}
const readOnly = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

exports.readOnly = readOnly;
//# sourceMappingURL=Rating.demo.readOnly.js.map
