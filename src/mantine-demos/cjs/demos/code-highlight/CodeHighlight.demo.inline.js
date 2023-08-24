'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var codeHighlight = require('@mantine/code-highlight');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code="import React from 'react';" language="tsx" />. Is not that cool?
    </Text>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Text, null, "You can highlight code inline:", " ", /* @__PURE__ */ React__default.createElement(codeHighlight.InlineCodeHighlight, { code: "import React from 'react';", language: "tsx" }), ". Is not that cool?");
}
const inline = {
  type: "code",
  component: Demo,
  code
};

exports.inline = inline;
//# sourceMappingURL=CodeHighlight.demo.inline.js.map
