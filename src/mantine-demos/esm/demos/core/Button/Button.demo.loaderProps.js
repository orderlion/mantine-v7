import React from 'react';
import { Button } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Button, { loading: true, loaderProps: { type: "dots" } }, "Loading button");
}
const loaderProps = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { loaderProps };
//# sourceMappingURL=Button.demo.loaderProps.js.map
