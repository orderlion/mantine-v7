import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import classes from './NavLink.module.css.js';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton.js';
import { AccordionChevron } from '../Accordion/AccordionChevron.js';
import { Collapse } from '../Collapse/Collapse.js';
import { polymorphicFactory } from '../../core/factory/polymorphic-factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSpacing } from '../../core/utils/get-size/get-size.js';

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
  variant: "light",
  childrenOffset: "lg"
};
const varsResolver = createVarsResolver(
  (theme, { variant, color, childrenOffset }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant
    });
    return {
      root: {
        "--nl-bg": colors.background,
        "--nl-hover": colors.hover,
        "--nl-color": colors.color
      },
      children: {
        "--nl-offset": getSpacing(childrenOffset)
      }
    };
  }
);
const NavLink = polymorphicFactory((_props, ref) => {
  const props = useProps("NavLink", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    defaultOpened,
    onChange,
    children,
    onClick,
    active,
    disabled,
    leftSection,
    rightSection,
    label,
    description,
    disableRightSectionRotation,
    noWrap,
    childrenOffset
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "opened",
    "defaultOpened",
    "onChange",
    "children",
    "onClick",
    "active",
    "disabled",
    "leftSection",
    "rightSection",
    "label",
    "description",
    "disableRightSectionRotation",
    "noWrap",
    "childrenOffset"
  ]);
  const getStyles = useStyles({
    name: "NavLink",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange
  });
  const withChildren = !!children;
  const handleClick = (event) => {
    if (withChildren) {
      event.preventDefault();
      onClick == null ? void 0 : onClick(event);
      setOpened(!_opened);
    } else {
      onClick == null ? void 0 : onClick(event);
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      component: "a",
      ref,
      onClick: handleClick,
      unstyled,
      mod: { disabled, active, expanded: _opened }
    }), others),
    leftSection && /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({ component: "span" }, getStyles("section")), { mod: { position: "left" } }), leftSection),
    /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({}, getStyles("body")), { mod: { "no-wrap": noWrap } }), /* @__PURE__ */ React.createElement(Box, __spreadValues({ component: "span" }, getStyles("label")), label), /* @__PURE__ */ React.createElement(Box, __spreadValues({ component: "span", mod: { active } }, getStyles("description")), description)),
    (withChildren || rightSection) && /* @__PURE__ */ React.createElement(
      Box,
      __spreadProps(__spreadValues({}, getStyles("section")), {
        component: "span",
        mod: { rotate: _opened && !disableRightSectionRotation, position: "right" }
      }),
      withChildren ? rightSection || /* @__PURE__ */ React.createElement(AccordionChevron, __spreadValues({}, getStyles("chevron"))) : rightSection
    )
  ), /* @__PURE__ */ React.createElement(Collapse, { in: _opened }, /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("children")), children)));
});
NavLink.classes = classes;
NavLink.displayName = "@mantine/core/NavLink";

export { NavLink };
//# sourceMappingURL=NavLink.js.map
