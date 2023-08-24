import React from 'react';
import { Pagination, Group } from '@mantine/core';

const code = `
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Pagination.Root, { total: 10 }, /* @__PURE__ */ React.createElement(Group, { gap: 5, justify: "center" }, /* @__PURE__ */ React.createElement(Pagination.First, null), /* @__PURE__ */ React.createElement(Pagination.Previous, null), /* @__PURE__ */ React.createElement(Pagination.Items, null), /* @__PURE__ */ React.createElement(Pagination.Next, null), /* @__PURE__ */ React.createElement(Pagination.Last, null)));
}
const composition = {
  type: "code",
  component: Demo,
  code
};

export { composition };
//# sourceMappingURL=Pagination.demo.composition.js.map
