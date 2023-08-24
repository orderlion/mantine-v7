import React from 'react';
import { Code } from '@mantine/core';

const code = `
import { Code } from '@mantine/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;
const codeForPreviousDemo = `import React from 'react';
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Code, { block: true }, codeForPreviousDemo);
}
const block = {
  type: "code",
  code,
  component: Demo
};

export { block };
//# sourceMappingURL=Code.demo.block.js.map
