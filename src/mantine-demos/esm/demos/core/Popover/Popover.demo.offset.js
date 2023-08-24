import React from 'react';
import { Popover, Button, Text } from '@mantine/core';
import { FLOATING_POSITION_DATA } from '../../../shared/floating-position-data.js';

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
import { Popover, Button, Text } from '@mantine/core';


function Demo() {
  return (
    <Popover
      width={200}
      opened
      {{props}}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Popover, __spreadValues({ width: 200, opened: true }, props), /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(Button, null, "Popover target")), /* @__PURE__ */ React.createElement(Popover.Dropdown, null, /* @__PURE__ */ React.createElement(Text, { size: "xs" }, "Change position and offset to configure dropdown offset relative to target")));
}
const offset = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "select",
      prop: "position",
      initialValue: "bottom",
      data: FLOATING_POSITION_DATA,
      libraryValue: null
    },
    { type: "number", prop: "offset", initialValue: 0, libraryValue: null, min: -50, max: 50 }
  ]
};

export { offset };
//# sourceMappingURL=Popover.demo.offset.js.map
