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
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Box } from '@mantine/core';

function Demo() {
  const form = useForm({ initialValues: { name: '', occupation: '' } });

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form');
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem('user-form')!));
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user-form', JSON.stringify(form.values));
  }, [form.values]);

  return (
    <Box maw={340} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput
        mt="md"
        label="Occupation"
        placeholder="Occupation"
        {...form.getInputProps('occupation')}
      />
    </Box>
  );
}
`;
function Demo() {
  const form$1 = form.useForm({ initialValues: { name: "", occupation: "" } });
  React.useEffect(() => {
    const storedValue = window.localStorage.getItem("user-form");
    if (storedValue) {
      try {
        form$1.setValues(JSON.parse(window.localStorage.getItem("user-form")));
      } catch (e) {
        console.log("Failed to parse stored value");
      }
    }
  }, []);
  React.useEffect(() => {
    window.localStorage.setItem("user-form", JSON.stringify(form$1.values));
  }, [form$1.values]);
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 340, mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.TextInput, __spreadValues({ label: "Name", placeholder: "Name" }, form$1.getInputProps("name"))), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    __spreadValues({
      mt: "md",
      label: "Occupation",
      placeholder: "Occupation"
    }, form$1.getInputProps("occupation"))
  ));
}
const localStorage = {
  type: "code",
  component: Demo,
  code
};

exports.localStorage = localStorage;
//# sourceMappingURL=Form.demo.localStorage.js.map
