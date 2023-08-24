import React from 'react';
import { BaseDemo } from './_base.js';

const getCode = (prop) => `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion ${prop}>
      {/* ...content */}
    </Accordion>
  )
}
`;
const disableTransitions = {
  type: "code",
  component: () => /* @__PURE__ */ React.createElement(BaseDemo, { transitionDuration: 0, maw: 380, mx: "auto" }),
  code: getCode("transitionDuration={0}")
};
const customTransitions = {
  type: "code",
  component: () => /* @__PURE__ */ React.createElement(BaseDemo, { transitionDuration: 1e3, maw: 380, mx: "auto" }),
  code: getCode("transitionDuration={1000}")
};

export { customTransitions, disableTransitions };
//# sourceMappingURL=Accordion.demo.transitions.js.map
