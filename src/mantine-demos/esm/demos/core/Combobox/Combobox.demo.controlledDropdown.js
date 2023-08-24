import React, { useState } from 'react';
import { useCombobox, Combobox, Button, TextInput } from '@mantine/core';

const code = `
import { useState } from 'react';
import { TextInput, Button, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [opened, setOpened] = useState(false);
  const combobox = useCombobox({ opened });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Button mb="md" onClick={() => setOpened((o) => !o)}>
        Toggle dropdown
      </Button>

      <Combobox store={combobox}>
        <Combobox.Target>
          <TextInput
            label="Autocomplete"
            description="Dropdown is opened/closed when button is clicked"
            placeholder="Click button to toggle dropdown"
          />
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
  const [opened, setOpened] = useState(false);
  const combobox = useCombobox({ opened });
  const options = groceries.map((item) => /* @__PURE__ */ React.createElement(Combobox.Option, { value: item, key: item }, item));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { mb: "md", onClick: () => setOpened((o) => !o) }, "Toggle dropdown"), /* @__PURE__ */ React.createElement(Combobox, { store: combobox }, /* @__PURE__ */ React.createElement(Combobox.Target, null, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      label: "Autocomplete",
      description: "Dropdown is opened/closed when button is clicked",
      placeholder: "Click button to toggle dropdown"
    }
  )), /* @__PURE__ */ React.createElement(Combobox.Dropdown, null, /* @__PURE__ */ React.createElement(Combobox.Options, null, options))));
}
const controlledDropdown = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
  defaultExpanded: false
};

export { controlledDropdown };
//# sourceMappingURL=Combobox.demo.controlledDropdown.js.map
