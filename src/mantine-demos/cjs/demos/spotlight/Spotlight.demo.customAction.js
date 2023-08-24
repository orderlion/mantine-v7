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
import { Badge, Button, Center, Group, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const data = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    title: 'Bender Bending Rodr\xEDguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    new: true,
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    title: 'Carol Miller',
    description: 'One of the richest people on Earth',
    new: false,
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    title: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    new: false,
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    title: 'Spongebob Squarepants',
    description: 'Not just a sponge',
    new: false,
  },
];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
  .filter((item) => item.title.toLowerCase().includes(query.toLowerCase().trim()))
  .map((item) => (
    <Spotlight.Action key={item.title} onClick={() => console.log(item)}>
      <Group wrap="nowrap" w="100%">
        {item.image && (
          <Center>
            <img src={item.image} alt={item.title} width={50} height={50} />
          </Center>
        )}

        <div style={{ flex: 1 }}>
          <Text>{item.title}</Text>

          {item.description && (
            <Text opacity={0.6} size="xs">
              {item.description}
            </Text>
          )}
        </div>

        {item.new && <Badge variant="default">new</Badge>}
      </Group>
    </Spotlight.Action>
  ));

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
const data = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    title: "Bender Bending Rodr\xEDguez",
    description: "Fascinated with cooking, though has no sense of taste",
    new: true
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    title: "Carol Miller",
    description: "One of the richest people on Earth",
    new: false
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    title: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant",
    new: false
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    title: "Spongebob Squarepants",
    description: "Not just a sponge",
    new: false
  }
];
function Demo() {
  const [store, spotlight$1] = React.useMemo(spotlight.createSpotlight, []);
  const [query, setQuery] = React.useState("");
  const items = data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase().trim())).map((item) => /* @__PURE__ */ React__default.createElement(spotlight.Spotlight.Action, { key: item.title, onClick: () => console.log(item) }, /* @__PURE__ */ React__default.createElement(core.Group, { wrap: "nowrap", w: "100%" }, item.image && /* @__PURE__ */ React__default.createElement(core.Center, null, /* @__PURE__ */ React__default.createElement("img", { src: item.image, alt: item.title, width: 50, height: 50 })), /* @__PURE__ */ React__default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React__default.createElement(core.Text, null, item.title), item.description && /* @__PURE__ */ React__default.createElement(core.Text, { opacity: 0.6, size: "xs" }, item.description)), item.new && /* @__PURE__ */ React__default.createElement(core.Badge, { variant: "default" }, "new"))));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: spotlight$1.open }, "Open spotlight"), /* @__PURE__ */ React__default.createElement(spotlight.Spotlight.Root, { store, query, onQueryChange: setQuery, shortcut: null }, /* @__PURE__ */ React__default.createElement(spotlight.Spotlight.Search, { placeholder: "Search...", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconSearch, { stroke: 1.5 }) }), /* @__PURE__ */ React__default.createElement(spotlight.Spotlight.ActionsList, null, items.length > 0 ? items : /* @__PURE__ */ React__default.createElement(spotlight.Spotlight.Empty, null, "Nothing found..."))));
}
const customAction = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

exports.customAction = customAction;
//# sourceMappingURL=Spotlight.demo.customAction.js.map
