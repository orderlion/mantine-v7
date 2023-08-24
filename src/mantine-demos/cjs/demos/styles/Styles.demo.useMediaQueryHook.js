'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Tooltip, Button, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const isMobile = useMediaQuery(\`(max-width: \${em(750)})\`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`;
function Demo() {
  const isMobile = hooks.useMediaQuery(`(max-width: ${core.em(750)})`);
  return /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: isMobile ? "Mobile" : "Desktop" }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Hover me"));
}
const useMediaQueryHook = {
  type: "code",
  component: Demo,
  code
};

exports.useMediaQueryHook = useMediaQueryHook;
//# sourceMappingURL=Styles.demo.useMediaQueryHook.js.map
