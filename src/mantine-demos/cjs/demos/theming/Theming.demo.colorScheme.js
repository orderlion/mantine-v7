'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useMantineColorScheme, Button, Group } from '@mantine/core';

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}
`;
function Demo() {
  const { setColorScheme, clearColorScheme } = core.useMantineColorScheme();
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => setColorScheme("light") }, "Light"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => setColorScheme("dark") }, "Dark"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => setColorScheme("auto") }, "Auto"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: clearColorScheme }, "Clear"));
}
const colorScheme = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.colorScheme = colorScheme;
//# sourceMappingURL=Theming.demo.colorScheme.js.map
