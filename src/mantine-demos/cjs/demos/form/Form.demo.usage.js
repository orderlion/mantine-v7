'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var form = require('@mantine/form');

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
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`;
function Demo() {
  const form$1 = form.useForm({
    initialValues: {
      email: "",
      termsOfService: false
    },
    validateInputOnBlur: ["email"],
    validate: {
      email: (value) => /^\S+@\S+$/.test(value) ? null : "Invalid email"
    }
  });
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React__default.createElement("form", { onSubmit: form$1.onSubmit((values) => console.log(values)) }, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    __spreadValues({
      withAsterisk: true,
      label: "Email",
      placeholder: "your@email.com"
    }, form$1.getInputProps("email"))
  ), /* @__PURE__ */ React__default.createElement(
    core.Checkbox,
    __spreadValues({
      mt: "md",
      label: "I agree to sell my privacy"
    }, form$1.getInputProps("termsOfService", { type: "checkbox" }))
  ), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "flex-end", mt: "md" }, /* @__PURE__ */ React__default.createElement(core.Button, { type: "submit" }, "Submit"))));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=Form.demo.usage.js.map
