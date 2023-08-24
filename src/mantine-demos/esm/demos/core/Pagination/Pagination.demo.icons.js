import React from 'react';
import { Pagination, Group } from '@mantine/core';
import { IconArrowRight, IconArrowLeft, IconArrowBarToLeft, IconArrowBarToRight, IconGripHorizontal } from '@tabler/icons-react';

const code = `
import { Group, Pagination } from '@mantine/core';
import {
  IconArrowBarToRight,
  IconArrowBarToLeft,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        position="center"
        withEdges
        nextIcon={IconArrowRight}
        previousIcon={IconArrowLeft}
        firstIcon={IconArrowBarToLeft}
        lastIcon={IconArrowBarToRight}
        dotsIcon={IconGripHorizontal}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={IconArrowBarToLeft} />
          <Pagination.Previous icon={IconArrowLeft} />
          <Pagination.Items dotsIcon={IconGripHorizontal} />
          <Pagination.Next icon={IconArrowRight} />
          <Pagination.Last icon={IconArrowBarToRight} />
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
      nextIcon: IconArrowRight,
      previousIcon: IconArrowLeft,
      firstIcon: IconArrowBarToLeft,
      lastIcon: IconArrowBarToRight,
      dotsIcon: IconGripHorizontal
    }
  ), /* @__PURE__ */ React.createElement(Pagination.Root, { total: 10 }, /* @__PURE__ */ React.createElement(Group, { gap: 7, mt: "xl" }, /* @__PURE__ */ React.createElement(Pagination.First, { icon: IconArrowBarToLeft }), /* @__PURE__ */ React.createElement(Pagination.Previous, { icon: IconArrowLeft }), /* @__PURE__ */ React.createElement(Pagination.Items, { dotsIcon: IconGripHorizontal }), /* @__PURE__ */ React.createElement(Pagination.Next, { icon: IconArrowRight }), /* @__PURE__ */ React.createElement(Pagination.Last, { icon: IconArrowBarToRight }))));
}
const icons = {
  type: "code",
  component: Demo,
  code
};

export { icons };
//# sourceMappingURL=Pagination.demo.icons.js.map
