import React from 'react';
import { Text, Pagination } from '@mantine/core';

const code = `
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { mb: "xs" }, "1 boundary (default)"), /* @__PURE__ */ React.createElement(Pagination, { total: 20, boundaries: 1, defaultValue: 10 }), /* @__PURE__ */ React.createElement(Text, { mt: "xl", mb: "xs" }, "2 boundaries"), /* @__PURE__ */ React.createElement(Pagination, { total: 20, boundaries: 2, defaultValue: 10 }), /* @__PURE__ */ React.createElement(Text, { mt: "xl", mb: "xs" }, "3 boundaries"), /* @__PURE__ */ React.createElement(Pagination, { total: 20, boundaries: 3, defaultValue: 10 }));
}
const boundaries = {
  type: "code",
  code,
  component: Demo
};

export { boundaries };
//# sourceMappingURL=Pagination.demo.boundaries.js.map
