import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateTimePicker, { label: "Disabled", placeholder: "Pick date and time", disabled: true });
}
const disabled = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=DateTimePicker.demo.disabled.js.map
