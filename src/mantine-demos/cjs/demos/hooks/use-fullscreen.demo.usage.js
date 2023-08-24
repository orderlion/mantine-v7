'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useFullscreen } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;
function Demo() {
  const { toggle, fullscreen } = hooks.useFullscreen();
  return /* @__PURE__ */ React__default.createElement(core.Button, { onClick: toggle, color: fullscreen ? "red" : "blue" }, fullscreen ? "Exit Fullscreen" : "Enter Fullscreen");
}
const useFullscreenDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useFullscreenDemo = useFullscreenDemo;
//# sourceMappingURL=use-fullscreen.demo.usage.js.map
