'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <button type="button" className="mantine-focus-auto">
        Focus auto
      </button>
      <button type="button" className="mantine-focus-always">
        Focus always
      </button>
      <button type="button" className="mantine-focus-never">
        Focus never
      </button>
      <button type="button" className="mantine-active">
        Active
      </button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement("button", { type: "button", className: "mantine-focus-auto" }, "Focus auto"), /* @__PURE__ */ React__default.createElement("button", { type: "button", className: "mantine-focus-always" }, "Focus always"), /* @__PURE__ */ React__default.createElement("button", { type: "button", className: "mantine-focus-never" }, "Focus never"), /* @__PURE__ */ React__default.createElement("button", { type: "button", className: "mantine-active" }, "Active"));
}
const globalClasses = {
  type: "code",
  component: Demo,
  code
};

exports.globalClasses = globalClasses;
//# sourceMappingURL=Styles.demo.globalClasses.js.map
