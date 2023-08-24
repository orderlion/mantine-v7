import React, { useState } from 'react';
import { Group, rem, Text, Code } from '@mantine/core';
import { useMove } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { Group, Text, Code, rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: rem(400),
            height: rem(120),
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value.x * 100}% - \${rem(8)})\`,
              top: \`calc(\${value.y * 100}% - \${rem(8)})\`,
              width: rem(16),
              height: rem(16),
              backgroundColor: active ? 'var(--mantine-color-teal-7)' : 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>
      <Text ta="center" mt="sm">
        Values <Code>{\`{ x: \${Math.round(value.x * 100)}, y: \${Math.round(value.y * 100)} }\`}</Code>
      </Text>
    </>
  );
}`;
function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      style: {
        width: rem(400),
        height: rem(120),
        backgroundColor: "var(--mantine-color-blue-light)",
        position: "relative"
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          left: `calc(${value.x * 100}% - ${rem(8)})`,
          top: `calc(${value.y * 100}% - ${rem(8)})`,
          width: rem(16),
          height: rem(16),
          backgroundColor: active ? "var(--mantine-color-teal-7)" : "var(--mantine-color-blue-7)"
        }
      }
    )
  )), /* @__PURE__ */ React.createElement(Text, { ta: "center", mt: "sm" }, "Values ", /* @__PURE__ */ React.createElement(Code, null, `{ x: ${Math.round(value.x * 100)}, y: ${Math.round(value.y * 100)} }`)));
}
const useMoveUsage = {
  type: "code",
  code,
  component: Demo
};

export { useMoveUsage };
//# sourceMappingURL=use-move.demo.usage.js.map
