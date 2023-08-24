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
      name: hasLength({ min: 2, max: 10 }),
      job: isNotEmpty(),
      email: isEmail(),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/),
      age: isInRange({ min: 18, max: 99 }),
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
  const form$1 = form.useForm({
    initialValues: {
      name: "",
      job: "",
      email: "",
      favoriteColor: "",
      age: 18
    },
    validate: {
      name: form.hasLength({ min: 2, max: 10 }),
      job: form.isNotEmpty(),
      email: form.isEmail(),
      favoriteColor: form.matches(/^#([0-9a-f]{3}){1,2}$/),
      age: form.isInRange({ min: 18, max: 99 })
    }
  });
  return /* @__PURE__ */ React__default.createElement(core.Box, { component: "form", maw: 400, mx: "auto", onSubmit: form$1.onSubmit(() => {
  }) }, /* @__PURE__ */ React__default.createElement(core.TextInput, __spreadValues({ label: "Name", placeholder: "Name", withAsterisk: true }, form$1.getInputProps("name"))), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    __spreadValues({
      label: "Your job",
      placeholder: "Your job",
      withAsterisk: true,
      mt: "md"
    }, form$1.getInputProps("job"))
  ), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    __spreadValues({
      label: "Your email",
      placeholder: "Your email",
      withAsterisk: true,
      mt: "md"
    }, form$1.getInputProps("email"))
  ), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    __spreadValues({
      label: "Your favorite color",
      placeholder: "Your favorite color",
      withAsterisk: true,
      mt: "md"
    }, form$1.getInputProps("favoriteColor"))
  ), /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    __spreadValues({
      label: "Your age",
      placeholder: "Your age",
      withAsterisk: true,
      mt: "md"
    }, form$1.getInputProps("age"))
  ), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "flex-end", mt: "md" }, /* @__PURE__ */ React__default.createElement(core.Button, { type: "submit" }, "Submit")));
}
const validatorsEmpty = {
  type: "code",
  component: Demo,
  code
};

exports.validatorsEmpty = validatorsEmpty;
//# sourceMappingURL=Form.demo.validatorsEmpty.js.map
