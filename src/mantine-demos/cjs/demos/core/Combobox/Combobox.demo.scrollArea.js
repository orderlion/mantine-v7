'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, ScrollArea } from '@mantine/core';

const groceries = [
  '\u{1F34E} Apples',
  '\u{1F34C} Bananas',
  '\u{1F966} Broccoli',
  '\u{1F955} Carrots',
  '\u{1F36B} Chocolate',
  '\u{1F347} Grapes',
  '\u{1F34B} Lemon',
  '\u{1F96C} Lettuce',
  '\u{1F344} Mushrooms',
  '\u{1F34A} Oranges',
  '\u{1F954} Potatoes',
  '\u{1F345} Tomatoes',
  '\u{1F95A} Eggs',
  '\u{1F95B} Milk',
  '\u{1F35E} Bread',
  '\u{1F357} Chicken',
  '\u{1F354} Hamburger',
  '\u{1F9C0} Cheese',
  '\u{1F969} Steak',
  '\u{1F35F} French Fries',
  '\u{1F355} Pizza',
  '\u{1F966} Cauliflower',
  '\u{1F95C} Peanuts',
  '\u{1F366} Ice Cream',
  '\u{1F36F} Honey',
  '\u{1F956} Baguette',
  '\u{1F363} Sushi',
  '\u{1F95D} Kiwi',
  '\u{1F353} Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize type="scroll" mah={200}>
            {options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`;
const groceries = [
  "\u{1F34E} Apples",
  "\u{1F34C} Bananas",
  "\u{1F966} Broccoli",
  "\u{1F955} Carrots",
  "\u{1F36B} Chocolate",
  "\u{1F347} Grapes",
  "\u{1F34B} Lemon",
  "\u{1F96C} Lettuce",
  "\u{1F344} Mushrooms",
  "\u{1F34A} Oranges",
  "\u{1F954} Potatoes",
  "\u{1F345} Tomatoes",
  "\u{1F95A} Eggs",
  "\u{1F95B} Milk",
  "\u{1F35E} Bread",
  "\u{1F357} Chicken",
  "\u{1F354} Hamburger",
  "\u{1F9C0} Cheese",
  "\u{1F969} Steak",
  "\u{1F35F} French Fries",
  "\u{1F355} Pizza",
  "\u{1F966} Cauliflower",
  "\u{1F95C} Peanuts",
  "\u{1F366} Ice Cream",
  "\u{1F36F} Honey",
  "\u{1F956} Baguette",
  "\u{1F363} Sushi",
  "\u{1F95D} Kiwi",
  "\u{1F353} Strawberries"
];
function Demo() {
  const combobox = core.useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption()
  });
  const [value, setValue] = React.useState(null);
  const options = groceries.map((item) => /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: item, key: item }, item));
  return /* @__PURE__ */ React__default.createElement(
    core.Combobox,
    {
      store: combobox,
      onOptionSubmit: (val) => {
        setValue(val);
        combobox.closeDropdown();
      }
    },
    /* @__PURE__ */ React__default.createElement(core.Combobox.Target, null, /* @__PURE__ */ React__default.createElement(
      core.InputBase,
      {
        component: "button",
        pointer: true,
        rightSection: /* @__PURE__ */ React__default.createElement(core.Combobox.Chevron, null),
        onClick: () => combobox.toggleDropdown()
      },
      value || /* @__PURE__ */ React__default.createElement(core.Input.Placeholder, null, "Pick value")
    )),
    /* @__PURE__ */ React__default.createElement(core.Combobox.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Combobox.Options, null, /* @__PURE__ */ React__default.createElement(core.ScrollArea.Autosize, { type: "scroll", mah: 200 }, options)))
  );
}
const scrollArea = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  defaultExpanded: false,
  code
};

exports.scrollArea = scrollArea;
//# sourceMappingURL=Combobox.demo.scrollArea.js.map
