import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Enter value between 10 and 20"
      placeholder="Don't enter more than 20 and less than 10"
      min={10}
      max={20}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "Enter value between 10 and 20",
      placeholder: "Don't enter more than 20 and less than 10",
      min: 10,
      max: 20
    }
  );
}
const minMax = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { minMax };
//# sourceMappingURL=NumberInput.demo.minMax.js.map
