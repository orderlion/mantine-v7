'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} orientation="vertical">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;
function Demo() {
  const [active, setActive] = React.useState(1);
  return /* @__PURE__ */ React__default.createElement(core.Stepper, { active, onStepClick: setActive, orientation: "vertical" }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 1", description: "Create an account" }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 2", description: "Verify email" }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 3", description: "Get full access" }));
}
const orientation = {
  type: "code",
  component: Demo,
  code
};

exports.orientation = orientation;
//# sourceMappingURL=Stepper.demo.orientation.js.map
