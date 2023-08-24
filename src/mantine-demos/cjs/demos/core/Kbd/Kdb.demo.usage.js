'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Kbd } from '@mantine/core';

function Demo() {
  return (
    <>
      <Kbd>\u2318</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Kbd, null, "\u2318"), " + ", /* @__PURE__ */ React__default.createElement(core.Kbd, null, "Shift"), " + ", /* @__PURE__ */ React__default.createElement(core.Kbd, null, "M"));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=Kdb.demo.usage.js.map
