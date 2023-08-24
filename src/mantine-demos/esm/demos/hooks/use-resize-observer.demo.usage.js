import React from 'react';
import { useMantineTheme, Text, Group, rem, Code } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

const code = `
import { Text, Code, rem } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <Text ta="center">Rect: <Code>{JSON.stringify(rect)}</Code></Text>
    </>
  );
}`;
function Demo() {
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { ta: "center", size: "sm", mb: "xs" }, "Resize textarea by dragging its right bottom corner"), /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(
    "textarea",
    {
      ref,
      style: {
        width: rem(400),
        height: rem(120),
        border: "none",
        backgroundColor: "var(--mantine-color-blue-light)",
        position: "relative"
      }
    }
  )), /* @__PURE__ */ React.createElement(Text, { ta: "center", style: { marginTop: theme.spacing.sm } }, "Rect: ", /* @__PURE__ */ React.createElement(Code, null, JSON.stringify(rect, null, 2))));
}
const useResizeObserverDemo = {
  type: "code",
  code,
  component: Demo
};

export { useResizeObserverDemo };
//# sourceMappingURL=use-resize-observer.demo.usage.js.map
