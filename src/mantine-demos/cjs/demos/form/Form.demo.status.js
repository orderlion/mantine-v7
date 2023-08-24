'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var form = require('@mantine/form');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const code = `
import { useForm } from '@mantine/form';
import { TextInput, Text, Box } from '@mantine/core';

function Demo() {
  const form = useForm({ initialValues: { text: 'initial value' } });

  return (
    <Box maw={400} mx="auto">
      <TextInput
        {...form.getInputProps('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Text size="sm" mt="sm">
        Touched:{' '}
        <Text span c={form.isTouched('text') ? 'blue' : 'red'}>
          {form.isTouched('text') ? 'touched' : 'not touched'}
        </Text>
      </Text>

      <Text size="sm">
        Dirty:{' '}
        <Text span c={form.isDirty('text') ? 'blue' : 'red'}>
          {form.isDirty('text') ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
    </Box>
  );
}
`;
function Demo() {
  const form$1 = form.useForm({ initialValues: { text: "initial value" } });
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    __spreadProps(__spreadValues({}, form$1.getInputProps("text")), {
      label: "Touched/dirty demo",
      placeholder: "Touched/dirty demo"
    })
  ), /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", mt: "sm" }, "Touched:", " ", /* @__PURE__ */ React__default.createElement(core.Text, { span: true, c: form$1.isTouched("text") ? "blue" : "red" }, form$1.isTouched("text") ? "touched" : "not touched")), /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, "Dirty:", " ", /* @__PURE__ */ React__default.createElement(core.Text, { span: true, c: form$1.isDirty("text") ? "blue" : "red" }, form$1.isDirty("text") ? "dirty" : "not dirty")));
}
const status = {
  type: "code",
  component: Demo,
  code
};

exports.status = status;
//# sourceMappingURL=Form.demo.status.js.map
