import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Custom decimal separator"
      placeholder="You can change it"
      decimalSeparator=","
      defaultValue={20.573}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "Custom decimal separator",
      placeholder: "You can change it",
      decimalSeparator: ",",
      defaultValue: 20.573
    }
  );
}
const decimalSeparator = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { decimalSeparator };
//# sourceMappingURL=NumberInput.demo.decimalSeparator.js.map
