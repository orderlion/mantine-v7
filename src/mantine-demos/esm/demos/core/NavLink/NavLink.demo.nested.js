import React from 'react';
import { NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    NavLink,
    {
      label: "First parent link",
      leftSection: /* @__PURE__ */ React.createElement(IconGauge, { size: "1rem", stroke: 1.5 }),
      childrenOffset: 28
    },
    /* @__PURE__ */ React.createElement(NavLink, { label: "First child link" }),
    /* @__PURE__ */ React.createElement(NavLink, { label: "Second child link" }),
    /* @__PURE__ */ React.createElement(NavLink, { label: "Nested parent link", childrenOffset: 28 }, /* @__PURE__ */ React.createElement(NavLink, { label: "First child link" }), /* @__PURE__ */ React.createElement(NavLink, { label: "Second child link" }), /* @__PURE__ */ React.createElement(NavLink, { label: "Third child link" }))
  ), /* @__PURE__ */ React.createElement(
    NavLink,
    {
      label: "Second parent link",
      leftSection: /* @__PURE__ */ React.createElement(IconFingerprint, { size: "1rem", stroke: 1.5 }),
      childrenOffset: 28,
      defaultOpened: true
    },
    /* @__PURE__ */ React.createElement(NavLink, { label: "First child link" }),
    /* @__PURE__ */ React.createElement(NavLink, { label: "Second child link" }),
    /* @__PURE__ */ React.createElement(NavLink, { label: "Third child link" })
  ));
}
const nested = {
  type: "code",
  centered: true,
  maxWidth: 240,
  component: Demo,
  code
};

export { nested };
//# sourceMappingURL=NavLink.demo.nested.js.map
