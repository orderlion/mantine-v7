'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink label="With icon" leftSection={<IconHome2 size="1rem" stroke={1.5} />} />
      <NavLink
        label="With right section"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
      <NavLink label="Disabled" leftSection={<IconCircleOff size="1rem" stroke={1.5} />} disabled />
      <NavLink
        label="With description"
        description="Additional information"
        leftSection={
          <Badge size="xs" variant="filled" color="red" w={16} h={16} p={0}>
            3
          </Badge>
        }
      />
      <NavLink
        label="Active subtle"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="subtle"
        active
      />
      <NavLink
        label="Active light"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
      />
      <NavLink
        label="Active filled"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        variant="filled"
        active
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "With icon", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconHome2, { size: "1rem", stroke: 1.5 }) }), /* @__PURE__ */ React__default.createElement(
    core.NavLink,
    {
      label: "With right section",
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconGauge, { size: "1rem", stroke: 1.5 }),
      rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronRight, { size: "0.8rem", stroke: 1.5 })
    }
  ), /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "Disabled", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconCircleOff, { size: "1rem", stroke: 1.5 }), disabled: true }), /* @__PURE__ */ React__default.createElement(
    core.NavLink,
    {
      label: "With description",
      description: "Additional information",
      leftSection: /* @__PURE__ */ React__default.createElement(core.Badge, { size: "xs", variant: "filled", color: "red", w: 16, h: 16, p: 0 }, "3")
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.NavLink,
    {
      label: "Active subtle",
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconActivity, { size: "1rem", stroke: 1.5 }),
      rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronRight, { size: "0.8rem", stroke: 1.5 }),
      variant: "subtle",
      active: true
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.NavLink,
    {
      label: "Active light",
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconActivity, { size: "1rem", stroke: 1.5 }),
      rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronRight, { size: "0.8rem", stroke: 1.5 }),
      active: true
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.NavLink,
    {
      label: "Active filled",
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconActivity, { size: "1rem", stroke: 1.5 }),
      rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronRight, { size: "0.8rem", stroke: 1.5 }),
      variant: "filled",
      active: true
    }
  ));
}
const usage = {
  type: "code",
  centered: true,
  maxWidth: 240,
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=NavLink.demo.usage.js.map
