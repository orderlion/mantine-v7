import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { Box, TextInput, Button, Code } from '@mantine/core';

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
  const [submittedValues, setSubmittedValues] = useState("");
  const form = useForm({
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
  return /* @__PURE__ */ React.createElement(Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React.createElement(
    "form",
    {
      onSubmit: form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))
    },
    /* @__PURE__ */ React.createElement(
      TextInput,
      __spreadValues({
        label: "First name",
        placeholder: "First name"
      }, form.getInputProps("firstName"))
    ),
    /* @__PURE__ */ React.createElement(
      TextInput,
      __spreadValues({
        label: "Last name",
        placeholder: "Last name",
        mt: "md"
      }, form.getInputProps("lastName"))
    ),
    /* @__PURE__ */ React.createElement(
      TextInput,
      __spreadValues({
        type: "number",
        label: "Age",
        placeholder: "Age",
        mt: "md"
      }, form.getInputProps("age"))
    ),
    /* @__PURE__ */ React.createElement(Button, { type: "submit", mt: "md" }, "Submit")
  ), submittedValues && /* @__PURE__ */ React.createElement(Code, { block: true }, submittedValues));
}
const transformValues = {
  type: "code",
  component: Demo,
  code
};

export { transformValues };
//# sourceMappingURL=Form.demo.transformValues.js.map
