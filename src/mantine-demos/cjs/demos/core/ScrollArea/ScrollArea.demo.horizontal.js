'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _content = require('./_content.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.ScrollArea, { w: 300, h: 200 }, /* @__PURE__ */ React__default.createElement(core.Box, { w: 600 }, /* @__PURE__ */ React__default.createElement(_content.Content, null)));
}
const horizontal = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.horizontal = horizontal;
//# sourceMappingURL=ScrollArea.demo.horizontal.js.map
