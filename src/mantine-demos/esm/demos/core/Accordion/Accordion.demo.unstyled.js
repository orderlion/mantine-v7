import React from 'react';
import { BaseDemo } from './_base.js';

const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(BaseDemo, { unstyled: true });
}
const unstyled = {
  type: "code",
  component: Demo,
  code
};

export { unstyled };
//# sourceMappingURL=Accordion.demo.unstyled.js.map
