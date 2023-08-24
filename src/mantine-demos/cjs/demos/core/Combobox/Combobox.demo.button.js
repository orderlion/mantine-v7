'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`;
const groceries = ["\u{1F34E} Apples", "\u{1F34C} Bananas", "\u{1F966} Broccoli", "\u{1F955} Carrots", "\u{1F36B} Chocolate"];
function Demo() {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const combobox = core.useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption()
  });
  const options = groceries.map((item) => /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: item, key: item }, item));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Box, { mb: "xs" }, /* @__PURE__ */ React__default.createElement(core.Text, { span: true, size: "sm", c: "dimmed" }, "Selected item:", " "), /* @__PURE__ */ React__default.createElement(core.Text, { span: true, size: "sm" }, selectedItem || "Nothing selected")), /* @__PURE__ */ React__default.createElement(
    core.Combobox,
    {
      store: combobox,
      width: 250,
      position: "bottom-start",
      withArrow: true,
      onOptionSubmit: (val) => {
        setSelectedItem(val);
        combobox.closeDropdown();
      }
    },
    /* @__PURE__ */ React__default.createElement(core.Combobox.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => combobox.toggleDropdown() }, "Pick item")),
    /* @__PURE__ */ React__default.createElement(core.Combobox.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Combobox.Options, null, options))
  ));
}
const button = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  defaultExpanded: false,
  code
};

exports.button = button;
//# sourceMappingURL=Combobox.demo.button.js.map
