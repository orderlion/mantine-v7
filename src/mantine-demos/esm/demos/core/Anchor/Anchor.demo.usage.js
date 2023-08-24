import React from 'react';
import { Anchor } from '@mantine/core';

const code = `
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Anchor, { href: "https://mantine.dev/", target: "_blank" }, "Anchor component");
}
const usage = {
  type: "code",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=Anchor.demo.usage.js.map
