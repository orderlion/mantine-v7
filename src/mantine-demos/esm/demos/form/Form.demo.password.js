import React from 'react';
import { Box, PasswordInput, Group, Button } from '@mantine/core';
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
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: {
      password: 'secret',
      confirmPassword: 'sevret',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
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
    initialValues: {
      password: "secret",
      confirmPassword: "sevret"
    },
    validate: {
      confirmPassword: (value, values) => value !== values.password ? "Passwords did not match" : null
    }
  });
  return /* @__PURE__ */ React.createElement(Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React.createElement("form", { onSubmit: form.onSubmit((values) => console.log(values)) }, /* @__PURE__ */ React.createElement(
    PasswordInput,
    __spreadValues({
      label: "Password",
      placeholder: "Password"
    }, form.getInputProps("password"))
  ), /* @__PURE__ */ React.createElement(
    PasswordInput,
    __spreadValues({
      mt: "sm",
      label: "Confirm password",
      placeholder: "Confirm password"
    }, form.getInputProps("confirmPassword"))
  ), /* @__PURE__ */ React.createElement(Group, { justify: "flex-end", mt: "md" }, /* @__PURE__ */ React.createElement(Button, { type: "submit" }, "Submit"))));
}
const password = {
  type: "code",
  component: Demo,
  code
};

export { password };
//# sourceMappingURL=Form.demo.password.js.map
