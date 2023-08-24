import React from 'react';
import { PillsInput, Pill } from '@mantine/core';

const code = `
import { PillsInput, Pill } from '@mantine/core';

function Demo() {
  return (
    <PillsInput label="PillsInput">
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(PillsInput, { label: "PillsInput" }, /* @__PURE__ */ React.createElement(Pill.Group, null, /* @__PURE__ */ React.createElement(Pill, null, "React"), /* @__PURE__ */ React.createElement(Pill, null, "Vue"), /* @__PURE__ */ React.createElement(Pill, null, "Svelte"), /* @__PURE__ */ React.createElement(PillsInput.Field, { placeholder: "Enter tags" })));
}
const usage = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 440,
  centered: true
};

export { usage };
//# sourceMappingURL=PillsInput.demo.usage.js.map
