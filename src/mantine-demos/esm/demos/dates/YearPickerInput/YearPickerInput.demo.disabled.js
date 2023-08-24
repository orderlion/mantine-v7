import React from 'react';
import { YearPickerInput } from '@mantine/dates';

const code = `
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Disabled"
      placeholder="Pick year"
      disabled
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    YearPickerInput,
    {
      valueFormat: "YY",
      type: "multiple",
      label: "Disabled",
      placeholder: "Pick year",
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
//# sourceMappingURL=YearPickerInput.demo.disabled.js.map
