import React from 'react';
import { NativeSelect } from '@mantine/core';

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(NativeSelect, { disabled: true, data: ["React", "Angular"], label: "Disabled NativeSelect" });
}
const disabled = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { disabled };
//# sourceMappingURL=NativeSelect.demo.disabled.js.map
