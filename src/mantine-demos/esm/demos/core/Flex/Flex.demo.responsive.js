import React from 'react';
import { Flex, Button } from '@mantine/core';

const code = `
import { Flex, Button } from '@mantine/core';

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Flex,
    {
      direction: { base: "column", sm: "row" },
      gap: { base: "sm", sm: "lg" },
      justify: { sm: "center" }
    },
    /* @__PURE__ */ React.createElement(Button, null, "Button 1"),
    /* @__PURE__ */ React.createElement(Button, null, "Button 2"),
    /* @__PURE__ */ React.createElement(Button, null, "Button 3")
  );
}
const responsive = {
  type: "code",
  component: Demo,
  code
};

export { responsive };
//# sourceMappingURL=Flex.demo.responsive.js.map
