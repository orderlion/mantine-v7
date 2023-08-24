'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Chip.Group, { multiple: true, value: ["checked", "checked-disabled"] }, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Chip, { value: "default", variant: "outline" }, "Outline default"), /* @__PURE__ */ React__default.createElement(core.Chip, { value: "checked", variant: "outline" }, "Outline checked"), /* @__PURE__ */ React__default.createElement(core.Chip, { value: "checked-disabled", disabled: true, variant: "outline" }, "Outline checked disabled"))), /* @__PURE__ */ React__default.createElement(core.Chip.Group, { multiple: true, value: ["checked", "checked-disabled"] }, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center", mt: "md" }, /* @__PURE__ */ React__default.createElement(core.Chip, { value: "default", variant: "light" }, "Light default"), /* @__PURE__ */ React__default.createElement(core.Chip, { value: "checked", variant: "light" }, "Light checked"), /* @__PURE__ */ React__default.createElement(core.Chip, { value: "checked-disabled", disabled: true, variant: "light" }, "Light checked disabled"))), /* @__PURE__ */ React__default.createElement(core.Chip.Group, { multiple: true, value: ["checked", "checked-disabled"] }, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center", mt: "md" }, /* @__PURE__ */ React__default.createElement(core.Chip, { value: "default", variant: "filled" }, "Filled default"), /* @__PURE__ */ React__default.createElement(core.Chip, { value: "checked", variant: "filled" }, "Filled checked"), /* @__PURE__ */ React__default.createElement(core.Chip, { value: "checked-disabled", disabled: true, variant: "filled" }, "Filled checked disabled"))));
}
const states = {
  type: "code",
  component: Demo
};

exports.states = states;
//# sourceMappingURL=Chip.demo.states.js.map
