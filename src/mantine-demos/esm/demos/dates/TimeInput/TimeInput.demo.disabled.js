import React from 'react';
import { TimeInput } from '@mantine/dates';

const code = `
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(TimeInput, { disabled: true });
}
const disabled = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=TimeInput.demo.disabled.js.map
