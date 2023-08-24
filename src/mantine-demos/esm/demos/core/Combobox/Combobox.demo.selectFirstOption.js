import React, { useState, useEffect } from 'react';
import { useCombobox, Combobox, TextInput } from '@mantine/core';

const code = `
import { useState, useEffect } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

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

  useEffect(() => {
    // we need to wait for options to render before we can select first one
    combobox.selectFirstOption();
  }, [value]);

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
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption()
  });
  const [value, setValue] = useState("");
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim())) : groceries;
  const options = filteredOptions.map((item) => /* @__PURE__ */ React.createElement(Combobox.Option, { value: item, key: item }, item));
  useEffect(() => {
    combobox.selectFirstOption();
  }, [value]);
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
    /* @__PURE__ */ React.createElement(Combobox.Dropdown, null, /* @__PURE__ */ React.createElement(Combobox.Options, null, options.length === 0 ? /* @__PURE__ */ React.createElement(Combobox.Empty, null, "Nothing found") : options))
  );
}
const selectFirstOption = {
  type: "code",
  component: Demo,
  centered: true,
  maxWidth: 340,
  defaultExpanded: false,
  code
};

export { selectFirstOption };
//# sourceMappingURL=Combobox.demo.selectFirstOption.js.map
