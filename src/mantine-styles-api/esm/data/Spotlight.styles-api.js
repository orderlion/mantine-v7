import { ModalStylesApi } from './Modal.styles-api.js';

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
const SpotlightStylesApi = {
  selectors: __spreadProps(__spreadValues({}, ModalStylesApi.selectors), {
    search: "Search input (`Spotlight.Search`)",
    actionsList: "Actions list (`Spotlight.ActionsList`)",
    empty: "Empty state (`Spotlight.Empty`)",
    footer: "Footer (`Spotlight.Footer`)",
    action: "Action (`Spotlight.Action`)",
    actionBody: "Body of the action, contains label and description",
    actionLabel: "`Spotlight.Action` label",
    actionDescription: "`Spotlight.Action` description",
    actionSection: "`Spotlight.Action` left and right sections",
    actionsGroup: "`Spotlight.ActionsGroup` root element"
  }),
  vars: {},
  modifiers: [
    {
      modifier: "data-selected",
      selector: "action",
      condition: "Action is selected with up/down keys"
    },
    {
      modifier: "data-position",
      selector: "actionSection",
      value: "Section position: left or right"
    },
    {
      modifier: "data-dimmed",
      selector: "actionSection",
      condition: "`dimmedSections` prop is set on `Spotlight.Action` component"
    }
  ]
};

export { SpotlightStylesApi };
//# sourceMappingURL=Spotlight.styles-api.js.map
