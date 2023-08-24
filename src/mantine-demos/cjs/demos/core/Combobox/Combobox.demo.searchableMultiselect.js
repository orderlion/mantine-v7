'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`;
const groceries = ["\u{1F34E} Apples", "\u{1F34C} Bananas", "\u{1F966} Broccoli", "\u{1F955} Carrots", "\u{1F36B} Chocolate"];
function Demo() {
  const combobox = core.useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active")
  });
  const [search, setSearch] = React.useState("");
  const [value, setValue] = React.useState([]);
  const handleValueSelect = (val) => setValue(
    (current) => current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
  );
  const handleValueRemove = (val) => setValue((current) => current.filter((v) => v !== val));
  const values = value.map((item) => /* @__PURE__ */ React__default.createElement(core.Pill, { key: item, withRemoveButton: true, onRemove: () => handleValueRemove(item) }, item));
  const options = groceries.filter((item) => item.toLowerCase().includes(search.trim().toLowerCase())).map((item) => /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: item, key: item, active: value.includes(item) }, /* @__PURE__ */ React__default.createElement(core.Group, { gap: "sm" }, value.includes(item) ? /* @__PURE__ */ React__default.createElement(core.CheckIcon, { size: 12 }) : null, /* @__PURE__ */ React__default.createElement("span", null, item))));
  return /* @__PURE__ */ React__default.createElement(core.Combobox, { store: combobox, onOptionSubmit: handleValueSelect }, /* @__PURE__ */ React__default.createElement(core.Combobox.DropdownTarget, null, /* @__PURE__ */ React__default.createElement(core.PillsInput, { onClick: () => combobox.openDropdown() }, /* @__PURE__ */ React__default.createElement(core.Pill.Group, null, values, /* @__PURE__ */ React__default.createElement(core.Combobox.EventsTarget, null, /* @__PURE__ */ React__default.createElement(
    core.PillsInput.Field,
    {
      onFocus: () => combobox.openDropdown(),
      onBlur: () => combobox.closeDropdown(),
      value: search,
      placeholder: "Search values",
      onChange: (event) => {
        combobox.updateSelectedOptionIndex();
        setSearch(event.currentTarget.value);
      },
      onKeyDown: (event) => {
        if (event.key === "Backspace" && search.length === 0) {
          event.preventDefault();
          handleValueRemove(value[value.length - 1]);
        }
      }
    }
  ))))), /* @__PURE__ */ React__default.createElement(core.Combobox.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Combobox.Options, null, options.length > 0 ? options : /* @__PURE__ */ React__default.createElement(core.Combobox.Empty, null, "Nothing found..."))));
}
const searchableMultiselect = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  defaultExpanded: false,
  maxWidth: 340
};

exports.searchableMultiselect = searchableMultiselect;
//# sourceMappingURL=Combobox.demo.searchableMultiselect.js.map
