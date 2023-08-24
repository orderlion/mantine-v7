import React from 'react';
import { NumberInput } from '@mantine/core';
import { IconChartBubble } from '@tabler/icons-react';

const code = `
import { NumberInput } from '@mantine/core';
import { IconChartBubble } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NumberInput, { label: "Hide controls", placeholder: "Hide controls", hideControls: true }), /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "Custom right section",
      placeholder: "Custom right section",
      mt: "md",
      rightSection: /* @__PURE__ */ React.createElement(IconChartBubble, null),
      rightSectionPointerEvents: "none"
    }
  ));
}
const rightSection = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { rightSection };
//# sourceMappingURL=NumberInput.demo.rightSection.js.map
