'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(_base.BaseDemo, { unstyled: true });
}
const unstyled = {
  type: "code",
  component: Demo,
  code
};

exports.unstyled = unstyled;
//# sourceMappingURL=Accordion.demo.unstyled.js.map
