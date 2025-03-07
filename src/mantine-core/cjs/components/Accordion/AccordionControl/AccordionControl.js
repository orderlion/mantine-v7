'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Accordion_context = require('../Accordion.context.js');
var AccordionItem_context = require('../AccordionItem.context.js');
var Accordion_module = require('../Accordion.module.css.js');
var UnstyledButton = require('../../UnstyledButton/UnstyledButton.js');
var createScopedKeydownHandler = require('../../../core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var Box = require('../../../core/Box/Box.js');

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
const defaultProps = {};
const AccordionControl = factory.factory((props, ref) => {
  const _a = useProps.useProps("AccordionControl", defaultProps, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    chevron,
    icon,
    onClick,
    onKeyDown,
    children,
    disabled
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "chevron",
    "icon",
    "onClick",
    "onKeyDown",
    "children",
    "disabled"
  ]);
  const { value } = AccordionItem_context.useAccordionItemContext();
  const ctx = Accordion_context.useAccordionContext();
  const isActive = ctx.isItemActive(value);
  const shouldWrapWithHeading = typeof ctx.order === "number";
  const Heading = `h${ctx.order}`;
  const content = /* @__PURE__ */ React__default.createElement(
    UnstyledButton.UnstyledButton,
    __spreadProps(__spreadValues(__spreadValues({}, others), ctx.getStyles("control", { className, classNames, style, styles, variant: ctx.variant })), {
      mod: [
        "accordion-control",
        { active: isActive, "chevron-position": ctx.chevronPosition, disabled }
      ],
      ref,
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        ctx.onChange(value);
      },
      type: "button",
      disabled,
      "aria-expanded": isActive,
      "aria-controls": ctx.getRegionId(value),
      id: ctx.getControlId(value),
      onKeyDown: createScopedKeydownHandler.createScopedKeydownHandler({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: false,
        loop: ctx.loop,
        orientation: "vertical",
        onKeyDown
      })
    }),
    /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadValues({
        component: "span",
        mod: { rotate: !ctx.disableChevronRotation && isActive, position: ctx.chevronPosition }
      }, ctx.getStyles("chevron", { classNames, styles })),
      chevron || ctx.chevron
    ),
    /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, ctx.getStyles("label", { classNames, styles })), children),
    icon && /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadValues({
        component: "span",
        mod: { "chevron-position": ctx.chevronPosition }
      }, ctx.getStyles("icon", { classNames, styles })),
      icon
    )
  );
  return shouldWrapWithHeading ? /* @__PURE__ */ React__default.createElement(Heading, __spreadValues({}, ctx.getStyles("itemTitle", { classNames, styles })), content) : content;
});
AccordionControl.displayName = "@mantine/core/AccordionControl";
AccordionControl.classes = Accordion_module['default'];

exports.AccordionControl = AccordionControl;
//# sourceMappingURL=AccordionControl.js.map
