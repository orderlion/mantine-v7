import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "With prefix",
      placeholder: "Dollars",
      prefix: "$",
      defaultValue: 100,
      mb: "md"
    }
  ), /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "With suffix",
      placeholder: "Percents",
      suffix: "%",
      defaultValue: 100,
      mt: "md"
    }
  ));
}
const prefixSuffix = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { prefixSuffix };
//# sourceMappingURL=NumberInput.demo.prefixSuffix.js.map
