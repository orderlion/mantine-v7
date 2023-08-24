import React from 'react';
import { Pagination, Group } from '@mantine/core';

const code = `
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        getItemProps={(page) => ({
          component: 'a',
          href: \`#page-\${page}\`,
        })}
        getControlProps={(control) => {
          if (control === 'first') {
            return { component: 'a', href: '#page-0' };
          }

          if (control === 'last') {
            return { component: 'a', href: '#page-10' };
          }

          if (control === 'next') {
            return { component: 'a', href: '#page-2' };
          }

          if (control === 'previous') {
            return { component: 'a', href: '#page-1' };
          }

          return {};
        }}
      />

      {/* Compound pagination */}
      <Pagination.Root
        total={10}
        getItemProps={(page) => ({
          component: 'a',
          href: \`#page-\${page}\`,
        })}
      >
        <Group gap={7} mt="xl">
          <Pagination.First component="a" href="#page-0" />
          <Pagination.Previous component="a" href="#page-1" />
          <Pagination.Items />
          <Pagination.Next component="a" href="#page-2" />
          <Pagination.Last component="a" href="#page-10" />
        </Group>
      </Pagination.Root>
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Pagination,
    {
      total: 10,
      withEdges: true,
      getItemProps: (page) => ({
        component: "a",
        href: `#page-${page}`
      }),
      getControlProps: (control) => {
        if (control === "first") {
          return { component: "a", href: "#page-0" };
        }
        if (control === "last") {
          return { component: "a", href: "#page-10" };
        }
        if (control === "next") {
          return { component: "a", href: "#page-2" };
        }
        if (control === "previous") {
          return { component: "a", href: "#page-1" };
        }
        return {};
      }
    }
  ), /* @__PURE__ */ React.createElement(
    Pagination.Root,
    {
      total: 10,
      getItemProps: (page) => ({
        component: "a",
        href: `#page-${page}`
      })
    },
    /* @__PURE__ */ React.createElement(Group, { gap: 7, mt: "xl" }, /* @__PURE__ */ React.createElement(Pagination.First, { component: "a", href: "#page-0" }), /* @__PURE__ */ React.createElement(Pagination.Previous, { component: "a", href: "#page-1" }), /* @__PURE__ */ React.createElement(Pagination.Items, null), /* @__PURE__ */ React.createElement(Pagination.Next, { component: "a", href: "#page-2" }), /* @__PURE__ */ React.createElement(Pagination.Last, { component: "a", href: "#page-10" }))
  ));
}
const links = {
  type: "code",
  component: Demo,
  code
};

export { links };
//# sourceMappingURL=Pagination.demo.links.js.map
