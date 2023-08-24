'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
  );
}
`;
function Demo() {
  const [checked, setChecked] = React.useState(true);
  return /* @__PURE__ */ React__default.createElement(
    core.ColorSwatch,
    {
      component: "button",
      color: "var(--mantine-color-grape-6)",
      onClick: () => setChecked((c) => !c),
      c: "white",
      style: { cursor: "pointer" }
    },
    checked && /* @__PURE__ */ React__default.createElement(core.CheckIcon, { style: { width: core.rem(12), height: core.rem(12) } })
  );
}
const component = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.component = component;
//# sourceMappingURL=ColorSwatch.demo.component.js.map
