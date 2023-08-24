import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    DateTimePicker,
    {
      valueFormat: "DD MMM YYYY hh:mm A",
      label: "Pick date and time",
      placeholder: "Pick date and time"
    }
  );
}
const format = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { format };
//# sourceMappingURL=DateTimePicker.demo.format.js.map
