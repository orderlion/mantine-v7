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
import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';

function Demo() {
  const form = useForm<{ name: string; age: number | undefined }>({
    initialValues: { name: '', age: undefined },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Too short name' : null,
      age:
        values.age === undefined
          ? 'Age is required'
          : values.age < 18
          ? 'You must be at least 18'
          : null,
    }),
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <NumberInput mt="sm" label="Age" placeholder="You age" {...form.getInputProps('age')} />

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
    initialValues: { name: "", age: void 0 },
    validate: (values) => ({
      name: values.name.length < 2 ? "Too short name" : null,
      age: values.age === void 0 ? "Age is required" : values.age < 18 ? "You must be at least 18" : null
    })
  });
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React__default.createElement("form", { onSubmit: form$1.onSubmit((values) => console.log(values)) }, /* @__PURE__ */ React__default.createElement(core.TextInput, __spreadValues({ label: "Name", placeholder: "Name" }, form$1.getInputProps("name"))), /* @__PURE__ */ React__default.createElement(core.NumberInput, __spreadValues({ mt: "sm", label: "Age", placeholder: "You age" }, form$1.getInputProps("age"))), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "flex-end", mt: "md" }, /* @__PURE__ */ React__default.createElement(core.Button, { type: "submit" }, "Submit"))));
}
const validateFunction = {
  type: "code",
  component: Demo,
  code
};

exports.validateFunction = validateFunction;
//# sourceMappingURL=Form.demo.validateFunction.js.map
