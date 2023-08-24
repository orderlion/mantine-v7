import React, { useState } from 'react';
import { Combobox, TextInput } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Combobox, TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <Combobox onOptionSubmit={setValue}>
      <Combobox.EventsTarget>
        <TextInput
          placeholder="Pick value"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </Combobox.EventsTarget>

      <Combobox.Options mt="sm">
        <Combobox.Option value="First">First</Combobox.Option>
        <Combobox.Option value="Second">Second</Combobox.Option>
        <Combobox.Option value="Third">Third</Combobox.Option>
      </Combobox.Options>
    </Combobox>
  );
}
`;
function Demo() {
  const [value, setValue] = useState("");
  return /* @__PURE__ */ React.createElement(Combobox, { onOptionSubmit: setValue }, /* @__PURE__ */ React.createElement(Combobox.EventsTarget, null, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      placeholder: "Pick value",
      value,
      onChange: (event) => setValue(event.currentTarget.value)
    }
  )), /* @__PURE__ */ React.createElement(Combobox.Options, { mt: "sm" }, /* @__PURE__ */ React.createElement(Combobox.Option, { value: "First" }, "First"), /* @__PURE__ */ React.createElement(Combobox.Option, { value: "Second" }, "Second"), /* @__PURE__ */ React.createElement(Combobox.Option, { value: "Third" }, "Third")));
}
const noDropdown = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
  defaultExpanded: false
};

export { noDropdown };
//# sourceMappingURL=Combobox.demo.noDropdown.js.map
