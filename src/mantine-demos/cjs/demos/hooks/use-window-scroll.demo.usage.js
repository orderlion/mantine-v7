'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useWindowScroll } from '@mantine/hooks';
import { Button, Text, Group } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group justify="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;
function Demo() {
  const [scroll, scrollTo] = hooks.useWindowScroll();
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Text, null, "Scroll position x: ", scroll.x, ", y: ", scroll.y), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => scrollTo({ y: 0 }) }, "Scroll to top"));
}
const useWindowScrollDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useWindowScrollDemo = useWindowScrollDemo;
//# sourceMappingURL=use-window-scroll.demo.usage.js.map
