'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Text } from '@mantine/core';
import { useDocumentTitle, useDocumentVisibility } from '@mantine/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`;
function Demo() {
  const documentState = hooks.useDocumentVisibility();
  hooks.useDocumentTitle(`Document is ${documentState}`);
  return /* @__PURE__ */ React__default.createElement(core.Text, null, "Switch to another tab to see document title change");
}
const useDocumentVisibilityDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useDocumentVisibilityDemo = useDocumentVisibilityDemo;
//# sourceMappingURL=use-document-visibility.demo.usage.js.map
