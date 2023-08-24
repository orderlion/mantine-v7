import React from 'react';
import { IconHome, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { SpotlightDemoBase } from './_demo-base.js';

const actions = [
  {
    id: "home",
    label: "Home",
    description: "Get to home page",
    onClick: () => console.log("Home"),
    leftSection: /* @__PURE__ */ React.createElement(IconHome, { style: { width: rem(24), height: rem(24) }, stroke: 1.5 })
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Get full information about current system status",
    onClick: () => console.log("Dashboard"),
    leftSection: /* @__PURE__ */ React.createElement(IconDashboard, { style: { width: rem(24), height: rem(24) }, stroke: 1.5 })
  },
  {
    id: "documentation",
    label: "Documentation",
    description: "Visit documentation to lean more about all features",
    onClick: () => console.log("Documentation"),
    leftSection: /* @__PURE__ */ React.createElement(IconFileText, { style: { width: rem(24), height: rem(24) }, stroke: 1.5 })
  }
];
const code = `
import { rem, Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
];

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    SpotlightDemoBase,
    {
      actions,
      nothingFound: "Nothing found...",
      highlightQuery: true,
      shortcut: null,
      searchProps: {
        leftSection: /* @__PURE__ */ React.createElement(IconSearch, { style: { width: rem(20), height: rem(20) }, stroke: 1.5 }),
        placeholder: "Search..."
      }
    }
  );
}
const usage = {
  type: "code",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=Spotlight.demo.usage.js.map
