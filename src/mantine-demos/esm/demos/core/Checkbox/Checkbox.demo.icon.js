import React from 'react';
import { IconRadioactive, IconBiohazard } from '@tabler/icons-react';
import { Checkbox } from '@mantine/core';

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const code = `
import { Checkbox, CheckboxProps } from '@mantine/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconRadioactive {...others} /> : <IconBiohazard {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`;
const CheckboxIcon = (_a) => {
  var _b = _a, { indeterminate } = _b, others = __objRest(_b, ["indeterminate"]);
  return indeterminate ? /* @__PURE__ */ React.createElement(IconRadioactive, __spreadValues({}, others)) : /* @__PURE__ */ React.createElement(IconBiohazard, __spreadValues({}, others));
};
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Checkbox, { icon: CheckboxIcon, label: "Custom icon", defaultChecked: true }), /* @__PURE__ */ React.createElement(Checkbox, { icon: CheckboxIcon, label: "Custom icon: indeterminate", indeterminate: true, mt: "sm" }));
}
const icon = {
  type: "code",
  component: Demo,
  code
};

export { icon };
//# sourceMappingURL=Checkbox.demo.icon.js.map
