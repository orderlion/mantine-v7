import React from 'react';
import { Button } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Button, { component: "a", href: "https://mantine.dev/", target: "_blank" }, "Mantine website");
}
const polymorphic = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { polymorphic };
//# sourceMappingURL=Guides.demo.polymorphic.js.map
