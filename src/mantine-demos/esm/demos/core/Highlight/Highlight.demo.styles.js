import React from 'react';
import { Highlight } from '@mantine/core';

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Highlight,
    {
      ta: "center",
      highlight: ["highlighted", "default"],
      highlightStyles: {
        backgroundImage: "linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",
        fontWeight: 700,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }
    },
    "You can change styles of highlighted part if you do not like default styles"
  );
}
const styles = {
  type: "code",
  code,
  component: Demo
};

export { styles };
//# sourceMappingURL=Highlight.demo.styles.js.map
