import React from 'react';
import { DateTimePicker } from '@mantine/dates';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      dropdownType="modal"
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
      dropdownType: "modal",
      label: "Pick date and time",
      placeholder: "Pick date and time"
    }
  );
}
const modal = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { modal };
//# sourceMappingURL=DateTimePicker.demo.modal.js.map
