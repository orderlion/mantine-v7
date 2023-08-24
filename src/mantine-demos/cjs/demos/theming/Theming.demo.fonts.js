'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Code, Title, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Title, { order: 3, ff: "Greycliff CF, sans-serif", ta: "center" }, "Greycliff CF title"), /* @__PURE__ */ React__default.createElement(core.Group, { mt: "md" }, /* @__PURE__ */ React__default.createElement(core.Button, { ff: "Verdana, sans-serif" }, "Verdana button"), /* @__PURE__ */ React__default.createElement(core.Code, { ff: "Monaco, Courier, monospace" }, "Monaco, Courier Code")));
}
const fonts = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.fonts = fonts;
//# sourceMappingURL=Theming.demo.fonts.js.map
