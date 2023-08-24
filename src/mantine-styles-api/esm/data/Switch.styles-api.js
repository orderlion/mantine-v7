import { InputWrapperStylesApi } from './Input.styles-api.js';

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
const SwitchStylesApi = {
  selectors: {
    root: "Root element",
    track: "Switch track, contains `thumb` and `trackLabel`",
    trackLabel: "Label displayed inside `track`",
    thumb: "Thumb displayed inside `track`",
    input: 'Input element (`input[type="checkbox"]`), hidden by default',
    body: "Input body, contains all other elements",
    labelWrapper: "Contains `label`, `description` and `error`",
    label: "Label element",
    description: "Description displayed below the label",
    error: "Error message displayed below the label"
  },
  vars: {
    root: {
      "--switch-radius": "Controls `border-radius` of `track` and `thumb`",
      "--switch-height": "Controls height of `track`",
      "--switch-width": "Controls min-width of `track`",
      "--switch-thumb-size": "Controls width and height of `thumb`",
      "--switch-label-font-size": "Controls `font-size` of `trackLabel`",
      "--switch-track-label-padding": "Controls `trackLabel` offset",
      "--switch-color": "Controls track `background-color` when input is checked"
    }
  },
  modifiers: [
    { modifier: "data-error", selector: "track", condition: "`error` prop is set" },
    {
      modifier: "data-label-position",
      selector: ["track", "root"],
      value: "value of `labelPosition` prop"
    },
    { modifier: "data-disabled", selector: "label", condition: "`disabled` prop is set" }
  ]
};
const SwitchGroupStylesApi = {
  selectors: __spreadValues({}, InputWrapperStylesApi.selectors),
  vars: {}
};

export { SwitchGroupStylesApi, SwitchStylesApi };
//# sourceMappingURL=Switch.styles-api.js.map
