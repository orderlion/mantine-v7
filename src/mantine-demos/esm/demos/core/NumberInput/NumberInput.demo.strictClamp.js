import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You cannot enter number less than 0 or greater than 100"
      placeholder="You cannot enter number less than 0 or greater than 100"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "You cannot enter number less than 0 or greater than 100",
      placeholder: "You cannot enter number less than 0 or greater than 100",
      clampBehavior: "strict",
      min: 0,
      max: 100
    }
  );
}
const strictClamp = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { strictClamp };
//# sourceMappingURL=NumberInput.demo.strictClamp.js.map
