import React from 'react';
import { PinInput } from '@mantine/core';

const code = `
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(PinInput, { type: /^[0-3]+/, inputType: "tel", inputMode: "numeric" });
}
const regexp = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

export { regexp };
//# sourceMappingURL=PinInput.demo.regexp.js.map
