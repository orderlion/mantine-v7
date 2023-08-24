import React from 'react';
import cx from 'clsx';
import { Button } from '@mantine/core';
import { meta } from '../meta.js';
import classes from './SocialButton.module.css.js';
import { DiscordIcon } from '../Icons/DiscordIcon.js';
import { TwitterIcon } from '../Icons/TwitterIcon.js';

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
  return /* @__PURE__ */ React.createElement(
    Button,
    __spreadValues({
      component: "a",
      target: "_blank",
      rel: "noopener noreferrer",
      leftSection: icon,
      radius: "md",
      classNames: {
        root: classes.socialButton,
        section: classes.socialButtonSection
      }
    }, others)
  );
}
function DiscordButton(_c) {
  var _d = _c, { className } = _d, others = __objRest(_d, ["className"]);
  return /* @__PURE__ */ React.createElement(
    SocialButton,
    __spreadValues({
      className: cx(classes.discordButton, className),
      icon: /* @__PURE__ */ React.createElement(DiscordIcon, { size: 16 }),
      href: meta.discordLink
    }, others),
    "Join Discord community"
  );
}
function TwitterButton(_e) {
  var _f = _e, { className } = _f, others = __objRest(_f, ["className"]);
  return /* @__PURE__ */ React.createElement(
    SocialButton,
    __spreadValues({
      className: cx(classes.twitterButton, className),
      icon: /* @__PURE__ */ React.createElement(TwitterIcon, { size: 16 }),
      href: meta.twitterLink
    }, others),
    "Follow Mantine on Twitter"
  );
}

export { DiscordButton, SocialButton, TwitterButton };
//# sourceMappingURL=SocialButton.js.map
