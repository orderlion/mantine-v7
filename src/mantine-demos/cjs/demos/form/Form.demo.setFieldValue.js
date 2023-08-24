'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var form = require('@mantine/form');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const code = `
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group justify="center" mt="xl">
        <Button variant="outline" onClick={() => form.setFieldValue('name', randomId())}>
          Random name
        </Button>
        <Button
          variant="outline"
          onClick={() => form.setFieldValue('email', \`\${randomId()}@test.com\`)}
        >
          Random email
        </Button>
      </Group>
    </Box>
  );
}
`;
function Demo() {
  const form$1 = form.useForm({
    initialValues: {
      name: "",
      email: ""
    }
  });
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.TextInput, __spreadValues({ label: "Name", placeholder: "Name" }, form$1.getInputProps("name"))), /* @__PURE__ */ React__default.createElement(core.TextInput, __spreadValues({ mt: "md", label: "Email", placeholder: "Email" }, form$1.getInputProps("email"))), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center", mt: "xl" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", onClick: () => form$1.setFieldValue("name", hooks.randomId()) }, "Random name"), /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      variant: "outline",
      onClick: () => form$1.setFieldValue("email", `${hooks.randomId()}@test.com`)
    },
    "Random email"
  )));
}
const setFieldValue = {
  type: "code",
  component: Demo,
  code
};

exports.setFieldValue = setFieldValue;
//# sourceMappingURL=Form.demo.setFieldValue.js.map
