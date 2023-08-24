import React, { useState } from 'react';
import { useCombobox, Combobox, Box, Text, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
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
        <Combobox.Target withAriaAttributes={false}>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search groceries"
          />
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`;
const groceries = ["\u{1F34E} Apples", "\u{1F34C} Bananas", "\u{1F966} Broccoli", "\u{1F955} Carrots", "\u{1F36B} Chocolate"];
function Demo() {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch("");
    },
    onDropdownOpen: () => {
      combobox.focusSearchInput();
    }
  });
  const options = groceries.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim())).map((item) => /* @__PURE__ */ React.createElement(Combobox.Option, { value: item, key: item }, item));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box, { mb: "xs" }, /* @__PURE__ */ React.createElement(Text, { span: true, size: "sm", c: "dimmed" }, "Selected item:", " "), /* @__PURE__ */ React.createElement(Text, { span: true, size: "sm" }, selectedItem || "Nothing selected")), /* @__PURE__ */ React.createElement(
    Combobox,
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
    /* @__PURE__ */ React.createElement(Combobox.Target, { withAriaAttributes: false }, /* @__PURE__ */ React.createElement(Button, { onClick: () => combobox.toggleDropdown() }, "Pick item")),
    /* @__PURE__ */ React.createElement(Combobox.Dropdown, null, /* @__PURE__ */ React.createElement(
      Combobox.Search,
      {
        value: search,
        onChange: (event) => setSearch(event.currentTarget.value),
        placeholder: "Search groceries"
      }
    ), /* @__PURE__ */ React.createElement(Combobox.Options, null, options.length > 0 ? options : /* @__PURE__ */ React.createElement(Combobox.Empty, null, "Nothing found")))
  ));
}
const buttonSearch = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  defaultExpanded: false,
  code
};

export { buttonSearch };
//# sourceMappingURL=Combobox.demo.buttonSearch.js.map
