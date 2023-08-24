import React, { useState } from 'react';
import { useCombobox, Combobox, TextInput } from '@mantine/core';

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
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={options.length === 0}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`;
const groceries = ["\u{1F34E} Apples", "\u{1F34C} Bananas", "\u{1F966} Broccoli", "\u{1F955} Carrots", "\u{1F36B} Chocolate"];
function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState("");
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim())) : groceries;
  const options = filteredOptions.map((item) => /* @__PURE__ */ React.createElement(Combobox.Option, { value: item, key: item }, item));
  return /* @__PURE__ */ React.createElement(
    Combobox,
    {
      onOptionSubmit: (optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      },
      store: combobox
    },
    /* @__PURE__ */ React.createElement(Combobox.Target, null, /* @__PURE__ */ React.createElement(
      TextInput,
      {
        label: "Pick value or type anything",
        placeholder: "Pick value or type anything",
        value,
        onChange: (event) => {
          setValue(event.currentTarget.value);
          combobox.openDropdown();
        },
        onClick: () => combobox.openDropdown(),
        onFocus: () => combobox.openDropdown(),
        onBlur: () => combobox.closeDropdown()
      }
    )),
    /* @__PURE__ */ React.createElement(Combobox.Dropdown, { hidden: options.length === 0 }, /* @__PURE__ */ React.createElement(Combobox.Options, null, options))
  );
}
const hiddenDropdown = {
  type: "code",
  component: Demo,
  centered: true,
  maxWidth: 340,
  defaultExpanded: false,
  code
};

export { hiddenDropdown };
//# sourceMappingURL=Combobox.demo.hiddenDropdown.js.map
