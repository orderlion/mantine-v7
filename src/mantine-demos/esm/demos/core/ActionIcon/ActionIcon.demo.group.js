import React from 'react';
import { ActionIcon, rem } from '@mantine/core';
import { IconPhoto, IconSettings, IconHeart } from '@tabler/icons-react';

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
import { ActionIcon, rem } from '@mantine/core';
import { IconPhoto, IconSettings, IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon.Group{{props}}>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconPhoto style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconSettings style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(ActionIcon.Group, __spreadValues({}, props), /* @__PURE__ */ React.createElement(ActionIcon, { variant: "default", size: "lg", "aria-label": "Gallery" }, /* @__PURE__ */ React.createElement(IconPhoto, { style: { width: rem(20) }, stroke: 1.5 })), /* @__PURE__ */ React.createElement(ActionIcon, { variant: "default", size: "lg", "aria-label": "Settings" }, /* @__PURE__ */ React.createElement(IconSettings, { style: { width: rem(20) }, stroke: 1.5 })), /* @__PURE__ */ React.createElement(ActionIcon, { variant: "default", size: "lg", "aria-label": "Likes" }, /* @__PURE__ */ React.createElement(IconHeart, { style: { width: rem(20) }, stroke: 1.5 })));
}
const group = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "segmented",
      prop: "orientation",
      data: ["horizontal", "vertical"],
      initialValue: "horizontal",
      libraryValue: "horizontal"
    }
  ]
};

export { group };
//# sourceMappingURL=ActionIcon.demo.group.js.map
