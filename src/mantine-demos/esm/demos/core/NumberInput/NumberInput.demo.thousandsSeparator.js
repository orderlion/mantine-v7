import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="With thousands separator"
      placeholder="Thousands are separated with coma"
      thousandSeparator=","
      defaultValue={1_000_000}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "With thousands separator",
      placeholder: "Thousands are separated with coma",
      thousandSeparator: ",",
      defaultValue: 1e6
    }
  );
}
const thousandsSeparator = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { thousandsSeparator };
//# sourceMappingURL=NumberInput.demo.thousandsSeparator.js.map
