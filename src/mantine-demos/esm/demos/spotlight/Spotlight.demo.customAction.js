import React, { useMemo, useState } from 'react';
import { createSpotlight, Spotlight } from '@mantine/spotlight';
import { Group, Center, Text, Badge, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

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
  const [store, spotlight] = useMemo(createSpotlight, []);
  const [query, setQuery] = useState("");
  const items = data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase().trim())).map((item) => /* @__PURE__ */ React.createElement(Spotlight.Action, { key: item.title, onClick: () => console.log(item) }, /* @__PURE__ */ React.createElement(Group, { wrap: "nowrap", w: "100%" }, item.image && /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement("img", { src: item.image, alt: item.title, width: 50, height: 50 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Text, null, item.title), item.description && /* @__PURE__ */ React.createElement(Text, { opacity: 0.6, size: "xs" }, item.description)), item.new && /* @__PURE__ */ React.createElement(Badge, { variant: "default" }, "new"))));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { onClick: spotlight.open }, "Open spotlight"), /* @__PURE__ */ React.createElement(Spotlight.Root, { store, query, onQueryChange: setQuery, shortcut: null }, /* @__PURE__ */ React.createElement(Spotlight.Search, { placeholder: "Search...", leftSection: /* @__PURE__ */ React.createElement(IconSearch, { stroke: 1.5 }) }), /* @__PURE__ */ React.createElement(Spotlight.ActionsList, null, items.length > 0 ? items : /* @__PURE__ */ React.createElement(Spotlight.Empty, null, "Nothing found..."))));
}
const customAction = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

export { customAction };
//# sourceMappingURL=Spotlight.demo.customAction.js.map
