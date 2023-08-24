'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" data-autofocus />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
`;
function Demo() {
  const [active, { toggle }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: toggle }, active ? "Deactivate" : "Activate", " focus trap"), /* @__PURE__ */ React__default.createElement(core.FocusTrap, { active }, /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.TextInput, { mt: "sm", label: "First input", placeholder: "First input" }), /* @__PURE__ */ React__default.createElement(core.TextInput, { mt: "sm", label: "Second input", placeholder: "Second input", "data-autofocus": true }), /* @__PURE__ */ React__default.createElement(core.TextInput, { mt: "sm", label: "Third input", placeholder: "Third input" }))));
}
const initial = {
  type: "code",
  component: Demo,
  code
};

exports.initial = initial;
//# sourceMappingURL=FocusTrap.demo.initial.js.map
