import React, { useState } from 'react';
import { Group, rem, Text } from '@mantine/core';
import { useMove } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { Group, Text, rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: rem(16),
            height: rem(120),
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              height: \`\${value * 100}%\`,
              width: rem(16),
              backgroundColor: 'var(--mantine-color-blue-filled)',
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              bottom: \`calc(\${value * 100}% - \${rem(8)})\`,
              left: 0,
              width: rem(16),
              height: rem(16),
              backgroundColor: 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>

      <Text ta="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}`;
function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ y }) => setValue(1 - y));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      style: {
        width: rem(16),
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
          bottom: 0,
          height: `${value * 100}%`,
          width: rem(16),
          backgroundColor: "var(--mantine-color-blue-filled)"
        }
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          bottom: `calc(${value * 100}% - ${rem(8)})`,
          left: 0,
          width: rem(16),
          height: rem(16),
          backgroundColor: "var(--mantine-color-blue-7)"
        }
      }
    )
  )), /* @__PURE__ */ React.createElement(Text, { ta: "center", mt: "sm" }, "Value: ", Math.round(value * 100)));
}
const useMoveVertical = {
  type: "code",
  code,
  component: Demo
};

export { useMoveVertical };
//# sourceMappingURL=use-move.demo.vertical.js.map
