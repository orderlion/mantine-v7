import React from 'react';
import { Stepper } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Stepper, { active: 1 }, /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Step 1", description: "Create an account" }), /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Step 2", description: "Verify email", loading: true }), /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Step 3", description: "Get full access" }));
}
const loading = {
  type: "code",
  component: Demo,
  code
};

export { loading };
//# sourceMappingURL=Stepper.demo.loading.js.map
