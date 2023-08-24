'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

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
        <Combobox.Options>
          <Combobox.Group label="Fruits">
            <Combobox.Option value="\u{1F34E} Apples">\u{1F34E} Apples</Combobox.Option>
            <Combobox.Option value="\u{1F34C} Bananas">\u{1F34C} Bananas</Combobox.Option>
            <Combobox.Option value="\u{1F347} Grape">\u{1F347} Grape</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Vegetables">
            <Combobox.Option value="\u{1F966} Broccoli">\u{1F966} Broccoli</Combobox.Option>
            <Combobox.Option value="\u{1F955} Carrots">\u{1F955} Carrots</Combobox.Option>
            <Combobox.Option value="\u{1F96C} Lettuce">\u{1F96C} Lettuce</Combobox.Option>
          </Combobox.Group>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`;
function Demo() {
  const combobox = core.useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption()
  });
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(
    core.Combobox,
    {
      store: combobox,
      onOptionSubmit: (val) => {
        setValue(val);
        combobox.closeDropdown();
      }
    },
    /* @__PURE__ */ React__default.createElement(core.Combobox.Target, null, /* @__PURE__ */ React__default.createElement(
      core.InputBase,
      {
        component: "button",
        pointer: true,
        rightSection: /* @__PURE__ */ React__default.createElement(core.Combobox.Chevron, null),
        onClick: () => combobox.toggleDropdown()
      },
      value || /* @__PURE__ */ React__default.createElement(core.Input.Placeholder, null, "Pick value")
    )),
    /* @__PURE__ */ React__default.createElement(core.Combobox.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Combobox.Options, null, /* @__PURE__ */ React__default.createElement(core.Combobox.Group, { label: "Fruits" }, /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "\u{1F34E} Apples" }, "\u{1F34E} Apples"), /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "\u{1F34C} Bananas" }, "\u{1F34C} Bananas"), /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "\u{1F347} Grape" }, "\u{1F347} Grape")), /* @__PURE__ */ React__default.createElement(core.Combobox.Group, { label: "Vegetables" }, /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "\u{1F966} Broccoli" }, "\u{1F966} Broccoli"), /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "\u{1F955} Carrots" }, "\u{1F955} Carrots"), /* @__PURE__ */ React__default.createElement(core.Combobox.Option, { value: "\u{1F96C} Lettuce" }, "\u{1F96C} Lettuce"))))
  );
}
const groups = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  defaultExpanded: false,
  code
};

exports.groups = groups;
//# sourceMappingURL=Combobox.demo.groups.js.map
