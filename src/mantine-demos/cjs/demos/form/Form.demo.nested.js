'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var form = require('@mantine/form');
var core = require('@mantine/core');

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
import { TextInput, Checkbox, Code, Text, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: {
      terms: false,
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="First name"
        placeholder="First name"
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accepts terms & conditions"
        mt="sm"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />

      <Text size="sm" fw={500} mt="xl">
        Form values:
      </Text>
      <Code block mt={5}>
        {JSON.stringify(form.values, null, 2)}
      </Code>
    </Box>
  );
}
`;
function Demo() {
  const form$1 = form.useForm({
    initialValues: {
      terms: false,
      user: {
        firstName: "",
        lastName: ""
      }
    }
  });
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    __spreadValues({
      label: "First name",
      placeholder: "First name"
    }, form$1.getInputProps("user.firstName"))
  ), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    __spreadValues({
      label: "Last name",
      placeholder: "Last name",
      mt: "md"
    }, form$1.getInputProps("user.lastName"))
  ), /* @__PURE__ */ React__default.createElement(
    core.Checkbox,
    __spreadValues({
      label: "I accepts terms & conditions",
      mt: "sm"
    }, form$1.getInputProps("terms", { type: "checkbox" }))
  ), /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", fw: 500, mt: "xl" }, "Form values:"), /* @__PURE__ */ React__default.createElement(core.Code, { block: true, mt: 5 }, JSON.stringify(form$1.values, null, 2)));
}
const nested = {
  type: "code",
  component: Demo,
  code
};

exports.nested = nested;
//# sourceMappingURL=Form.demo.nested.js.map
