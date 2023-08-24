import { Group, Radio } from '@mantine/core';
import React from 'react';

const code = `
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Radio, { checked: true, disabled: true, label: "React", value: "react" }), /* @__PURE__ */ React.createElement(Radio, { disabled: true, label: "Angular", value: "nu" }), /* @__PURE__ */ React.createElement(Radio, { disabled: true, label: "Svelte", value: "sv" }));
}
const disabled = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=Radio.demo.disabled.js.map
