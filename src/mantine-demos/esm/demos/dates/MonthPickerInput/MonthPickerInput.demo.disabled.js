import React from 'react';
import { MonthPickerInput } from '@mantine/dates';

const code = `
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Disabled"
      placeholder="Pick month"
      disabled
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
      label: "Disabled",
      placeholder: "Pick month",
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
//# sourceMappingURL=MonthPickerInput.demo.disabled.js.map
