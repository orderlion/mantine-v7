import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput valueFormat="YYYY MMM DD" label="Date input" placeholder="Date input" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateInput, { valueFormat: "YYYY MMM DD", label: "Date input", placeholder: "Date input" });
}
const format = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { format };
//# sourceMappingURL=DateInput.demo.format.js.map
