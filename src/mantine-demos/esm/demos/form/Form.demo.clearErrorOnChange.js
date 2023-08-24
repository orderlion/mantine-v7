import React from 'react';
import { Box, TextInput, Checkbox, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

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
    clearInputErrorOnChange: false,
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
  const form = useForm({
    clearInputErrorOnChange: false,
    initialValues: {
      email: "",
      termsOfService: false
    },
    validate: {
      email: (value) => /^\S+@\S+$/.test(value) ? null : "Invalid email"
    }
  });
  return /* @__PURE__ */ React.createElement(Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React.createElement("form", { onSubmit: form.onSubmit((values) => console.log(values)) }, /* @__PURE__ */ React.createElement(
    TextInput,
    __spreadValues({
      withAsterisk: true,
      label: "Email",
      placeholder: "your@email.com"
    }, form.getInputProps("email"))
  ), /* @__PURE__ */ React.createElement(
    Checkbox,
    __spreadValues({
      mt: "md",
      label: "I agree to sell my privacy"
    }, form.getInputProps("termsOfService", { type: "checkbox" }))
  ), /* @__PURE__ */ React.createElement(Group, { justify: "flex-end", mt: "md" }, /* @__PURE__ */ React.createElement(Button, { type: "submit" }, "Submit"))));
}
const clearErrorOnChange = {
  type: "code",
  component: Demo,
  code
};

export { clearErrorOnChange };
//# sourceMappingURL=Form.demo.clearErrorOnChange.js.map
