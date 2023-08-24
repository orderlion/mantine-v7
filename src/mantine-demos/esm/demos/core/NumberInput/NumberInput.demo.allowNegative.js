import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Negative number are not allowed"
      placeholder="Do not enter negative numbers"
      allowNegative={false}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "Negative number are not allowed",
      placeholder: "Do not enter negative numbers",
      allowNegative: false
    }
  );
}
const allowNegative = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { allowNegative };
//# sourceMappingURL=NumberInput.demo.allowNegative.js.map
