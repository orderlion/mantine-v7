import React from 'react';
import { useForm, hasLength, isNotEmpty, isEmail, matches, isInRange } from '@mantine/form';
import { Box, TextInput, NumberInput, Group, Button } from '@mantine/core';

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
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
    },
  });

  return (
    <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {})}>
      <TextInput label="Name" placeholder="Name" withAsterisk {...form.getInputProps('name')} />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        {...form.getInputProps('age')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
}
`;
function Demo() {
  const form = useForm({
    initialValues: {
      name: "",
      job: "",
      email: "",
      favoriteColor: "",
      age: 18
    },
    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-22 characters long"),
      job: isNotEmpty("Enter your current job"),
      email: isEmail("Invalid email"),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, "Enter a valid hex color"),
      age: isInRange({ min: 18, max: 99 }, "You must be 18-99 years old to register")
    }
  });
  return /* @__PURE__ */ React.createElement(Box, { component: "form", maw: 400, mx: "auto", onSubmit: form.onSubmit(() => {
  }) }, /* @__PURE__ */ React.createElement(TextInput, __spreadValues({ label: "Name", placeholder: "Name", withAsterisk: true }, form.getInputProps("name"))), /* @__PURE__ */ React.createElement(
    TextInput,
    __spreadValues({
      label: "Your job",
      placeholder: "Your job",
      withAsterisk: true,
      mt: "md"
    }, form.getInputProps("job"))
  ), /* @__PURE__ */ React.createElement(
    TextInput,
    __spreadValues({
      label: "Your email",
      placeholder: "Your email",
      withAsterisk: true,
      mt: "md"
    }, form.getInputProps("email"))
  ), /* @__PURE__ */ React.createElement(
    TextInput,
    __spreadValues({
      label: "Your favorite color",
      placeholder: "Your favorite color",
      withAsterisk: true,
      mt: "md"
    }, form.getInputProps("favoriteColor"))
  ), /* @__PURE__ */ React.createElement(
    NumberInput,
    __spreadValues({
      label: "Your age",
      placeholder: "Your age",
      withAsterisk: true,
      mt: "md"
    }, form.getInputProps("age"))
  ), /* @__PURE__ */ React.createElement(Group, { justify: "flex-end", mt: "md" }, /* @__PURE__ */ React.createElement(Button, { type: "submit" }, "Submit")));
}
const validators = {
  type: "code",
  component: Demo,
  code
};

export { validators };
//# sourceMappingURL=Form.demo.validators.js.map
