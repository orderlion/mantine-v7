import React from 'react';
import { Text, Pagination } from '@mantine/core';

const code = `
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { mb: "xs" }, "1 sibling (default)"), /* @__PURE__ */ React.createElement(Pagination, { total: 20, siblings: 1, defaultValue: 10 }), /* @__PURE__ */ React.createElement(Text, { mb: "xs", mt: "xl" }, "2 siblings"), /* @__PURE__ */ React.createElement(Pagination, { total: 20, siblings: 2, defaultValue: 10 }), /* @__PURE__ */ React.createElement(Text, { mb: "xs", mt: "xl" }, "3 siblings"), /* @__PURE__ */ React.createElement(Pagination, { total: 20, siblings: 3, defaultValue: 10 }));
}
const siblings = {
  type: "code",
  code,
  component: Demo
};

export { siblings };
//# sourceMappingURL=Pagination.demo.siblings.js.map
