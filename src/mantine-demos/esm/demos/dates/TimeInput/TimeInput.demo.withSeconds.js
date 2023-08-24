import React from 'react';
import { TimeInput } from '@mantine/dates';

const code = `
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(TimeInput, { withSeconds: true });
}
const withSeconds = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code
};

export { withSeconds };
//# sourceMappingURL=TimeInput.demo.withSeconds.js.map
