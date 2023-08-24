import React from 'react';
import { Button } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Button,
    {
      component: "a",
      href: "https://mantine.dev",
      "data-disabled": true,
      onClick: (event) => event.preventDefault()
    },
    "Disabled link"
  );
}
const disabledLink = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { disabledLink };
//# sourceMappingURL=Button.demo.disabledLink.js.map
