import React from 'react';
import { IconCircleX } from '@tabler/icons-react';
import { Stepper, rem } from '@mantine/core';

const code = `
import { Stepper, rem } from '@mantine/core';
import { IconCircleX } from '@tabler/icons-react';

function Demo() {
  return (
    <Stepper active={2}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<IconCircleX style={{ width: rem(20), height: rem(20) }} />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Stepper, { active: 2 }, /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Step 1", description: "Create an account" }), /* @__PURE__ */ React.createElement(
    Stepper.Step,
    {
      label: "Step 2",
      description: "Verify email",
      color: "red",
      completedIcon: /* @__PURE__ */ React.createElement(IconCircleX, { style: { width: rem(20), height: rem(20) } })
    }
  ), /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Step 3", description: "Get full access" }));
}
const stepColor = {
  type: "code",
  component: Demo,
  code
};

export { stepColor };
//# sourceMappingURL=Stepper.demo.stepColor.js.map
