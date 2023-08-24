'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var core = require('@mantine/core');
var meta = require('../meta.js');
var SocialButton_module = require('./SocialButton.module.css.js');
var DiscordIcon = require('../Icons/DiscordIcon.js');
var TwitterIcon = require('../Icons/TwitterIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
function SocialButton(_a) {
  var _b = _a, { icon } = _b, others = __objRest(_b, ["icon"]);
  return /* @__PURE__ */ React__default.createElement(
    core.Button,
    __spreadValues({
      component: "a",
      target: "_blank",
      rel: "noopener noreferrer",
      leftSection: icon,
      radius: "md",
      classNames: {
        root: SocialButton_module['default'].socialButton,
        section: SocialButton_module['default'].socialButtonSection
      }
    }, others)
  );
}
function DiscordButton(_c) {
  var _d = _c, { className } = _d, others = __objRest(_d, ["className"]);
  return /* @__PURE__ */ React__default.createElement(
    SocialButton,
    __spreadValues({
      className: cx__default(SocialButton_module['default'].discordButton, className),
      icon: /* @__PURE__ */ React__default.createElement(DiscordIcon.DiscordIcon, { size: 16 }),
      href: meta.meta.discordLink
    }, others),
    "Join Discord community"
  );
}
function TwitterButton(_e) {
  var _f = _e, { className } = _f, others = __objRest(_f, ["className"]);
  return /* @__PURE__ */ React__default.createElement(
    SocialButton,
    __spreadValues({
      className: cx__default(SocialButton_module['default'].twitterButton, className),
      icon: /* @__PURE__ */ React__default.createElement(TwitterIcon.TwitterIcon, { size: 16 }),
      href: meta.meta.twitterLink
    }, others),
    "Follow Mantine on Twitter"
  );
}

exports.DiscordButton = DiscordButton;
exports.SocialButton = SocialButton;
exports.TwitterButton = TwitterButton;
//# sourceMappingURL=SocialButton.js.map
