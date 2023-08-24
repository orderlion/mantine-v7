import React from 'react';
import { Container } from '@mantine/core';

const code = `
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Container, { fluid: true, h: 50, bg: "var(--mantine-color-blue-light)" }, "Fluid container has 100% max-width");
}
const fluid = {
  type: "code",
  component: Demo,
  code
};

export { fluid };
//# sourceMappingURL=Container.demo.fluid.js.map
