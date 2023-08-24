'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const refCode = `
import { useFullscreen } from '@mantine/hooks';
import { Button, Stack } from '@mantine/core';

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Stack align="center">
      <img
        ref={ref}
        src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="From unsplash.com"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Stack>
  );
}
`;
function RefDemo() {
  const { ref, toggle, fullscreen } = hooks.useFullscreen();
  return /* @__PURE__ */ React__default.createElement(core.Stack, { align: "center" }, /* @__PURE__ */ React__default.createElement(
    "img",
    {
      ref,
      src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      alt: "From unsplash.com",
      width: 200
    }
  ), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: toggle, color: fullscreen ? "red" : "blue" }, fullscreen ? "Exit Fullscreen" : "View Image Fullscreen"));
}
const useFullscreenRefDemo = {
  type: "code",
  code: refCode,
  component: RefDemo
};

exports.useFullscreenRefDemo = useFullscreenRefDemo;
//# sourceMappingURL=use-fullscreen.demo.ref.js.map
