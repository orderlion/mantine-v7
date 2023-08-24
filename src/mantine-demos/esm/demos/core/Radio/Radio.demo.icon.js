import React from 'react';
import { Radio, CheckIcon } from '@mantine/core';

const code = `
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Radio, { icon: CheckIcon, label: "Custom check icon", name: "check", value: "check", defaultChecked: true });
}
const icon = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { icon };
//# sourceMappingURL=Radio.demo.icon.js.map
