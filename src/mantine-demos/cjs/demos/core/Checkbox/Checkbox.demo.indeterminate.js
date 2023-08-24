'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
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
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
`;
const initialValues = [
  { label: "Receive email notifications", checked: false, key: hooks.randomId() },
  { label: "Receive sms notifications", checked: false, key: hooks.randomId() },
  { label: "Receive push notifications", checked: false, key: hooks.randomId() }
];
function Demo() {
  const [values, handlers] = hooks.useListState(initialValues);
  const allChecked = values.every((value) => value.checked);
  const indeterminate2 = values.some((value) => value.checked) && !allChecked;
  const items = values.map((value, index) => /* @__PURE__ */ React__default.createElement(
    core.Checkbox,
    {
      mt: "xs",
      ml: 33,
      label: value.label,
      key: value.key,
      checked: value.checked,
      onChange: (event) => handlers.setItemProp(index, "checked", event.currentTarget.checked)
    }
  ));
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React__default.createElement(
    core.Checkbox,
    {
      checked: allChecked,
      indeterminate: indeterminate2,
      label: "Receive all notifications",
      onChange: () => handlers.setState(
        (current) => current.map((value) => __spreadProps(__spreadValues({}, value), { checked: !allChecked }))
      )
    }
  ), items);
}
const indeterminate = {
  type: "code",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.indeterminate = indeterminate;
//# sourceMappingURL=Checkbox.demo.indeterminate.js.map
