import React from 'react';
import { useForm } from '@mantine/form';
import { Box, TextInput, NumberInput, Button } from '@mantine/core';

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
import { NumberInput, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    validateInputOnChange: true,
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
`;
function Demo() {
  const form = useForm({
    validateInputOnChange: true,
    initialValues: { name: "", email: "", age: 0 },
    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => /^\S+@\S+$/.test(value) ? null : "Invalid email",
      age: (value) => value < 18 ? "You must be at least 18 to register" : null
    }
  });
  return /* @__PURE__ */ React.createElement(Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React.createElement("form", { onSubmit: form.onSubmit(console.log) }, /* @__PURE__ */ React.createElement(TextInput, __spreadValues({ label: "Name", placeholder: "Name" }, form.getInputProps("name"))), /* @__PURE__ */ React.createElement(TextInput, __spreadValues({ mt: "sm", label: "Email", placeholder: "Email" }, form.getInputProps("email"))), /* @__PURE__ */ React.createElement(
    NumberInput,
    __spreadValues({
      mt: "sm",
      label: "Age",
      placeholder: "Age",
      min: 0,
      max: 99
    }, form.getInputProps("age"))
  ), /* @__PURE__ */ React.createElement(Button, { type: "submit", mt: "sm" }, "Submit")));
}
const liveValidation = {
  type: "code",
  component: Demo,
  code
};

export { liveValidation };
//# sourceMappingURL=Form.demo.liveValidation.js.map
