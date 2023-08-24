import React from 'react';
import { DatePickerInput } from '@mantine/dates';

const code = `
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
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
      label: "Pick date",
      placeholder: "Pick date"
    }
  );
}
const valueFormat = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { valueFormat };
//# sourceMappingURL=DatePickerInput.demo.valueFormat.js.map
