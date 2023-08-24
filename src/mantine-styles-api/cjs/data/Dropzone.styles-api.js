'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
const DropzoneStylesApi = {
  selectors: {
    root: "Dropzone root element",
    inner: "Dropzone inner element (wraps children)"
  },
  vars: {
    root: {
      "--dropzone-accept-bg": "Controls `background-color` when file is accepted",
      "--dropzone-reject-bg": "Controls `background-color` when file is rejected",
      "--dropzone-accept-color": "Controls `color` when file is accepted",
      "--dropzone-reject-color": "Controls `color` when file is rejected",
      "--dropzone-radius": "Controls `border-radius`"
    }
  },
  modifiers: [
    {
      modifier: "data-accept",
      selector: "root",
      condition: "Files that are dragged over the dropzone are accepted"
    },
    {
      modifier: "data-reject",
      selector: "root",
      condition: "Files that are dragged over the dropzone are rejected"
    },
    { modifier: "data-idle", selector: "root", condition: "Dropzone is idle" },
    { modifier: "data-loading", selector: "root", condition: "`loading` prop is set" },
    {
      modifier: "data-activate-on-click",
      selector: "root",
      condition: "`activateOnClick` prop is `true`"
    }
  ]
};
const DropzoneFullScreenStylesApi = {
  selectors: __spreadValues({
    fullScreen: "Dropzone.Fullscreen root element"
  }, DropzoneStylesApi.selectors),
  vars: {}
};

exports.DropzoneFullScreenStylesApi = DropzoneFullScreenStylesApi;
exports.DropzoneStylesApi = DropzoneStylesApi;
//# sourceMappingURL=Dropzone.styles-api.js.map
