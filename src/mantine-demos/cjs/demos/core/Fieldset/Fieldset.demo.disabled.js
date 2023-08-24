'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Fieldset, TextInput, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information" disabled>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />

      <Group justify="flex-end" mt="md">
        <Button>Submit</Button>
      </Group>
    </Fieldset>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Fieldset, { legend: "Personal information", disabled: true }, /* @__PURE__ */ React__default.createElement(core.TextInput, { label: "Your name", placeholder: "Your name" }), /* @__PURE__ */ React__default.createElement(core.TextInput, { label: "Email", placeholder: "Email", mt: "md" }), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "flex-end", mt: "md" }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Submit")));
}
const disabled = {
  type: "code",
  component: Demo,
  maxWidth: 500,
  centered: true,
  code
};

exports.disabled = disabled;
//# sourceMappingURL=Fieldset.demo.disabled.js.map
