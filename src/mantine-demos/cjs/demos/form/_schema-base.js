'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var zod = require('zod');
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
const schema = zod.z.object({
  name: zod.z.string().min(2, { message: "Name should have at least 2 letters" }),
  email: zod.z.string().email({ message: "Invalid email" }),
  age: zod.z.number().min(18, { message: "You must be at least 18 to create an account" })
});
function SchemaBase() {
  const form$1 = form.useForm({
    validate: form.zodResolver(schema),
    initialValues: {
      name: "",
      email: "",
      age: 18
    }
  });
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React__default.createElement("form", { onSubmit: form$1.onSubmit((values) => console.log(values)) }, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    __spreadValues({
      withAsterisk: true,
      label: "Email",
      placeholder: "example@mail.com"
    }, form$1.getInputProps("email"))
  ), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    __spreadValues({
      withAsterisk: true,
      label: "Name",
      placeholder: "John Doe",
      mt: "sm"
    }, form$1.getInputProps("name"))
  ), /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    __spreadValues({
      withAsterisk: true,
      label: "Age",
      placeholder: "Your age",
      mt: "sm"
    }, form$1.getInputProps("age"))
  ), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "flex-end", mt: "xl" }, /* @__PURE__ */ React__default.createElement(core.Button, { type: "submit" }, "Submit"))));
}

exports.SchemaBase = SchemaBase;
//# sourceMappingURL=_schema-base.js.map
