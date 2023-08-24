import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput allowDeselect label="Date input" placeholder="Date input" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateInput, { allowDeselect: true, label: "Date input", placeholder: "Date input" });
}
const deselect = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { deselect };
//# sourceMappingURL=DateInput.demo.deselect.js.map
