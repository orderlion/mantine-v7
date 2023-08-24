import React from 'react';
import { Divider } from '@mantine/core';

const code = `
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={10} />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Divider, { my: "xs", size: "xs" }), /* @__PURE__ */ React.createElement(Divider, { my: "xs", size: "sm" }), /* @__PURE__ */ React.createElement(Divider, { my: "xs", size: "md" }), /* @__PURE__ */ React.createElement(Divider, { my: "xs", size: "lg" }), /* @__PURE__ */ React.createElement(Divider, { my: "xs", size: "xl" }), /* @__PURE__ */ React.createElement(Divider, { my: "xs", size: 10 }));
}
const sizes = {
  type: "code",
  code,
  component: Demo
};

export { sizes };
//# sourceMappingURL=Divider.demo.sizes.js.map
