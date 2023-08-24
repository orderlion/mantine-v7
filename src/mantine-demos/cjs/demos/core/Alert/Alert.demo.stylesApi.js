'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var stylesApi$1 = require('@mantine/styles-api');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

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
import { Alert } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  const icon = <IconHeart />;

  return (
    <Alert title="Alert title" icon={icon} withCloseButton{{props}}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis
      cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates
      nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.
    </Alert>
  );
}
`;
function Demo(props) {
  return /* @__PURE__ */ React__default.createElement(core.Alert, __spreadValues({ title: "Alert title", icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, null), withCloseButton: true }, props), "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.");
}
const stylesApi = {
  type: "styles-api",
  data: stylesApi$1.AlertStylesApi,
  component: Demo,
  centered: true,
  maxWidth: 440,
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Alert.demo.stylesApi.js.map
