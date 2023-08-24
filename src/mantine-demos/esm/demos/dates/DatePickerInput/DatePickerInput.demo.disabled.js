import React from 'react';
import { DatePickerInput } from '@mantine/dates';

const code = `
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Disabled"
      placeholder="Pick date"
      disabled
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    DatePickerInput,
    {
      valueFormat: "YYYY MMM DD",
      type: "multiple",
      label: "Disabled",
      placeholder: "Pick date",
      disabled: true
    }
  );
}
const disabled = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=DatePickerInput.demo.disabled.js.map
