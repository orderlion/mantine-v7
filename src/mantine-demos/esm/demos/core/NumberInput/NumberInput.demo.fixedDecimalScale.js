import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "Always show 2 digits after decimal point",
      placeholder: "Do not enter more that 2",
      decimalScale: 2,
      fixedDecimalScale: true,
      defaultValue: 2.2
    }
  );
}
const fixedDecimalScale = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { fixedDecimalScale };
//# sourceMappingURL=NumberInput.demo.fixedDecimalScale.js.map
