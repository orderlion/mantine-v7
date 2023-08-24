'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var spotlight = require('@mantine/spotlight');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const data = ['Home', 'About us', 'Contacts', 'Blog', 'Careers', 'Terms of service'];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`;
const data = ["Home", "About us", "Contacts", "Blog", "Careers", "Terms of service"];
function Demo() {
  const [store, spotlight$1] = React.useMemo(spotlight.createSpotlight, []);
  const [query, setQuery] = React.useState("");
  const items = data.filter((item) => item.toLowerCase().includes(query.toLowerCase().trim())).map((item) => /* @__PURE__ */ React__default.createElement(spotlight.Spotlight.Action, { key: item, label: item }));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: spotlight$1.open }, "Open spotlight"), /* @__PURE__ */ React__default.createElement(spotlight.Spotlight.Root, { store, query, onQueryChange: setQuery, shortcut: null }, /* @__PURE__ */ React__default.createElement(spotlight.Spotlight.Search, { placeholder: "Search...", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconSearch, { stroke: 1.5 }) }), /* @__PURE__ */ React__default.createElement(spotlight.Spotlight.ActionsList, null, items.length > 0 ? items : /* @__PURE__ */ React__default.createElement(spotlight.Spotlight.Empty, null, "Nothing found..."))));
}
const compound = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

exports.compound = compound;
//# sourceMappingURL=Spotlight.demo.compound.js.map
