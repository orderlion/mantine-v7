'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState, useRef } from 'react';
import { ScrollArea, Popover, TextInput, UnstyledButton, Text } from '@mantine/core';

const groceries = [
  'Apples',
  'Bananas',
  'Oranges',
  'Milk',
  'Bread',
  'Eggs',
  'Chicken',
  'Beef',
  'Pasta',
  'Rice',
  'Potatoes',
  'Onions',
  'Tomatoes',
  'Cucumbers',
  'Carrots',
  'Lettuce',
  'Spinach',
  'Broccoli',
  'Cheese',
  'Yogurt',
  'Butter',
  'Sugar',
  'Salt',
  'Pepper',
  'Coffee',
  'Tea',
  'Juice',
  'Water',
  'Cookies',
  'Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <Popover width="target" opened={opened}>
      <Popover.Target>
        <TextInput
          value={query}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current + 1 >= filtered.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }
          }}
          placeholder="Search groceries"
        />
      </Popover.Target>
      <Popover.Dropdown p="xs">
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200} type="always">
          {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}
`;
const groceries = [
  "Apples",
  "Bananas",
  "Oranges",
  "Milk",
  "Bread",
  "Eggs",
  "Chicken",
  "Beef",
  "Pasta",
  "Rice",
  "Potatoes",
  "Onions",
  "Tomatoes",
  "Cucumbers",
  "Carrots",
  "Lettuce",
  "Spinach",
  "Broccoli",
  "Cheese",
  "Yogurt",
  "Butter",
  "Sugar",
  "Salt",
  "Pepper",
  "Coffee",
  "Tea",
  "Juice",
  "Water",
  "Cookies",
  "Chocolate"
];
function Demo() {
  const viewportRef = React.useRef(null);
  const [query, setQuery] = React.useState("");
  const [opened, setOpened] = React.useState(false);
  const [hovered, setHovered] = React.useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => /* @__PURE__ */ React__default.createElement(
    core.UnstyledButton,
    {
      "data-list-item": true,
      key: item,
      display: "block",
      bg: index === hovered ? "var(--mantine-color-blue-light)" : void 0,
      w: "100%",
      p: 5
    },
    item
  ));
  return /* @__PURE__ */ React__default.createElement(core.Popover, { width: "target", opened }, /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      value: query,
      onFocus: () => setOpened(true),
      onBlur: () => setOpened(false),
      onChange: (event) => {
        setQuery(event.currentTarget.value);
        setHovered(-1);
      },
      onKeyDown: (event) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          setHovered((current) => {
            var _a, _b, _c;
            const nextIndex = current + 1 >= filtered.length ? current : current + 1;
            (_c = (_b = (_a = viewportRef.current) == null ? void 0 : _a.querySelectorAll("[data-list-item]")) == null ? void 0 : _b[nextIndex]) == null ? void 0 : _c.scrollIntoView({ block: "nearest" });
            return nextIndex;
          });
        }
        if (event.key === "ArrowUp") {
          event.preventDefault();
          setHovered((current) => {
            var _a, _b, _c;
            const nextIndex = current - 1 < 0 ? current : current - 1;
            (_c = (_b = (_a = viewportRef.current) == null ? void 0 : _a.querySelectorAll("[data-list-item]")) == null ? void 0 : _b[nextIndex]) == null ? void 0 : _c.scrollIntoView({ block: "nearest" });
            return nextIndex;
          });
        }
      },
      placeholder: "Search groceries"
    }
  )), /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, { p: "xs" }, /* @__PURE__ */ React__default.createElement(core.ScrollArea.Autosize, { viewportRef, mah: 200, type: "always" }, items.length > 0 ? items : /* @__PURE__ */ React__default.createElement(core.Text, { c: "dimmed" }, "Nothing found"))));
}
const autosizePopover = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.autosizePopover = autosizePopover;
//# sourceMappingURL=ScrollArea.demo.autosizePopover.js.map
