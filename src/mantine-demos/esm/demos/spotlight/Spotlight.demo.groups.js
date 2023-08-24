import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { SpotlightDemoBase } from './_demo-base.js';

const code = `
import { rem, Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
  {
    group: 'Pages',
    actions: [
      { id: 'home', label: 'Home page', description: 'Where we present the product' },
      { id: 'careers', label: 'Careers page', description: 'Where we list open positions' },
      { id: 'about-us', label: 'About us page', description: 'Where we tell what we do' },
    ],
  },

  {
    group: 'Apps',
    actions: [
      { id: 'svg-compressor', label: 'SVG compressor', description: 'Compress SVG images' },
      { id: 'base64', label: 'Base 64 converter', description: 'Convert data to base 64 format' },
      { id: 'fake-data', label: 'Fake data generator', description: 'Lorem ipsum generator' },
    ],
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
const actions = [
  {
    group: "Pages",
    actions: [
      { id: "home", label: "Home page", description: "Where we present the product" },
      { id: "careers", label: "Careers page", description: "Where we list open positions" },
      { id: "about-us", label: "About us page", description: "Where we tell what we do" }
    ]
  },
  {
    group: "Apps",
    actions: [
      { id: "svg-compressor", label: "SVG compressor", description: "Compress SVG images" },
      { id: "base64", label: "Base 64 converter", description: "Convert data to base 64 format" },
      { id: "fake-data", label: "Fake data generator", description: "Lorem ipsum generator" }
    ]
  }
];
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
const groups = {
  type: "code",
  component: Demo,
  code
};

export { groups };
//# sourceMappingURL=Spotlight.demo.groups.js.map
