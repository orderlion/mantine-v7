'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var stylesApi$1 = require('@mantine/styles-api');
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
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
`;
function Demo(props) {
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.Notification, __spreadValues({ title: "Please wait", loading: true, withCloseButton: false }, props), "The application is trying to reconnect to the server"), /* @__PURE__ */ React__default.createElement(
    core.Notification,
    __spreadValues({
      mt: "md",
      icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, { size: "1.2rem" }),
      title: "We notify you that"
    }, props),
    "You are now obligated to give a star to Mantine project on GitHub"
  ));
}
const stylesApi = {
  type: "styles-api",
  data: stylesApi$1.NotificationStylesApi,
  centered: true,
  dimmed: true,
  component: Demo,
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Notification.demo.stylesApi.js.map
