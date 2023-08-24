import React from 'react';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
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
const schema = z.object({
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  email: z.string().email({ message: "Invalid email" }),
  age: z.number().min(18, { message: "You must be at least 18 to create an account" })
});
function SchemaBase() {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: "",
      email: "",
      age: 18
    }
  });
  return /* @__PURE__ */ React.createElement(Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React.createElement("form", { onSubmit: form.onSubmit((values) => console.log(values)) }, /* @__PURE__ */ React.createElement(
    TextInput,
    __spreadValues({
      withAsterisk: true,
      label: "Email",
      placeholder: "example@mail.com"
    }, form.getInputProps("email"))
  ), /* @__PURE__ */ React.createElement(
    TextInput,
    __spreadValues({
      withAsterisk: true,
      label: "Name",
      placeholder: "John Doe",
      mt: "sm"
    }, form.getInputProps("name"))
  ), /* @__PURE__ */ React.createElement(
    NumberInput,
    __spreadValues({
      withAsterisk: true,
      label: "Age",
      placeholder: "Your age",
      mt: "sm"
    }, form.getInputProps("age"))
  ), /* @__PURE__ */ React.createElement(Group, { justify: "flex-end", mt: "xl" }, /* @__PURE__ */ React.createElement(Button, { type: "submit" }, "Submit"))));
}

export { SchemaBase };
//# sourceMappingURL=_schema-base.js.map
