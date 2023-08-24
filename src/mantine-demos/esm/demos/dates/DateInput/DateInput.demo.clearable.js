import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput clearable defaultValue={new Date()} label="Date input" placeholder="Date input" />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateInput, { clearable: true, defaultValue: /* @__PURE__ */ new Date(), label: "Date input", placeholder: "Date input" });
}
const clearable = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { clearable };
//# sourceMappingURL=DateInput.demo.clearable.js.map
