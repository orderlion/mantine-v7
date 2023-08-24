import React from 'react';
import { Highlight } from '@mantine/core';

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Highlight, { highlight: ["this", "that"] }, "Highlight this and also that");
}
const multiple = {
  type: "code",
  code,
  component: Demo
};

export { multiple };
//# sourceMappingURL=Highlight.demo.multiple.js.map
