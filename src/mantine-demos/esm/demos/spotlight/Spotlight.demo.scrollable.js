import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { SpotlightDemoBase } from './_demo-base.js';

const code = `
import { rem, Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: \`action-\${index}\`,
    label: \`Action \${index}\`,
    description: \`Action \${index} description\`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        scrollable
        maxHeight={350}
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`;
const actions = Array(100).fill(0).map((_, index) => ({
  id: `action-${index}`,
  label: `Action ${index}`,
  description: `Action ${index} description`
}));
function Demo() {
  return /* @__PURE__ */ React.createElement(
    SpotlightDemoBase,
    {
      actions,
      nothingFound: "Nothing found...",
      highlightQuery: true,
      scrollable: true,
      maxHeight: 350,
      shortcut: null,
      searchProps: {
        leftSection: /* @__PURE__ */ React.createElement(IconSearch, { style: { width: rem(20), height: rem(20) }, stroke: 1.5 }),
        placeholder: "Search..."
      }
    }
  );
}
const scrollable = {
  type: "code",
  component: Demo,
  code
};

export { scrollable };
//# sourceMappingURL=Spotlight.demo.scrollable.js.map
