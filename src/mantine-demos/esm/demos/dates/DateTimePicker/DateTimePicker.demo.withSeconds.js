import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateTimePicker, { withSeconds: true, label: "Pick date and time", placeholder: "Pick date and time" });
}
const withSeconds = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { withSeconds };
//# sourceMappingURL=DateTimePicker.demo.withSeconds.js.map
