import React from 'react';
import { useHover } from '@mantine/hooks';
import { rem, Text } from '@mantine/core';

const code = `
import { useHover } from '@mantine/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`;
function Demo() {
  const { hovered, ref } = useHover();
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      style: {
        height: rem(60),
        backgroundColor: "var(--mantine-color-blue-light)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    },
    /* @__PURE__ */ React.createElement(Text, null, hovered ? "I am hovered" : "Put mouse over me please")
  );
}
const useHoverDemo = {
  type: "code",
  component: Demo,
  code
};

export { useHoverDemo };
//# sourceMappingURL=use-hover.demo.usage.js.map
