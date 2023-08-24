'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getCode = (prop) => `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion ${prop}>
      {/* ...content */}
    </Accordion>
  )
}
`;
const disableTransitions = {
  type: "code",
  component: () => /* @__PURE__ */ React__default.createElement(_base.BaseDemo, { transitionDuration: 0, maw: 380, mx: "auto" }),
  code: getCode("transitionDuration={0}")
};
const customTransitions = {
  type: "code",
  component: () => /* @__PURE__ */ React__default.createElement(_base.BaseDemo, { transitionDuration: 1e3, maw: 380, mx: "auto" }),
  code: getCode("transitionDuration={1000}")
};

exports.customTransitions = customTransitions;
exports.disableTransitions = disableTransitions;
//# sourceMappingURL=Accordion.demo.transitions.js.map
