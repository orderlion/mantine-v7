import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

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
const code = `
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger{{props}} opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
`;
function Wrapper(props) {
  const [opened, { toggle }] = useDisclosure();
  return /* @__PURE__ */ React.createElement(Burger, __spreadProps(__spreadValues({}, props), { opened, onClick: toggle, "aria-label": "Toggle navigation" }));
}
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: "size", prop: "size", initialValue: "md", libraryValue: "md" }]
};

export { usage };
//# sourceMappingURL=Burger.demo.usage.js.map
