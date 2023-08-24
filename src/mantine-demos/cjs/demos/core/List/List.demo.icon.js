'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size="1rem" />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed size="1rem" />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.List,
    {
      spacing: "xs",
      size: "sm",
      center: true,
      icon: /* @__PURE__ */ React__default.createElement(core.ThemeIcon, { color: "teal", size: 24, radius: "xl" }, /* @__PURE__ */ React__default.createElement(iconsReact.IconCircleCheck, { size: "1rem" }))
    },
    /* @__PURE__ */ React__default.createElement(core.List.Item, null, "Clone or download repository from GitHub"),
    /* @__PURE__ */ React__default.createElement(core.List.Item, null, "Install dependencies with yarn"),
    /* @__PURE__ */ React__default.createElement(core.List.Item, null, "To start development server run npm start command"),
    /* @__PURE__ */ React__default.createElement(core.List.Item, null, "Run tests to make sure your changes do not break the build"),
    /* @__PURE__ */ React__default.createElement(
      core.List.Item,
      {
        icon: /* @__PURE__ */ React__default.createElement(core.ThemeIcon, { color: "blue", size: 24, radius: "xl" }, /* @__PURE__ */ React__default.createElement(iconsReact.IconCircleDashed, { size: "1rem" }))
      },
      "Submit a pull request once you are done"
    )
  );
}
const icon = {
  type: "code",
  centered: true,
  maxWidth: 500,
  component: Demo,
  code
};

exports.icon = icon;
//# sourceMappingURL=List.demo.icon.js.map
