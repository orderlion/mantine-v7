import React from 'react';
import { Divider } from '@mantine/core';

const code = `
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Divider, { my: "sm" }), /* @__PURE__ */ React.createElement(Divider, { my: "sm", variant: "dashed" }), /* @__PURE__ */ React.createElement(Divider, { my: "sm", variant: "dotted" }));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Divider.demo.usage.js.map
