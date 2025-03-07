import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "You can enter only 2 digits after decimal point",
      placeholder: "Do not enter more that 2",
      decimalScale: 2
    }
  );
}
const decimalScale = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { decimalScale };
//# sourceMappingURL=NumberInput.demo.decimalScale.js.map
