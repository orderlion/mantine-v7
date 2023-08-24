import React, { useState } from 'react';
import { Stepper, Group, Button } from '@mantine/core';
import { Content } from './_content.js';

const code = `
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => current < 3 ? current + 1 : current);
  const prevStep = () => setActive((current) => current > 0 ? current - 1 : current);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Stepper, { active, onStepClick: setActive, allowNextStepsSelect: false }, /* @__PURE__ */ React.createElement(Stepper.Step, { label: "First step", description: "Create an account" }, /* @__PURE__ */ React.createElement(Content, null, "Step 1 content: Create an account")), /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Second step", description: "Verify email" }, /* @__PURE__ */ React.createElement(Content, null, "Step 2 content: Verify email")), /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Final step", description: "Get full access" }, /* @__PURE__ */ React.createElement(Content, null, "Step 3 content: Get full access")), /* @__PURE__ */ React.createElement(Stepper.Completed, null, /* @__PURE__ */ React.createElement(Content, null, "Completed, click back button to get to previous step"))), /* @__PURE__ */ React.createElement(Group, { justify: "center", mt: "xl" }, /* @__PURE__ */ React.createElement(Button, { variant: "default", onClick: prevStep }, "Back"), /* @__PURE__ */ React.createElement(Button, { onClick: nextStep }, "Next step")));
}
const allowNextStepsSelect = {
  type: "code",
  component: Demo,
  code
};

export { allowNextStepsSelect };
//# sourceMappingURL=Stepper.demo.allowNextStepsSelect.js.map
