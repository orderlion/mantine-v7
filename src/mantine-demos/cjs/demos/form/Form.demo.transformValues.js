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
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

function Demo() {
  const [submittedValues, setSubmittedValues] = useState('');

  const form = useForm({
    initialValues: {
      firstName: 'Jane',
      lastName: 'Doe',
      age: '33',
    },

    transformValues: (values) => ({
      fullName: \`\${values.firstName} \${values.lastName}\`,
      age: Number(values.age) || 0,
    }),
  });

  return (
    <Box maw={340} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
      >
        <TextInput
          label="First name"
          placeholder="First name"
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          mt="md"
          {...form.getInputProps('lastName')}
        />
        <TextInput
          type="number"
          label="Age"
          placeholder="Age"
          mt="md"
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
}
`;
function Demo() {
  const [submittedValues, setSubmittedValues] = React.useState("");
  const form$1 = form.useForm({
    initialValues: {
      firstName: "Jane",
      lastName: "Doe",
      age: "33"
    },
    transformValues: (values) => ({
      fullName: `${values.firstName} ${values.lastName}`,
      age: Number(values.age) || 0
    })
  });
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React__default.createElement(
    "form",
    {
      onSubmit: form$1.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))
    },
    /* @__PURE__ */ React__default.createElement(
      core.TextInput,
      __spreadValues({
        label: "First name",
        placeholder: "First name"
      }, form$1.getInputProps("firstName"))
    ),
    /* @__PURE__ */ React__default.createElement(
      core.TextInput,
      __spreadValues({
        label: "Last name",
        placeholder: "Last name",
        mt: "md"
      }, form$1.getInputProps("lastName"))
    ),
    /* @__PURE__ */ React__default.createElement(
      core.TextInput,
      __spreadValues({
        type: "number",
        label: "Age",
        placeholder: "Age",
        mt: "md"
      }, form$1.getInputProps("age"))
    ),
    /* @__PURE__ */ React__default.createElement(core.Button, { type: "submit", mt: "md" }, "Submit")
  ), submittedValues && /* @__PURE__ */ React__default.createElement(core.Code, { block: true }, submittedValues));
}
const transformValues = {
  type: "code",
  component: Demo,
  code
};

exports.transformValues = transformValues;
//# sourceMappingURL=Form.demo.transformValues.js.map
