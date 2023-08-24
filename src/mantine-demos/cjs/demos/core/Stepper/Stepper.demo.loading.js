'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" loading />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Stepper, { active: 1 }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 1", description: "Create an account" }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 2", description: "Verify email", loading: true }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 3", description: "Get full access" }));
}
const loading = {
  type: "code",
  component: Demo,
  code
};

exports.loading = loading;
//# sourceMappingURL=Stepper.demo.loading.js.map
