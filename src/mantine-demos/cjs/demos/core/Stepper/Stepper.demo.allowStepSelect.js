'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _content = require('./_content.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step
          label="First step"
          description="Create an account"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="Verify email"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          Step 3 content: Get full access
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Back
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [active, setActive] = React.useState(1);
  const [highestStepVisited, setHighestStepVisited] = React.useState(active);
  const handleStepChange = (nextStep) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;
    if (isOutOfBounds) {
      return;
    }
    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };
  const shouldAllowSelectStep = (step) => highestStepVisited >= step && active !== step;
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Stepper, { active, onStepClick: setActive }, /* @__PURE__ */ React__default.createElement(
    core.Stepper.Step,
    {
      label: "First step",
      description: "Create an account",
      allowStepSelect: shouldAllowSelectStep(0)
    },
    /* @__PURE__ */ React__default.createElement(_content.Content, null, "Step 1 content: Create an account")
  ), /* @__PURE__ */ React__default.createElement(
    core.Stepper.Step,
    {
      label: "Second step",
      description: "Verify email",
      allowStepSelect: shouldAllowSelectStep(1)
    },
    /* @__PURE__ */ React__default.createElement(_content.Content, null, "Step 2 content: Verify email")
  ), /* @__PURE__ */ React__default.createElement(
    core.Stepper.Step,
    {
      label: "Final step",
      description: "Get full access",
      allowStepSelect: shouldAllowSelectStep(2)
    },
    /* @__PURE__ */ React__default.createElement(_content.Content, null, "Step 3 content: Get full access")
  ), /* @__PURE__ */ React__default.createElement(core.Stepper.Completed, null, /* @__PURE__ */ React__default.createElement(_content.Content, null, "Completed, click back button to get to previous step"))), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center", mt: "xl" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default", onClick: () => handleStepChange(active - 1) }, "Back"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => handleStepChange(active + 1) }, "Next step")));
}
const allowStepSelect = {
  type: "code",
  component: Demo,
  code
};

exports.allowStepSelect = allowStepSelect;
//# sourceMappingURL=Stepper.demo.allowStepSelect.js.map
