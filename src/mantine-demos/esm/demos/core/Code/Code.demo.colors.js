import React from 'react';
import { Group, Code } from '@mantine/core';

const code = `
import { Code, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Code color="blue.9" c="white">
        React.createElement()
      </Code>
      <Code color="var(--mantine-color-blue-light)">React.createElement()</Code>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Code, { color: "blue.9", c: "white" }, "React.createElement()"), /* @__PURE__ */ React.createElement(Code, { color: "var(--mantine-color-blue-light)" }, "React.createElement()"));
}
const colors = {
  type: "code",
  code,
  component: Demo
};

export { colors };
//# sourceMappingURL=Code.demo.colors.js.map
