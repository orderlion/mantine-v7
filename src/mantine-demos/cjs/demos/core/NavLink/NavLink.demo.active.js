'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

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
import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: 'Activity' },
];

function Demo() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      {{props}}
    />
  ));

  return <Box w={220}>{items}</Box>;
}
`;
const data = [
  { icon: iconsReact.IconGauge, label: "Dashboard", description: "Item with description" },
  {
    icon: iconsReact.IconFingerprint,
    label: "Security",
    rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconChevronRight, { size: "1rem", stroke: 1.5 })
  },
  { icon: iconsReact.IconActivity, label: "Activity" }
];
function Demo(props) {
  const [active2, setActive] = React.useState(0);
  const items = data.map((item, index) => /* @__PURE__ */ React__default.createElement(
    core.NavLink,
    __spreadValues({
      key: item.label,
      active: index === active2,
      label: item.label,
      description: item.description,
      rightSection: item.rightSection,
      icon: /* @__PURE__ */ React__default.createElement(item.icon, { size: "1rem", stroke: 1.5 }),
      onClick: () => setActive(index)
    }, props)
  ));
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Box, { w: 220 }, items));
}
const active = {
  type: "configurator",
  component: Demo,
  code,
  controls: [
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" },
    {
      prop: "variant",
      type: "segmented",
      data: [
        { value: "subtle", label: "Subtle" },
        { value: "light", label: "Light" },
        { value: "filled", label: "Filled" }
      ],
      libraryValue: "light",
      initialValue: "light"
    }
  ]
};

exports.active = active;
//# sourceMappingURL=NavLink.demo.active.js.map
