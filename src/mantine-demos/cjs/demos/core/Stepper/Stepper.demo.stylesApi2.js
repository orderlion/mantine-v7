'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const code = `
import { useState } from 'react';
import { Stepper, StepperProps, rem } from '@mantine/core';

function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      styles={{
        stepBody: {
          display: 'none',
        },

        step: {
          padding: 0,
        },

        stepIcon: {
          borderWidth: rem(4),
        },

        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(10),
        },
      }}
      {...props}
    />
  );
}

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <StyledStepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </StyledStepper>
  );
}
`;
function StyledStepper(props) {
  return /* @__PURE__ */ React__default.createElement(
    core.Stepper,
    __spreadValues({
      styles: {
        stepBody: {
          display: "none"
        },
        step: {
          padding: 0
        },
        stepIcon: {
          borderWidth: core.rem(3)
        },
        separator: {
          marginLeft: core.rem(-2),
          marginRight: core.rem(-2),
          height: core.rem(6)
        }
      }
    }, props)
  );
}
function Demo() {
  const [active, setActive] = React.useState(1);
  return /* @__PURE__ */ React__default.createElement(StyledStepper, { active, onStepClick: setActive }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 1", description: "Create an account" }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 2", description: "Verify email" }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 3", description: "Get full access" }));
}
const stylesApi2 = {
  type: "code",
  component: Demo,
  code
};

exports.stylesApi2 = stylesApi2;
//# sourceMappingURL=Stepper.demo.stylesApi2.js.map
