import React from 'react';
import { Group, Box, Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

const code = `
import { Text, Code, Group, Box } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group justify="center">
        <Box ref={ref} w={300} h={180} bg="var(--mantine-color-blue-light)" />
      </Group>
      <Text ta="center">
        Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
      </Text>
    </>
  );
}
`;
function Demo() {
  const { ref, x, y } = useMouse();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Box, { ref, w: 300, h: 180, bg: "var(--mantine-color-blue-light)" })), /* @__PURE__ */ React.createElement(Text, { ta: "center", mt: "sm" }, "Mouse coordinates ", /* @__PURE__ */ React.createElement(Code, null, `{ x: ${x}, y: ${y} }`)));
}
const useMouseRef = {
  type: "code",
  code,
  component: Demo
};

export { useMouseRef };
//# sourceMappingURL=use-mouse.demo.ref.js.map
