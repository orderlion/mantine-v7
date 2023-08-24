'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _content = require('./_content.js');
var ScrollArea_demo_stylesApi_module = require('./ScrollArea.demo.stylesApi.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ScrollArea, Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScrollArea w={300} h={200} type="always" offsetScrollbars classNames={classes}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`;
const cssCode = `
.scrollbar {
  &,
  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  }

  &[data-orientation='vertical'] .thumb {
    background-color: var(--mantine-color-red-6);
  }

  &[data-orientation='horizontal'] .thumb {
    background-color: var(--mantine-color-blue-6);
  }
}

.corner {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  opacity: 1;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.ScrollArea, { w: 300, h: 200, type: "always", offsetScrollbars: true, classNames: ScrollArea_demo_stylesApi_module['default'] }, /* @__PURE__ */ React__default.createElement(core.Box, { w: 600 }, /* @__PURE__ */ React__default.createElement(_content.Content, null)));
}
const stylesApi = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=ScrollArea.demo.stylesApi.js.map
