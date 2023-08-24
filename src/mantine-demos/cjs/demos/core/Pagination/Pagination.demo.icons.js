'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.Pagination,
    {
      total: 10,
      withEdges: true,
      nextIcon: iconsReact.IconArrowRight,
      previousIcon: iconsReact.IconArrowLeft,
      firstIcon: iconsReact.IconArrowBarToLeft,
      lastIcon: iconsReact.IconArrowBarToRight,
      dotsIcon: iconsReact.IconGripHorizontal
    }
  ), /* @__PURE__ */ React__default.createElement(core.Pagination.Root, { total: 10 }, /* @__PURE__ */ React__default.createElement(core.Group, { gap: 7, mt: "xl" }, /* @__PURE__ */ React__default.createElement(core.Pagination.First, { icon: iconsReact.IconArrowBarToLeft }), /* @__PURE__ */ React__default.createElement(core.Pagination.Previous, { icon: iconsReact.IconArrowLeft }), /* @__PURE__ */ React__default.createElement(core.Pagination.Items, { dotsIcon: iconsReact.IconGripHorizontal }), /* @__PURE__ */ React__default.createElement(core.Pagination.Next, { icon: iconsReact.IconArrowRight }), /* @__PURE__ */ React__default.createElement(core.Pagination.Last, { icon: iconsReact.IconArrowBarToRight }))));
}
const icons = {
  type: "code",
  component: Demo,
  code
};

exports.icons = icons;
//# sourceMappingURL=Pagination.demo.icons.js.map
