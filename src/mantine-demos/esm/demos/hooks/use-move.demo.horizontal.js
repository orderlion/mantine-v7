import React, { useState } from 'react';
import { Group, rem, Text } from '@mantine/core';
import { useMove } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { Group, Text, rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: rem(400),
            height: rem(16),
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: \`\${value * 100}%\`,
              height: rem(16),
              backgroundColor: 'var(--mantine-color-blue-filled)',
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value * 100}% - \${rem(8)})\`,
              top: 0,
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
}
`;
function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      style: {
        width: rem(400),
        height: rem(16),
        backgroundColor: "var(--mantine-color-blue-light)",
        position: "relative"
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          width: `${value * 100}%`,
          height: rem(16),
          backgroundColor: "var(--mantine-color-blue-filled)"
        }
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          left: `calc(${value * 100}% - ${rem(8)})`,
          top: 0,
          width: rem(16),
          height: rem(16),
          backgroundColor: "var(--mantine-color-blue-7)"
        }
      }
    )
  )), /* @__PURE__ */ React.createElement(Text, { ta: "center", mt: "sm" }, "Value: ", Math.round(value * 100)));
}
const useMoveHorizontal = {
  type: "code",
  code,
  component: Demo
};

export { useMoveHorizontal };
//# sourceMappingURL=use-move.demo.horizontal.js.map
