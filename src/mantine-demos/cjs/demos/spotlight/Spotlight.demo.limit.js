'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var _demoBase = require('./_demo-base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { rem, Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(3000)
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
        limit={7}
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
`;
const actions = Array(3e3).fill(0).map((_, index) => ({
  id: `action-${index}`,
  label: `Action ${index}`,
  description: `Action ${index} description`
}));
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    _demoBase.SpotlightDemoBase,
    {
      actions,
      nothingFound: "Nothing found...",
      highlightQuery: true,
      limit: 7,
      shortcut: null,
      searchProps: {
        leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconSearch, { style: { width: core.rem(20), height: core.rem(20) }, stroke: 1.5 }),
        placeholder: "Search..."
      }
    }
  );
}
const limit = {
  type: "code",
  component: Demo,
  code
};

exports.limit = limit;
//# sourceMappingURL=Spotlight.demo.limit.js.map
