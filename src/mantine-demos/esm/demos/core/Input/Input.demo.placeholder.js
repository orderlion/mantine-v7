import React from 'react';
import { Input } from '@mantine/core';

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Input, { component: "button", pointer: true }, /* @__PURE__ */ React.createElement(Input.Placeholder, null, "Placeholder content"));
}
const placeholder = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { placeholder };
//# sourceMappingURL=Input.demo.placeholder.js.map
