import React from 'react';
import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

const code = `
import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;
function Demo() {
  const { x, y } = useMouse();
  return /* @__PURE__ */ React.createElement(Text, { ta: "center" }, "Mouse coordinates ", /* @__PURE__ */ React.createElement(Code, null, `{ x: ${x}, y: ${y} }`));
}
const useMouseUsage = {
  type: "code",
  code,
  component: Demo
};

export { useMouseUsage };
//# sourceMappingURL=use-mouse.demo.usage.js.map
