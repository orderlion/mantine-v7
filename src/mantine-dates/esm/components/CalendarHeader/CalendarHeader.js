import React from 'react';
import { createVarsResolver, getSize, getFontSize, factory, useProps, useStyles, Box, UnstyledButton, AccordionChevron } from '@mantine/core';
import classes from './CalendarHeader.module.css.js';

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
  nextDisabled: false,
  previousDisabled: false,
  hasNextLevel: true,
  withNext: true,
  withPrevious: true,
  size: "sm"
};
const varsResolver = createVarsResolver((_, { size }) => ({
  calendarHeader: {
    "--dch-control-size": getSize(size, "dch-control-size"),
    "--dch-fz": getFontSize(size)
  }
}));
const CalendarHeader = factory((_props, ref) => {
  const props = useProps("CalendarHeader", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    label,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    __staticSelector,
    __preventFocus,
    __stopPropagation
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "nextIcon",
    "previousIcon",
    "nextLabel",
    "previousLabel",
    "onNext",
    "onPrevious",
    "onLevelClick",
    "label",
    "nextDisabled",
    "previousDisabled",
    "hasNextLevel",
    "levelControlAriaLabel",
    "withNext",
    "withPrevious",
    "__staticSelector",
    "__preventFocus",
    "__stopPropagation"
  ]);
  const getStyles = useStyles({
    name: __staticSelector || "CalendarHeader",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "calendarHeader"
  });
  const preventFocus = __preventFocus ? (event) => event.preventDefault() : void 0;
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("calendarHeader")), { ref }), others), withPrevious && /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("calendarHeaderControl")), {
      "data-direction": "previous",
      "aria-label": previousLabel,
      onClick: onPrevious,
      unstyled,
      onMouseDown: preventFocus,
      disabled: previousDisabled,
      "data-disabled": previousDisabled || void 0,
      tabIndex: __preventFocus ? -1 : 0,
      "data-mantine-stop-propagation": __stopPropagation || void 0
    }),
    previousIcon || /* @__PURE__ */ React.createElement(
      AccordionChevron,
      __spreadProps(__spreadValues({}, getStyles("calendarHeaderControlIcon")), {
        "data-direction": "previous",
        size: "45%"
      })
    )
  ), /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({
      component: hasNextLevel ? "button" : "div"
    }, getStyles("calendarHeaderLevel")), {
      onClick: hasNextLevel ? onLevelClick : void 0,
      unstyled,
      onMouseDown: hasNextLevel ? preventFocus : void 0,
      disabled: !hasNextLevel,
      "data-static": !hasNextLevel || void 0,
      "aria-label": levelControlAriaLabel,
      tabIndex: __preventFocus || !hasNextLevel ? -1 : 0,
      "data-mantine-stop-propagation": __stopPropagation || void 0
    }),
    label
  ), withNext && /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("calendarHeaderControl")), {
      "data-direction": "next",
      "aria-label": nextLabel,
      onClick: onNext,
      unstyled,
      onMouseDown: preventFocus,
      disabled: nextDisabled,
      "data-disabled": nextDisabled || void 0,
      tabIndex: __preventFocus ? -1 : 0,
      "data-mantine-stop-propagation": __stopPropagation || void 0
    }),
    nextIcon || /* @__PURE__ */ React.createElement(
      AccordionChevron,
      __spreadProps(__spreadValues({}, getStyles("calendarHeaderControlIcon")), {
        "data-direction": "next",
        size: "45%"
      })
    )
  ));
});
CalendarHeader.classes = classes;
CalendarHeader.displayName = "@mantine/dates/CalendarHeader";

export { CalendarHeader };
//# sourceMappingURL=CalendarHeader.js.map
