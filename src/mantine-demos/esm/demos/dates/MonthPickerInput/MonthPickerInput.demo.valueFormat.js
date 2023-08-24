import React from 'react';
import { MonthPickerInput } from '@mantine/dates';

const code = `
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    MonthPickerInput,
    {
      valueFormat: "YYYY MMM",
      type: "multiple",
      label: "Pick month",
      placeholder: "Pick month"
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
//# sourceMappingURL=MonthPickerInput.demo.valueFormat.js.map
