import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Decimals are not allowed"
      placeholder="Do not enter decimal numbers"
      allowDecimal={false}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "Decimals are not allowed",
      placeholder: "Do not enter decimal numbers",
      allowDecimal: false
    }
  );
}
const allowDecimal = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { allowDecimal };
//# sourceMappingURL=NumberInput.demo.allowDecimal.js.map
