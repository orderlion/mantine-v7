'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`;
const groceries = ["\u{1F34E} Apples", "\u{1F34C} Bananas", "\u{1F966} Broccoli", "\u{1F955} Carrots", "\u{1F36B} Chocolate"];
function Demo() {
  const combobox = core.useCombobox();
  const [value, setValue] = React.useState("");
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim())) : groceries;
  const options = filteredOptions.map((item) => /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: item, key: item }, item));
  return /* @__PURE__ */ React__default.createElement(
    core.Combobox,
    {
      onOptionSubmit: (optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      },
      store: combobox
    },
    /* @__PURE__ */ React__default.createElement(core.Combobox.Target, null, /* @__PURE__ */ React__default.createElement(
      core.TextInput,
      {
        label: "Pick value or type anything",
        placeholder: "Pick value or type anything",
        value,
        onChange: (event) => {
          setValue(event.currentTarget.value);
          combobox.openDropdown();
          combobox.updateSelectedOptionIndex();
        },
        onClick: () => combobox.openDropdown(),
        onFocus: () => combobox.openDropdown(),
        onBlur: () => combobox.closeDropdown()
      }
    )),
    /* @__PURE__ */ React__default.createElement(core.Combobox.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Combobox.Options, null, options.length === 0 ? /* @__PURE__ */ React__default.createElement(core.Combobox.Empty, null, "Nothing found") : options))
  );
}
const autocomplete = {
  type: "code",
  component: Demo,
  centered: true,
  maxWidth: 340,
  defaultExpanded: false,
  code
};

exports.autocomplete = autocomplete;
//# sourceMappingURL=Combobox.demo.autocomplete.js.map
