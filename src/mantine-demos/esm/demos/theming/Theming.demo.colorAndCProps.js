import React from 'react';
import { Button } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button color="#C3FF36" c="black">
      Button with color and c props
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Button, { color: "#C3FF36", c: "black" }, "Button with color and c props");
}
const colorAndCProps = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { colorAndCProps };
//# sourceMappingURL=Theming.demo.colorAndCProps.js.map
