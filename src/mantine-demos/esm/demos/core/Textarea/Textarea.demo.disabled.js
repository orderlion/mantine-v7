import { Box, Textarea } from '@mantine/core';
import React from 'react';

const code = `
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea disabled/>;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, { maw: 320, mx: "auto" }, /* @__PURE__ */ React.createElement(Textarea, { label: "Disabled", placeholder: "Your comment", disabled: true }));
}
const disabled = {
  type: "code",
  code,
  component: Demo
};

export { disabled };
//# sourceMappingURL=Textarea.demo.disabled.js.map
