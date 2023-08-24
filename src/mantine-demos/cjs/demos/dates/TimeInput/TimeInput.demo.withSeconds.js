'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.TimeInput, { withSeconds: true });
}
const withSeconds = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code
};

exports.withSeconds = withSeconds;
//# sourceMappingURL=TimeInput.demo.withSeconds.js.map
