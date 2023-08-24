'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.RingProgress, { sections: [{ value: 40, color: "yellow" }], rootColor: "red" });
}
const rootColor = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.rootColor = rootColor;
//# sourceMappingURL=RingProgress.demo.rootColor.js.map
