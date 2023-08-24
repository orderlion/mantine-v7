'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { useFavicon } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
    </Group>
  );
}
`;
function Demo() {
  const [favicon, setFavicon] = React.useState("https://mantine.dev/favicon.svg");
  const setTwitterFavicon = () => setFavicon("https://twitter.com/favicon.ico");
  const setMantineFavicon = () => setFavicon("https://mantine.dev/favicon.svg");
  hooks.useFavicon(favicon);
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: setTwitterFavicon }, "Twitter favicon"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: setMantineFavicon }, "Mantine favicon"));
}
const useFaviconUsage = {
  type: "code",
  component: Demo,
  code
};

exports.useFaviconUsage = useFaviconUsage;
//# sourceMappingURL=use-favicon.demo.usage.js.map
