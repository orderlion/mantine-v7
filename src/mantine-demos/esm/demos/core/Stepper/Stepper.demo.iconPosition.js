import React, { useState } from 'react';
import { Stepper } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} iconPosition="right">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;
function Demo() {
  const [active, setActive] = useState(1);
  return /* @__PURE__ */ React.createElement(Stepper, { active, onStepClick: setActive, iconPosition: "right" }, /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Step 1", description: "Create an account" }), /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Step 2", description: "Verify email" }), /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Step 3", description: "Get full access" }));
}
const iconPosition = {
  type: "code",
  component: Demo,
  code
};

export { iconPosition };
//# sourceMappingURL=Stepper.demo.iconPosition.js.map
