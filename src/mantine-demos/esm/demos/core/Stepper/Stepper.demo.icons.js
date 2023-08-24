import React, { useState } from 'react';
import { IconCircleCheck, IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';
import { Stepper, rem } from '@mantine/core';

const code = `
import { useState } from 'react';
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
  IconCircleCheck,
} from '@tabler/icons-react';
import { Stepper, rem } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={<IconCircleCheck style={{ width: rem(18), height: rem(18) }} />}
    >
      <Stepper.Step
        icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />}
        label="Step 2"
        description="Verify email"
      />
      <Stepper.Step
        icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />}
        label="Step 3"
        description="Get full access"
      />
    </Stepper>
  );
}
`;
function Demo() {
  const [active, setActive] = useState(1);
  return /* @__PURE__ */ React.createElement(
    Stepper,
    {
      active,
      onStepClick: setActive,
      completedIcon: /* @__PURE__ */ React.createElement(IconCircleCheck, { style: { width: rem(18), height: rem(18) } })
    },
    /* @__PURE__ */ React.createElement(
      Stepper.Step,
      {
        icon: /* @__PURE__ */ React.createElement(IconUserCheck, { style: { width: rem(18), height: rem(18) } }),
        label: "Step 1",
        description: "Create an account"
      }
    ),
    /* @__PURE__ */ React.createElement(
      Stepper.Step,
      {
        icon: /* @__PURE__ */ React.createElement(IconMailOpened, { style: { width: rem(18), height: rem(18) } }),
        label: "Step 2",
        description: "Verify email"
      }
    ),
    /* @__PURE__ */ React.createElement(
      Stepper.Step,
      {
        icon: /* @__PURE__ */ React.createElement(IconShieldCheck, { style: { width: rem(18), height: rem(18) } }),
        label: "Step 3",
        description: "Get full access"
      }
    )
  );
}
const icons = {
  type: "code",
  component: Demo,
  code
};

export { icons };
//# sourceMappingURL=Stepper.demo.icons.js.map
