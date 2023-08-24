'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button variant="outline" onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`;
function Demo() {
  const [opened, setOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Ctrl + J", opened }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", onClick: () => setOpened((o) => !o) }, "Toggle color scheme"));
}
const controlled = {
  type: "code",
  centered: true,
  code,
  component: Demo
};

exports.Demo = Demo;
exports.controlled = controlled;
//# sourceMappingURL=Tooltip.demo.controlled.js.map
