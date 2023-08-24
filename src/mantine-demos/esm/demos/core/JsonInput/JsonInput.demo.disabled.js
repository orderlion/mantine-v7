import { JsonInput } from '@mantine/core';
import React from 'react';

const code = `
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput disabled defaultValue='{ "a": 1, "B": 2 }' label="Disabled" placeholder="Disabled" />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(JsonInput, { disabled: true, defaultValue: '{ "a": 1, "B": 2 }', label: "Disabled", placeholder: "Disabled" });
}
const disabled = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340
};

export { disabled };
//# sourceMappingURL=JsonInput.demo.disabled.js.map
