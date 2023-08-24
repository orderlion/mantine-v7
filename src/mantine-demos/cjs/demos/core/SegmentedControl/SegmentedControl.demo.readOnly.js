'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.SegmentedControl, { readOnly: true, defaultValue: "Angular", data: ["React", "Angular", "Vue"] });
}
const readOnly = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.readOnly = readOnly;
//# sourceMappingURL=SegmentedControl.demo.readOnly.js.map
