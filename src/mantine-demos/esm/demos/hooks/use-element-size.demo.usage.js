import React from 'react';
import { useMantineTheme, Text, Group, rem } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

const code = `
import { useElementSize } from '@mantine/hooks';
import { rem } from '@mantine/core';

function Demo() {
  const { ref, width, height } = useElementSize();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <div>Width: {width}, height: {height}</div>
    </>
  );
}`;
function Demo() {
  const theme = useMantineTheme();
  const { ref, width, height } = useElementSize();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { ta: "center", size: "sm", style: { marginBottom: theme.spacing.xs } }, "Resize textarea by dragging its right bottom corner"), /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(
    "textarea",
    {
      ref,
      style: {
        width: rem(400),
        height: rem(120),
        border: "none",
        backgroundColor: "var(--mantine-color-body)",
        position: "relative"
      }
    }
  )), /* @__PURE__ */ React.createElement(Text, { ta: "center", mt: "sm" }, "Width: ", width, ", height: ", height));
}
const useElementSizeDemo = {
  type: "code",
  code,
  component: Demo,
  dimmed: true
};

export { useElementSizeDemo };
//# sourceMappingURL=use-element-size.demo.usage.js.map
