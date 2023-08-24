'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const shouldFilterOptions = groceries.every((item) => item !== search);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search value"
          value={search}
          onChange={(event) => {
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`;
const groceries = ["\u{1F34E} Apples", "\u{1F34C} Bananas", "\u{1F966} Broccoli", "\u{1F955} Carrots", "\u{1F36B} Chocolate"];
function Demo() {
  const combobox = core.useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption()
  });
  const [value, setValue] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const shouldFilterOptions = groceries.every((item) => item !== search);
  const filteredOptions = shouldFilterOptions ? groceries.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim())) : groceries;
  const options = filteredOptions.map((item) => /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: item, key: item }, item));
  return /* @__PURE__ */ React__default.createElement(
    core.Combobox,
    {
      store: combobox,
      onOptionSubmit: (val) => {
        setValue(val);
        setSearch(val);
        combobox.closeDropdown();
      }
    },
    /* @__PURE__ */ React__default.createElement(core.Combobox.Target, null, /* @__PURE__ */ React__default.createElement(
      core.InputBase,
      {
        rightSection: /* @__PURE__ */ React__default.createElement(core.Combobox.Chevron, null),
        onClick: () => combobox.openDropdown(),
        onFocus: () => combobox.openDropdown(),
        onBlur: () => {
          combobox.closeDropdown();
          setSearch(value || "");
        },
        placeholder: "Search value",
        value: search,
        onChange: (event) => {
          combobox.updateSelectedOptionIndex();
          setSearch(event.currentTarget.value);
        }
      }
    )),
    /* @__PURE__ */ React__default.createElement(core.Combobox.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Combobox.Options, null, options.length > 0 ? options : /* @__PURE__ */ React__default.createElement(core.Combobox.Empty, null, "Nothing found")))
  );
}
const searchableSelect = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  defaultExpanded: false,
  code
};

exports.searchableSelect = searchableSelect;
//# sourceMappingURL=Combobox.demo.searchableSelect.js.map
