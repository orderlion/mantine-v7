import React, { useState } from 'react';
import { useCombobox, Combobox, InputBase, Input } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

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
        <Combobox.Options>{options}</Combobox.Options>
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
  const [value, setValue] = useState(null);
  const options = groceries.map((item) => /* @__PURE__ */ React.createElement(Combobox.Option, { value: item, key: item }, item));
  return /* @__PURE__ */ React.createElement(
    Combobox,
    {
      store: combobox,
      onOptionSubmit: (val) => {
        setValue(val);
        combobox.closeDropdown();
      }
    },
    /* @__PURE__ */ React.createElement(Combobox.Target, null, /* @__PURE__ */ React.createElement(
      InputBase,
      {
        component: "button",
        pointer: true,
        rightSection: /* @__PURE__ */ React.createElement(Combobox.Chevron, null),
        onClick: () => combobox.toggleDropdown()
      },
      value || /* @__PURE__ */ React.createElement(Input.Placeholder, null, "Pick value")
    )),
    /* @__PURE__ */ React.createElement(Combobox.Dropdown, null, /* @__PURE__ */ React.createElement(Combobox.Options, null, options))
  );
}
const select = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  defaultExpanded: false,
  code
};

export { select };
//# sourceMappingURL=Combobox.demo.select.js.map
