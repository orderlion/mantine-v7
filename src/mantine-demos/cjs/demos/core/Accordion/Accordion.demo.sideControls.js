'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
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
import { Accordion, ActionIcon, AccordionControlProps, Center } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray">
        <IconDots size="1rem" />
      </ActionIcon>
    </Center>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left" maw={400} mx="auto">
      <Accordion.Item value="item-1">
        <AccordionControl>Control 1</AccordionControl>
        <Accordion.Panel>Panel 1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <AccordionControl>Control 2</AccordionControl>
        <Accordion.Panel>Panel 2</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <AccordionControl>Control 3</AccordionControl>
        <Accordion.Panel>Panel 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;
function AccordionControl(props) {
  return /* @__PURE__ */ React__default.createElement(core.Center, null, /* @__PURE__ */ React__default.createElement(core.Accordion.Control, __spreadValues({}, props)), /* @__PURE__ */ React__default.createElement(core.ActionIcon, { size: "lg", variant: "subtle", color: "gray" }, /* @__PURE__ */ React__default.createElement(iconsReact.IconDots, { size: "1rem" })));
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Accordion, { chevronPosition: "left", maw: 400, mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.Accordion.Item, { value: "item-1" }, /* @__PURE__ */ React__default.createElement(AccordionControl, null, "Control 1"), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, "Panel 1")), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, { value: "item-2" }, /* @__PURE__ */ React__default.createElement(AccordionControl, null, "Control 2"), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, "Panel 2")), /* @__PURE__ */ React__default.createElement(core.Accordion.Item, { value: "item-3" }, /* @__PURE__ */ React__default.createElement(AccordionControl, null, "Control 3"), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, "Panel 3")));
}
const sideControls = {
  type: "code",
  component: Demo,
  code
};

exports.sideControls = sideControls;
//# sourceMappingURL=Accordion.demo.sideControls.js.map
