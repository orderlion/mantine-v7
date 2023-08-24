import React from 'react';
import { Highlight } from '@mantine/core';

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Highlight,
    {
      component: "a",
      href: "https://mantine.dev",
      target: "_blank",
      highlight: "mantine",
      fw: 500,
      c: "var(--mantine-color-anchor)"
    },
    "Mantine website"
  );
}
const props = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { props };
//# sourceMappingURL=Highlight.demo.props.js.map
