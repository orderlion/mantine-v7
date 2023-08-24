'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        label="First parent link"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Nested parent link" childrenOffset={28}>
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </NavLink>

      <NavLink
        label="Second parent link"
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Third child link" />
      </NavLink>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.NavLink,
    {
      label: "First parent link",
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconGauge, { size: "1rem", stroke: 1.5 }),
      childrenOffset: 28
    },
    /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "First child link" }),
    /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "Second child link" }),
    /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "Nested parent link", childrenOffset: 28 }, /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "First child link" }), /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "Second child link" }), /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "Third child link" }))
  ), /* @__PURE__ */ React__default.createElement(
    core.NavLink,
    {
      label: "Second parent link",
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconFingerprint, { size: "1rem", stroke: 1.5 }),
      childrenOffset: 28,
      defaultOpened: true
    },
    /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "First child link" }),
    /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "Second child link" }),
    /* @__PURE__ */ React__default.createElement(core.NavLink, { label: "Third child link" })
  ));
}
const nested = {
  type: "code",
  centered: true,
  maxWidth: 240,
  component: Demo,
  code
};

exports.nested = nested;
//# sourceMappingURL=NavLink.demo.nested.js.map
