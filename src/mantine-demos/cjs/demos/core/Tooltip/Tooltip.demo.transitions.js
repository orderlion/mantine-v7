'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  const transitions2 = core.keys(core.MANTINE_TRANSITIONS).map((transition) => /* @__PURE__ */ React__default.createElement(core.Tooltip, { key: transition, label: transition, transitionProps: { transition, duration: 300 } }, /* @__PURE__ */ React__default.createElement(core.Badge, { variant: "light" }, transition)));
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center", style: { cursor: "default" } }, transitions2);
}
const transitions = {
  type: "code",
  component: Demo
};

exports.Demo = Demo;
exports.transitions = transitions;
//# sourceMappingURL=Tooltip.demo.transitions.js.map
