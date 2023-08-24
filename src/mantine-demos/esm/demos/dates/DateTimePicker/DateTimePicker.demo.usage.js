import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateTimePicker, { label: "Pick date and time", placeholder: "Pick date and time" });
}
const usage = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=DateTimePicker.demo.usage.js.map
