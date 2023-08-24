import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      clearable
      defaultValue={new Date()}
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
      clearable: true,
      defaultValue: /* @__PURE__ */ new Date(),
      label: "Pick date and time",
      placeholder: "Pick date and time"
    }
  );
}
const clearable = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { clearable };
//# sourceMappingURL=DateTimePicker.demo.clearable.js.map
