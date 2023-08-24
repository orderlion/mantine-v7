import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateInput, { label: "Disabled", placeholder: "Date input", disabled: true });
}
const disabled = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=DateInput.demo.disabled.js.map
