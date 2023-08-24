import React from 'react';
import { Code } from '@mantine/core';

const code = `
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Code, null, "React.createElement()");
}
const usage = {
  type: "code",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Code.demo.usage.js.map
