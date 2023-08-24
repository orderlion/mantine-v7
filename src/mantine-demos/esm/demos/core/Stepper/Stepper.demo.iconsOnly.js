import React, { useState } from 'react';
import { IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';
import { Stepper, rem } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Stepper, rem } from '@mantine/core';
import { IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />} />
    </Stepper>
  );
}
`;
function Demo() {
  const [active, setActive] = useState(0);
  return /* @__PURE__ */ React.createElement(Stepper, { active, onStepClick: setActive }, /* @__PURE__ */ React.createElement(Stepper.Step, { icon: /* @__PURE__ */ React.createElement(IconUserCheck, { style: { width: rem(18), height: rem(18) } }) }), /* @__PURE__ */ React.createElement(Stepper.Step, { icon: /* @__PURE__ */ React.createElement(IconMailOpened, { style: { width: rem(18), height: rem(18) } }) }), /* @__PURE__ */ React.createElement(Stepper.Step, { icon: /* @__PURE__ */ React.createElement(IconShieldCheck, { style: { width: rem(18), height: rem(18) } }) }));
}
const iconsOnly = {
  type: "code",
  component: Demo,
  code
};

export { iconsOnly };
//# sourceMappingURL=Stepper.demo.iconsOnly.js.map
