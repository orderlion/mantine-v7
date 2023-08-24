'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _content = require('./_content.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Text, ScrollArea, Code, Box } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        w={300}
        h={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Box w={600}>
          {/* ... content */}
        </Box>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`;
function Demo() {
  const [scrollPosition2, onScrollPositionChange] = React.useState({ x: 0, y: 0 });
  return /* @__PURE__ */ React__default.createElement(core.Stack, { align: "center" }, /* @__PURE__ */ React__default.createElement(core.ScrollArea, { w: 300, h: 200, onScrollPositionChange }, /* @__PURE__ */ React__default.createElement(core.Box, { w: 600 }, /* @__PURE__ */ React__default.createElement(_content.Content, null))), /* @__PURE__ */ React__default.createElement(core.Text, null, "Scroll position: ", /* @__PURE__ */ React__default.createElement(core.Code, null, `{ x: ${scrollPosition2.x}, y: ${scrollPosition2.y} }`)));
}
const scrollPosition = {
  type: "code",
  component: Demo,
  code
};

exports.scrollPosition = scrollPosition;
//# sourceMappingURL=ScrollArea.demo.scrollPosition.js.map
