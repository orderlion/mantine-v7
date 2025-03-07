'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var AccordionChevron = require('./AccordionChevron.js');
var AccordionItem = require('./AccordionItem/AccordionItem.js');
var AccordionPanel = require('./AccordionPanel/AccordionPanel.js');
var AccordionControl = require('./AccordionControl/AccordionControl.js');
var Accordion_module = require('./Accordion.module.css.js');
var Accordion_context = require('./Accordion.context.js');
var getSafeId = require('../../core/utils/get-safe-id/get-safe-id.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var rem = require('../../core/utils/units-converters/rem.js');
var getSize = require('../../core/utils/get-size/get-size.js');

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
const defaultProps = {
  multiple: false,
  disableChevronRotation: false,
  transitionDuration: 200,
  chevronPosition: "right",
  variant: "default",
  chevronSize: 15,
  chevron: /* @__PURE__ */ React__default.createElement(AccordionChevron.AccordionChevron, null)
};
const varsResolver = createVarsResolver.createVarsResolver(
  (_, { transitionDuration, chevronSize, radius }) => ({
    root: {
      "--accordion-transition-duration": `${transitionDuration}ms`,
      "--accordion-chevron-size": rem.rem(chevronSize),
      "--accordion-radius": getSize.getRadius(radius)
    }
  })
);
function Accordion(_props) {
  const props = useProps.useProps("Accordion", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    multiple,
    value,
    defaultValue,
    onChange,
    id,
    loop,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    variant,
    radius
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "multiple",
    "value",
    "defaultValue",
    "onChange",
    "id",
    "loop",
    "transitionDuration",
    "disableChevronRotation",
    "chevronPosition",
    "chevronSize",
    "order",
    "chevron",
    "variant",
    "radius"
  ]);
  const uid = hooks.useId(id);
  const [_value, handleChange] = hooks.useUncontrolled({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange
  });
  const isItemActive = (itemValue) => Array.isArray(_value) ? _value.includes(itemValue) : itemValue === _value;
  const handleItemChange = (itemValue) => {
    const nextValue = Array.isArray(_value) ? _value.includes(itemValue) ? _value.filter((selectedValue) => selectedValue !== itemValue) : [..._value, itemValue] : itemValue === _value ? null : itemValue;
    handleChange(nextValue);
  };
  const getStyles = useStyles.useStyles({
    name: "Accordion",
    classes: Accordion_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(
    Accordion_context.AccordionProvider,
    {
      value: {
        isItemActive,
        onChange: handleItemChange,
        getControlId: getSafeId.getSafeId(
          `${uid}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: getSafeId.getSafeId(
          `${uid}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration,
        disableChevronRotation,
        chevronPosition,
        order,
        chevron,
        loop,
        getStyles,
        variant
      }
    },
    /* @__PURE__ */ React__default.createElement(Box.Box, __spreadProps(__spreadValues(__spreadValues({}, getStyles("root")), others), { variant, "data-accordion": true }), children)
  );
}
const extendAccordion = (c) => c;
Accordion.extend = extendAccordion;
Accordion.classes = Accordion_module['default'];
Accordion.displayName = "@mantine/core/Accordion";
Accordion.Item = AccordionItem.AccordionItem;
Accordion.Panel = AccordionPanel.AccordionPanel;
Accordion.Control = AccordionControl.AccordionControl;
Accordion.Chevron = AccordionChevron.AccordionChevron;

exports.Accordion = Accordion;
//# sourceMappingURL=Accordion.js.map
