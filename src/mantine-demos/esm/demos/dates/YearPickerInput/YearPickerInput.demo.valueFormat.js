import React from 'react';
import { YearPickerInput } from '@mantine/dates';

const code = `
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput valueFormat="YY" type="multiple" label="Pick year" placeholder="Pick year" />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(YearPickerInput, { valueFormat: "YY", type: "multiple", label: "Pick year", placeholder: "Pick year" });
}
const valueFormat = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { valueFormat };
//# sourceMappingURL=YearPickerInput.demo.valueFormat.js.map
