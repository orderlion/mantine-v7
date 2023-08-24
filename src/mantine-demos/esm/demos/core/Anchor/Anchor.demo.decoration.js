import React from 'react';
import { Group, Anchor } from '@mantine/core';

const code = `
import { Anchor, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Anchor href="https://mantine.dev/" target="_blank" underline="always">
        Underline always
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
        Underline hover
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="never">
        Underline never
      </Anchor>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Anchor, { href: "https://mantine.dev/", target: "_blank", underline: "always" }, "Underline always"), /* @__PURE__ */ React.createElement(Anchor, { href: "https://mantine.dev/", target: "_blank", underline: "hover" }, "Underline hover"), /* @__PURE__ */ React.createElement(Anchor, { href: "https://mantine.dev/", target: "_blank", underline: "never" }, "Underline never"));
}
const decoration = {
  type: "code",
  component: Demo,
  code
};

export { decoration };
//# sourceMappingURL=Anchor.demo.decoration.js.map
