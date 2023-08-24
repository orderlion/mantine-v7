import React, { useMemo, useState } from 'react';
import { createSpotlight, Spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

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
  const [store, spotlight] = useMemo(createSpotlight, []);
  const [query, setQuery] = useState("");
  const items = data.filter((item) => item.toLowerCase().includes(query.toLowerCase().trim())).map((item) => /* @__PURE__ */ React.createElement(Spotlight.Action, { key: item, label: item }));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { onClick: spotlight.open }, "Open spotlight"), /* @__PURE__ */ React.createElement(Spotlight.Root, { store, query, onQueryChange: setQuery, shortcut: null }, /* @__PURE__ */ React.createElement(Spotlight.Search, { placeholder: "Search...", leftSection: /* @__PURE__ */ React.createElement(IconSearch, { stroke: 1.5 }) }), /* @__PURE__ */ React.createElement(Spotlight.ActionsList, null, items.length > 0 ? items : /* @__PURE__ */ React.createElement(Spotlight.Empty, null, "Nothing found..."))));
}
const compound = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

export { compound };
//# sourceMappingURL=Spotlight.demo.compound.js.map
